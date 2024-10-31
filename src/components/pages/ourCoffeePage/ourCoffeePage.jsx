import { useState } from 'react';

import AppBanner from '../../appBanner/appBanner';
import AppFooter from '../../appFooter/appFooter';
import InfoBlock from '../../infoBlock/infoBlock';
import FilterButtons from '../../filterButtons/filterButtons';
import './ourCoffeePage.scss';

import about from '../../../resources/img/about-beans-img.png';
import CoffeeList from '../../coffeeList/coffeeList';
import SearchPanel from '../../searchPanel/searchPanel';

const OurCoffeePage = () => {

    const [coffeeItems, setCoffeeItems] = useState([
        { country: "Brazil", price: "6.99$"},
        { country: "Kenya", price: "5.99$"},
        { country: "Columbia", price: "7.99$"},
        { country: "Brazil", price: "6.99$"},
        { country: "Brazil", price: "6.99$"},
        { country: "Brazil", price: "6.99$"}
    ])
    const [term, setTerm] = useState('');
    const [filters, setFilters] = useState([]);

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const onUpdateFilters = (filters) => {
        setFilters(filters);
    }

    const applyFilters = (items, filters, term) => {
        let filteredItems = items;

        if (filters.length > 0) {
            filteredItems = filteredItems.filter((item) => filters.includes(item.country));
        }

        if (term) {
            filteredItems = filteredItems.filter((item) => item.country.toLowerCase().includes(term.toLowerCase()))
        }

        return filteredItems;
    }

    const filteredCoffeeItems = applyFilters(coffeeItems, filters, term);

    return (
        <section className='coffee-our'>
            <AppBanner/>
            <h1 className='coffee-our__title'>Our Coffee</h1>

            <InfoBlock 
                image={about}
                title="About our beans"
                descr={
                    <>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/>
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

            <div className="coffee-our__search">
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
                <FilterButtons onUpdateFilters={onUpdateFilters}/>
            </div>

            <CoffeeList coffeeItems={filteredCoffeeItems}/>
            
            <AppFooter/>

        </section>
    )
}

export default OurCoffeePage;