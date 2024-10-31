import AppBanner from '../../appBanner/appBanner';
import AppFooter from '../../appFooter/appFooter';

import { Link } from 'react-router-dom';
import beans from '../../../resources/img/beans.svg';
import darkBeans from '../../../resources/img/dark-beans.svg';
import solimo from '../../../resources/img/our-best-solimo.png';
import presto from '../../../resources/img/our-best-presto.png';
import aromistico from '../../../resources/img/our-best-aromistico.png';

import './mainPage.scss';

const MainPage = () => {
    return (
        <section className="coffee__house">
            <AppBanner/>
            <div className="coffee__main">
                <div className="coffee__main-title">Everything You Love About Coffee</div>
                <div className="coffee__main-beans">
                    <img src={beans} alt="beans" />
                </div>
                <div className="coffee__main-subtitle">We makes every day full of energy and taste</div>
                <div className="coffee__main-subtitle">Want to try our beans?</div>
                <Link to="/our-coffee"><button className="btn-more">More</button></Link>
            </div>

            <div className="coffee__aboutus">
                <div className="coffee__aboutus-title">About us</div>
                <img src={darkBeans} alt="darkBeans" className="coffee__aboutus-img"/>
                <div className="coffee__aboutus-descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </div>
                <div className="coffee__aboutus-descr">
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </div>
            </div>

            <div className="coffee__ourbest">
                <div className="coffee__ourbest-header">Our best</div>
                <div className="coffee__ourbest-items">
                    <Link to="/coffee/:id" className="coffee__ourbest-item">
                        <img className="coffee__ourbest-img" src={solimo} alt="solimo coffee" />
                        <div className="coffee__ourbest-title">Solimo Coffee Beans 2 kg</div>
                        <div className="coffee__ourbest-price">10.73$</div>
                    </Link>
                    <Link to="/coffee/:id" className="coffee__ourbest-item">
                        <img className="coffee__ourbest-img" src={presto} alt="presto coffee" />
                        <div className="coffee__ourbest-title">Presto Coffee Beans 1 kg</div>
                        <div className="coffee__ourbest-price">15.99$</div>
                    </Link>
                    <Link to="/coffee/:id" className="coffee__ourbest-item">
                        <img className="coffee__ourbest-img" src={aromistico} alt="aromistico coffee" />
                        <div className="coffee__ourbest-title">AROMISTICO Coffee 1 kg</div>
                        <div className="coffee__ourbest-price">6.99$</div>
                    </Link>
                </div>
            </div>
            <AppFooter/>
        </section>
    )
}

export default MainPage;