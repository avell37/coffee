import './singleCoffeePage.scss';

import AppBanner from '../../appBanner/appBanner';
import AppFooter from '../../appFooter/appFooter';

import aromistico from '../../../resources/img/about-it-img.jpg';
import darkBeans from '../../../resources/img/dark-beans.svg';

const SingleCoffeePage = () => {

    return (
        <section className='single-coffee'>
            <AppBanner/>
            <h1 className='single-coffee__title'>Our Coffee</h1>

            <div className="single-coffee__wrapper">
                <div className="single-coffee__wrapper-img">
                    <img src={aromistico} alt="aromistico" className='single-coffee__img' />
                </div>
                <div className="single-coffee__wrapper-text">
                    <div className="single-coffee__wrapper-title">About it</div>
                    <div className="single-coffee__wrapper-decor">
                        <img src={darkBeans} alt="beans" />
                    </div>
                    <div className="single-coffee__wrapper-country"><span>Country:</span> Brasil</div>
                    <div className="single-coffee__wrapper-descr"><span>Description:</span> Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className="single-coffee__wrapper-price"><span>Price:</span> 16.99$</div>
                </div>
            </div>

            <AppFooter/>
        </section>
    )
}

export default SingleCoffeePage;