import cross from '../../assets/images/control/cross-search.svg';
import search from '../../assets/images/control/search-control.svg';
import { ISearch } from '../../utils/type';

import './search-adaptive-component.css';

export const SearchAdaptiveComponent: React.FC<ISearch> = ({ toggleSearch }) => (
  <div className='search-block__adap'>
    <input className='control__search' type='text' placeholder='Поиск книги или автора…' data-test-id='input-search' />
    <img className='search-img' src={search} alt='search' />
    <button className='search__cross-btn' type='button' onClick={toggleSearch} data-test-id='button-search-close'>
      <img className='search-img__cross' src={cross} alt='cross' />
    </button>
  </div>
);
