import { Link } from "react-router-dom";

function Product_Box({ data }) {
    const product_box_css = {
        width: "270px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        position: "relative"
    };

    const product_info_css = {
        width: "100%",
        height: "80px",
        display: "flex",
        flexDirection: "column"
    }

    const product_title_css = {
        width: "100%",
        height: "40px",
        lineHeight: "40px",
        paddingLeft: "20px",
        fontSize: "1.5rem"
    }

    const product_price_css = {
        width: "100&",
        height: "40px",
        lineHeight: "40px",
        display: "flex",
        paddingLeft: "20px",
        paddingRight: "20px",
        justifyContent: "space-between"
    }

    const product_current_price = {
        fontSize: "1.5rem",
        width: "40%",
        height: "100%"
    }

    const product_orig_price = {
        fontSize: "1.5rem",
        width: "40%",
        height: "100%",
        color: "#505DD0",
        textDecoration: "line-through"
    }

    const product_dis = {
        fontSize: "1.3rem",
        width: "15%",
        height: "100%",
        color: "#505DD0",
    }

    const link_style = {
        display: "block",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0"
    }


    let output = data.map((v, i) => {
        return (
            <div style={product_box_css} key={`new_product_${i}`}>
                <img src={v.img} alt="img" width="100%" height="270px" />

                <div style={product_info_css}>
                    <p style={product_title_css}>{v.title}</p>

                    <p style={product_price_css}>
                        <span style={product_current_price}>{v.price.toLocaleString()}원</span>
                        <span style={product_orig_price}>{v.orig_price.toLocaleString()}원</span>
                        <span style={product_dis}>{v.dis}%</span>
                    </p>
                </div>

                <Link to="" style={link_style} />
            </div>
        );
    });


    return output;
}

export default Product_Box;