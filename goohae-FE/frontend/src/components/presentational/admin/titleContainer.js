import titleStyled from '../../CSS/admin/titleContainer.module.css';

export default function TitleContainer({ titleName }) {
    return (
        <div className={titleStyled.titleContainer}>
            <h3>{titleName}</h3>
        </div>

    );
}