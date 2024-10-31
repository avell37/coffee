import './appBanner.scss';
import {Link} from 'react-router-dom';
import coffeeLogo from '../../resources/img/coffee-beans-logo.svg';
import ourCoffeePage from '../pages/ourCoffeePage/ourCoffeePage';

const AppBanner = () => {
    return (
        <div className="coffee-header">
            <div className="coffee-header__logo">
                <img src={coffeeLogo} alt="coffeelogo" className='coffee-header__logo-img'/>
                <Link to="/" href="#" className='coffee-header__logo-text'>Coffee house</Link>
            </div>
            <div className="coffee-header__nav">
                <Link to="/our-coffee" href="#" className='coffee-header__nav-a'>Our coffee</Link>
                <Link to="/pleasure" href="#" className='coffee-header__nav-a'>For your pleasure</Link>
            </div>
        </div>
    )
};

export default AppBanner;