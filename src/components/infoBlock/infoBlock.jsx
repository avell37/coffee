import './infoBlock.scss';

import darkBeans from '../../resources/img/dark-beans.svg';

const InfoBlock = ({ image, title, descr }) => {
    return (
        <div className="info-block__wrapper">
            <img src={image} alt="coffee" className='info-block__img' />
            <div className="info-block__text">
                <div className="info-block__title">{title}</div>
                <div className="info-block__divider">
                    <img src={darkBeans} alt="dark beans" className='info-block__divider-img' />
                </div>
                <div className="info-block__descr">{descr}</div>
            </div>
        </div>
    )
}

export default InfoBlock;