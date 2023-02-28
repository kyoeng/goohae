package com.kdt.goohae.mapper.admin;


import com.kdt.goohae.domain.admin.GetProductDTO;
import com.kdt.goohae.domain.admin.ProductImgVO;
import com.kdt.goohae.domain.admin.ProductVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {

    /* 상품 등록 */
    int regProduct(ProductVO vo);

    /* 상품 이미지 등록 */
    int regProductImg(ProductImgVO vo);

    /* 카테고리별 상품 데이터 전송 ( 페이지에 보이는 상품을 위한 ) */
    List<GetProductDTO> getProduct(GetProductDTO dto);

    /* 데이터 전체 갯수 조회 */
    int getTotalData(GetProductDTO dto);

}
