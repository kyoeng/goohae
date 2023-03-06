export default function ProductRow({ productData }) {
    return (
        <>
            {
                productData.map((v, i) => {
                    return (
                        <tr key={productData.title}>
                            <td>{productData.title}</td>
                            <td>{productData.category}</td>
                            <td>{productData.price}</td>
                            <td>{productData.orig_price}</td>
                        </tr>
                    )
                })
            }
        </>
    );
}