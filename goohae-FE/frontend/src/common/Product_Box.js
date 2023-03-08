import { Link } from "react-router-dom";
import "./CSS/Product_Box.css";

function Product_Box({ data }) {

    let output = data.map((v, i) => {
        return (
            <div className="product_box_css" key={`new_product_${i}`}>
                <img src={v.img} alt="img" width="100%" height="270px" />

                <div className="product_info_css">
                    <p className="product_title_css">{v.title}</p>

                    <p className="product_price_css">
                        <span className="product_current_price">{v.price.toLocaleString()}원</span>
                        <span className="product_orig_price">{v.orig_price.toLocaleString()}원</span>
                        <span className="product_dis">{v.dis}%</span>
                    </p>
                </div>

                <Link to="" className="link_style" />
            </div>
        );
    });


    return output;
}

export default Product_Box;