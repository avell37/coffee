import './searchPanel.scss';
import { useState } from 'react';

const SearchPanel = (props) => {

    const [term, setTerm] = useState('');

    const onUpdateSearch = (e) => {
        const input = e.target.value;
        setTerm(input);
        props.onUpdateSearch(input);
    }

    return (
        <div className="coffee-search">
            <div className="coffee-search__title">Looking for</div>
            <input 
                type="text"
                placeholder='start typing here...'
                className='coffee-search__input'
                value={term}
                onChange={onUpdateSearch}
                />
        </div>
    )
}

export default SearchPanel;