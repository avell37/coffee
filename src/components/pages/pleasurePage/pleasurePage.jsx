import AppBanner from '../../appBanner/appBanner';
import InfoBlock from '../../infoBlock/infoBlock';
import './pleasurePage.scss';

import pleasure from '../../../resources/img/about-goods-img.png';
import CoffeeList from '../../coffeeList/coffeeList';
import { useState } from 'react';
import AppFooter from '../../appFooter/appFooter';

const PleasurePage = () => {
    const [coffeeItems, setCoffeeItems] = useState([
        { country: "Brazil", price: "6.99$"},
        { country: "Kenya", price: "5.99$"},
        { country: "Columbia", price: "7.99$"},
        { country: "Brazil", price: "6.99$"},
        { country: "Brazil", price: "6.99$"},
        { country: "Brazil", price: "6.99$"}
    ])

    return (
        <section className="coffee-pleasure">
            <AppBanner/>
            <h1 className='coffee-pleasure__title'>For your pleasure</h1>

            <InfoBlock
                image={pleasure} 
                title="About our goods"
                descr={
                    <>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. 
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    </>
                }
                />

            <div className="divider"></div>

            <CoffeeList coffeeItems={coffeeItems}/>

            <AppFooter/>
        </section>
    )
}

export default PleasurePage;