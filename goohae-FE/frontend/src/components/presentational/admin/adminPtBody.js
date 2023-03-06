import { useSelector } from "react-redux";
import { useState } from "react";

export default function ({ clickRow, productData }) {
    const bodyData = [
        1, 2, 3, 4
    ]
    return (
        <tbody>
            {bodyData.map((product) => {
                return (
                    <tr key={product.prod_id} onClick={clickRow}>
                        <td>{product.category}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.orig_price}</td>
                    </tr>
                );
            })}
        </tbody>
    );
}