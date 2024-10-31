import './filterButtons.scss';
import { useState, useCallback } from 'react';

const FilterButtons = (props) => {

    const { onUpdateFilters } = props;

    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterClick = (country) => {
        
        let updatedFilters = [...selectedFilters];

        const index = updatedFilters.indexOf(country);

        if (index === -1) {
            updatedFilters.push(country)
        } else {
            updatedFilters.splice(index, 1);
        }

        setSelectedFilters(updatedFilters);
        onUpdateFilters(updatedFilters);

        return updatedFilters;
    }

    const filteredCountry = ["Brazil", "Kenya", "Columbia"];

    return (
        <div className="filter__wrapper">
            <div className="filter__wrapper-title">Or filter</div>
            <div className="filter__wrapper-buttons">
                {filteredCountry.map((country, i) => (
                    <button
                        key={country}
                        className={`filter__wrapper-btn ${selectedFilters.includes(country) ? 'active' : ''}`}
                        onClick={() => handleFilterClick(country)}
                    >
                        {country}
                    </button>
                ))}
            </div>
        </div>
    )

}

export default FilterButtons;