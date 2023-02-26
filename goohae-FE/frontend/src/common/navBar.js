export default function navBar(navClassName, nav1, nav2, nav3, nav4) {
    return (
        <div className={navClassName}>
            <div>{nav1}</div>
            <div>{nav2}</div>
            <div>{nav3}</div>
            <div>{nav4}</div>
        </div>
    );
}