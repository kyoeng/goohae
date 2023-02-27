import banner from "../../stores/images/banner/banner1.jpg";


function Banner() {
    const banner_container = {
        width: "100%",
        height: "600px",
        marginTop: "158px"
    }

    const banner_inner = {
        position: "relative",
        width: "100%",
        height: "100%"
    }

    const banner_img = {
        position: "absolute",
        width: "100%",
        height: "100%"
    }

    const bannerImg = banner;

    return (
        <div style={banner_container}>
            <ul style={banner_inner}>
                <li style={banner_img}>
                    <img src={bannerImg} alt="banner" width="100%" height="100%" />
                </li>
            </ul>
        </div>
    )
}


export default Banner;