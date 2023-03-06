export default function Modal({ children, infoData }) {
    const container = {
        width: "500px",
        height: "300px",
        position: "absolute",
        backgroundColor : "black"
    }

    const css = {
        width: "300px",
        height: "150px",
        border: "1px",
    }

    const imgCss = {
        width: "100px",
        height: "50px",
    }

    return (
        <div style={container}>
            <div style={css} className='modalWindow'>모달창
                <div>{infoData.title}</div>
                <div>{infoData.price}</div>
                <div>{infoData.orig_price}</div>
                <img style={imgCss} src={infoData.img} alt="이미지" />
            </div>
        </div>
    );
}