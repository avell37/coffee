import './coffeeList.scss';
import { Link } from 'react-router-dom';

import aromistico from '../../resources/img/our-best-aromistico.png';

const CoffeeList = ({ coffeeItems }) => {
    return (
        <div className="coffee-list">
            {coffeeItems.map((item, i) => (
                <Link to={`/coffee/${i}`} key={i} className='coffee-list__item'>
                    <img className='coffee-list__item-img' src={aromistico} alt="aromistico" />
                    <div className="coffee-list__item-title">AROMISTICO Coffee 1 kg</div>
                    <div className="coffee-list__item-country">{item.country}</div>
                    <div className="coffee-list__item-price">{item.price}</div>
                </Link>
        ))}
        </div>
    )
    
}

export default CoffeeList;