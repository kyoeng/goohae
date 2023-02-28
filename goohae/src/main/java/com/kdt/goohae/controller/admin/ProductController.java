package com.kdt.goohae.controller.admin;


import com.kdt.goohae.domain.admin.GetProductDTO;
import com.kdt.goohae.domain.admin.ProductImgVO;
import com.kdt.goohae.domain.admin.ProductVO;
import com.kdt.goohae.domain.forPaging.Criteria;
import com.kdt.goohae.domain.forPaging.PageMaker;
import com.kdt.goohae.service.admin.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
public class ProductController {

    // 필드
    private final ProductService productService;

    // 생성자
    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    // 컨트롤러 메서드
    /**
     * 상품 등록에 대한 컨트롤러
     * @param vo = 상품에 대한 데이터
     * @param img_vo = 상품 이미지에 대한 데이터
     * @param request = HttpServletRequest
     * @return String ( 결과 정보 )
     * @throws IOException
     */
    @PostMapping("/api/admin/certi/reg-pro")
    public String regProduct(@ModelAttribute ProductVO vo, ProductImgVO img_vo, HttpServletRequest request) throws IOException {
        String manager = (String) request.getAttribute("id");
        String auth = (String)request.getAttribute("auth");

        // 계정 권한에 따른 권한 설정 ( 나중에 filter로 뺄 수 있으면 빼기 )

        // 계정 권한이 없는 경우
        if (auth == null || auth == "" || auth.equalsIgnoreCase("C")) {
            return "권한이 없습니다.";

        // 계정 권한이 있는 경우
        } else {
            vo.setManagerId(manager);

            if (productService.regProduct(vo) > 0) {
                List<MultipartFile> files = vo.getFiles();

                img_vo.setProductName(vo.getProductName());
                img_vo.setProductOption(vo.getProductOption());

                int fileNum = 0;

                for (MultipartFile m : files) {
                    fileNum++;

                    if (productService.regProductImg(img_vo, m, request, fileNum) < 1) {
                        return "이미지 등록 실패";
                    }
                }

                return "상품 등록 성공";
            } else {
                return "상품 등록 실패";
            }
        }
    } // regProduct


    /**
     * 카테고리별 상품 데이터 전송을 위한 컨트롤러 ( 페이지에 보여질 상품 )
     * @param dto = 상품 데이터 전송을 위한 DTO
     * @param pageMaker = 페이징을 위한 객체
     * @param currentPage = 현재 페이지 번호
     * @return GetProductDTO로 이루어진 List, PageMaker 객체
     */
    @GetMapping("/api/product/get")
    public Map<String, Object> getProduct(GetProductDTO dto, PageMaker pageMaker,
                                          @RequestParam(value = "currentPage", required = false) Integer currentPage) {
        Criteria criteria = new Criteria();

        if (currentPage != null) criteria.setCurrentPage(currentPage);
        criteria.setStartnum();

        dto.setStartNum(criteria.getStartnum());
        dto.setRowsPerPage(criteria.getRowsPerPage());

        Map<String, Object> map = new LinkedHashMap<>();
        map.put("product", productService.getProduct(dto));

        pageMaker.setCriteria(criteria);
        pageMaker.setTotalDataCount(productService.getTotalData(dto));
        map.put("pageMaker", pageMaker);

        return map;
    } // getProduct

}
