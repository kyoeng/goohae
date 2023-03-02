import titleStyled from '../../CSS/admin/title.module.css';

export default function Title({ titleName }) {
    return (
        <div className={titleStyled.titleContainer}>
            <h3>{titleName}</h3>
        </div>

    );
}