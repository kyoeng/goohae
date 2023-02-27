function Product_container_4ea({ children, title }) {
    const product_container_css = {
        marginTop: "50px",
        width: "100%",
        height: "450px",
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
        height: "350px",
        display: "flex",
        justifyContent: "space-between"
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


export default Product_container_4ea;