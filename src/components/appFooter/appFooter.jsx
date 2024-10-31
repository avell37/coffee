import './appFooter.scss';
import coffeeLogo from '../../resources/img/coffee-dark-beans-logo.svg';
import coffeeFooter from '../../resources/img/dark-beans.svg';
import { Link } from 'react-router-dom';

const AppFooter = () => {
    return (
        <div className="coffee__footer">
            <div className="coffee__footer-top">
                <div className="coffee__logo">
                    <img src={coffeeLogo} alt="coffeelogo" className='coffee__logo-img'/>
                    <Link to="/" className='coffee__logo-text'>Coffee house</Link>
                </div>
                <div className="coffee__nav">
                    <Link to="/our-coffee" className='coffee__nav-a'>Our coffee</Link>
                    <Link to="/pleasure" className='coffee__nav-a'>For your pleasure</Link>
                </div>
            </div>
            <img className='coffee__footer-img' src={coffeeFooter} alt="footer" />
        </div>
    )
};

export default AppFooter;