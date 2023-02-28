package com.kdt.goohae.service.admin;

import com.kdt.goohae.domain.admin.GetProductDTO;
import com.kdt.goohae.domain.admin.ProductImgVO;
import com.kdt.goohae.domain.admin.ProductVO;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;

public interface ProductService {

    /* 상품 등록 */
    int regProduct(ProductVO vo);

    /* 상품 이미지 등록 */
    int regProductImg(ProductImgVO vo, MultipartFile file, HttpServletRequest request, int fileNum) throws IOException;

    /* 카테고리별 상품 데이터 전송 ( 페이지에 보이는 상품을 위한 ) */
    List<GetProductDTO> getProduct(GetProductDTO dto);

    /* 데이터 전체 갯수 조회 */
    int getTotalData(GetProductDTO dto);
}
