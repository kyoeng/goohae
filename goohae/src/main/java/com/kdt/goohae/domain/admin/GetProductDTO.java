package com.kdt.goohae.domain.admin;


import lombok.Data;

/**
 * 카테고리별 상품 데이터 전송을 위한 DTO
 */
@Data
public class GetProductDTO {

    // 카테고리 검색을 위한 필드
    private int categoryCode;
    
    // 데이터 전송을 위한 필드
    private int productCode;
    private String productName;
    private int price;
    private int discount;
    private String imagePath;

    // 시작 인덱스와 가져올 데이터 갯수를 위한 필드
    private int startNum;
    private int rowsPerPage;

}
