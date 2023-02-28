package com.kdt.goohae.service.admin;


import com.kdt.goohae.domain.admin.ProductImgVO;
import com.kdt.goohae.domain.admin.ProductVO;
import com.kdt.goohae.mapper.admin.ProductMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductMapper productMapper;

    public ProductServiceImpl(ProductMapper productMapper) {
        this.productMapper = productMapper;
    }


    /**
     * 상품 테이블에 상품 업로드 메서드
     * @param vo = 상품에 대한 데이터
     * @return 성공 시 1, 실패 시 0
     */
    @Override
    public int regProduct(ProductVO vo) {
        return productMapper.regProduct(vo);
    }

    /**
     * 상품 이미지 저장 및 상품 이미지 테이블 업로드 메서드
     * @param vo = 상품 이미지에 대한 데이터
     * @param file = 파일 객체
     * @param request = HttpServletRequest
     * @param fileNum = 파일 이름을 위한 파일 순서
     * @return 성공 시 1, 실패 시 0
     * @throws IOException
     */
    @Override
    public int regProductImg(ProductImgVO vo, MultipartFile file, HttpServletRequest request, int fileNum) throws IOException {
        if (file.isEmpty()) return 0;

        // C:\Users\Administrator.User -2022BCCGJ\AppData\Local\Temp\tomcat-docbase.8080.3283113623034941828\
        String realPath = request.getServletContext().getRealPath("/");
        String saveFileNameToDB = "";

        if (realPath.contains("Temp")) {
            realPath = "C:\\goohae\\goohae-FE\\frontend\\src\\stores\\images\\sub\\" + vo.getCategoryCode() + "\\" + vo.getProductName() + "\\";
        } else {
            realPath = "";
        }

        // 디렉토리 생성
        File dir = new File(realPath);
        if (!dir.exists()) dir.mkdir();

        // 파일 이름 추출
        String origName = file.getOriginalFilename();

        // 바꿔서 저장할 파일 이름 생성
        String uuid = vo.getProductName() + "-" + UUID.randomUUID().toString().substring(0, 10) + "-" + fileNum;

        // 파일 확장자 가져오기
        String extension = origName.substring(origName.lastIndexOf("."));

        // 실제 저장을 위한 파일 이름 만들기
        String realSaveFileName = uuid + extension;

        // 파일 저장 경로 설정 후 저장
        String savePath = realPath + realSaveFileName;
        file.transferTo(new File(savePath));

        // DB에 저장할 경로 설정
        vo.setImagePath(saveFileNameToDB + realSaveFileName);

        return productMapper.regProductImg(vo);
    }
}
