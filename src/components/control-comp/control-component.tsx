/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef, useState } from 'react';

import column from '../../assets/images/control/column-control.svg';
import columnWhite from '../../assets/images/control/column-control-white.svg';
import selectSmall from '../../assets/images/control/filter-small.svg';
import list from '../../assets/images/control/list-control.svg';
import listWhite from '../../assets/images/control/list-control-white.svg';
import search from '../../assets/images/control/search-control.svg';
import searchSmall from '../../assets/images/control/search-small.svg';
import searchOrange from '../../assets/images/control/searchOrange.svg';
import select from '../../assets/images/control/select-control.svg';
import selectUp from '../../assets/images/control/select-up.svg';
import { filteredBookSearch, sortedDown, sortedUp } from '../../features/books/booksSlice';
import { useAppDispatch, useAppSelector } from '../../hook';
import { IControl } from '../../utils/type';
import { ButtonComponent } from '../button-comp';
import { SearchAdaptiveComponent } from '../search-adaptive-comp';

import './control-component.css';

export const ControlComponent: React.FC<IControl> = ({ bgColor, togleBgColor }) => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.booksRed);

  const inputRef = useRef<HTMLInputElement>(null);

  const [searchInput, setSearchInput] = useState(false);
  const [stateSearch, setStateSearch] = useState(true);

  const toggleSearch = () => {
    setSearchInput(!searchInput);
  };

  const filteredSearch = () => {
    dispatch(filteredBookSearch(inputRef.current?.value));
    localStorage.setItem('search', inputRef.current!.value);
    localStorage.setItem('searchFlag', 'true');
  };

  const sortedBooks = () => {
    if (sort === 'up') {
      dispatch(sortedDown());
    } else if (sort === 'down') {
      dispatch(sortedUp());
    }
  };

  useEffect(() => {
    inputRef.current!.value = localStorage.getItem('search')!;

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className='control'>
      {searchInput ? (
        <SearchAdaptiveComponent toggleSearch={toggleSearch} />
      ) : (
        <React.Fragment>
          <div className='control-search__block'>
            <div className='search-block'>
              <input
                className='control__search'
                type='text'
                placeholder='Поиск книги или автора…'
                data-test-id='input-search'
                ref={inputRef}
                onChange={filteredSearch}
                onFocus={() => setStateSearch(true)}
                onBlur={() => setStateSearch(false)}
                value={localStorage.getItem('search')!}
              />

              <img className='search-img' src={stateSearch ? searchOrange : search} alt='search' />
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
            <div className='select-block' onClick={sortedBooks} data-test-id='sort-rating-button'>
              <span className='control__btn-select'>По рейтингу</span>
              <img className='select-img' src={sort === 'down' ? select : selectUp} alt='select' />
            </div>

            <div className='select-block__small'>
              <img className='select-small__img' src={selectSmall} alt='selectSmall' />
            </div>
          </div>
          <div className='control__btn-block'>
            <ButtonComponent
              test='button-menu-view-window'
              controlbtn={bgColor ? 'control__btn-column' : 'control__btn-column  btn-bg-control'}
              togleBgColor={togleBgColor}
              imgButton={bgColor ? column : columnWhite}
            />
            <ButtonComponent
              test='button-menu-view-list'
              controlbtn={bgColor ? 'control__btn-list btn-bg-control' : 'control__btn-list'}
              togleBgColor={togleBgColor}
              imgButton={bgColor ? listWhite : list}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
