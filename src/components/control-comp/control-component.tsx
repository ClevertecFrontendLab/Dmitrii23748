import React, { useState } from 'react';

import column from '../../assets/images/control/column-control.svg';
import columnWhite from '../../assets/images/control/column-control-white.svg';
import selectSmall from '../../assets/images/control/filter-small.svg';
import list from '../../assets/images/control/list-control.svg';
import listWhite from '../../assets/images/control/list-control-white.svg';
import search from '../../assets/images/control/search-control.svg';
import searchSmall from '../../assets/images/control/search-small.svg';
import select from '../../assets/images/control/select-control.svg';
import { IControl } from '../../utils/type';
import { SearchAdaptiveComponent } from '../search-adaptive-comp';

import './control-component.css';

export const ControlComponent: React.FC<IControl> = ({ bgColor, togleBgColor }) => {
  const [searchInput, setSearchInput] = useState(false);

  const toggleSearch = () => {
    setSearchInput(!searchInput);
  };

  return (
    <div className='control'>
      {searchInput ? (
        <SearchAdaptiveComponent toggleSearch={toggleSearch}/>
      ) : (
        <React.Fragment>
          <div className='control-search__block'>
            <div className='search-block'>
              <input className='control__search' type='text' placeholder='Поиск книги или автора…' data-test-id='input-search'/>
              <img className='search-img' src={search} alt='search' />
            </div>

            <div className='search-block__small'>
              <button className='search-btn__small' type='button' onClick={toggleSearch}>
                <img
                  className='search-small__img'
                  src={searchSmall}
                  alt='searchSmall'
                  data-test-id='button-search-open'
                />
              </button>
            </div>

            {/* {searchInput ? <SearchAdaptiveComponent toggleSearch={toggleSearch} /> : null} */}

            <div className='select-block'>
              <span className='control__btn-select'>По рейтингу</span>
              <img className='select-img' src={select} alt='select' />
            </div>

            <div className='select-block__small'>
              <img className='select-small__img' src={selectSmall} alt='selectSmall' />
            </div>
          </div>
          <div className='control__btn-block'>
            <button
              data-test-id='button-menu-view-window'
              className={bgColor ? 'control__btn-column' : 'control__btn-column  btn-bg-control'}
              type='button'
              onClick={togleBgColor}
            >
              <img src={bgColor ? column : columnWhite} alt='column' />
            </button>
            <button
              data-test-id='button-menu-view-list'
              className={bgColor ? 'control__btn-list btn-bg-control' : 'control__btn-list'}
              type='button'
              onClick={togleBgColor}
            >
              <img src={bgColor ? listWhite : list} alt='list' />
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
