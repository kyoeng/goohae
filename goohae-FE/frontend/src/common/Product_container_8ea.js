function Product_container_8ea({ children, title }) {
    const product_container_css = {
        marginTop: "50px",
        width: "100%",
        height: "820px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    };

    const product_container_title = {
        width: "100%",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        fontSize: "2.5rem"
    };

    const product_inner_css = {
        width: "100%",
        height: "720px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "10px"
    };


    return (
        <div style={product_container_css}>
            <h2 style={product_container_title}>{title}</h2>

            <div style={product_inner_css}>
                {children}
            </div>
        </div>
    );
}


export default Product_container_8ea;