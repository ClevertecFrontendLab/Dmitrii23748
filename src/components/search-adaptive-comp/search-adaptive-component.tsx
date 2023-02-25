/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef, useState } from 'react';

import cross from '../../assets/images/control/cross-search.svg';
import search from '../../assets/images/control/search-control.svg';
import searchOrange from '../../assets/images/control/searchOrange.svg';
import { filteredBookSearch } from '../../features/books/booksSlice';
import { useAppDispatch } from '../../hook';
import { ISearch } from '../../utils/type';

import './search-adaptive-component.css';

export const SearchAdaptiveComponent: React.FC<ISearch> = ({ toggleSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [stateSearch, setStateSearch] = useState(true);

  const filteredSearch = () => {
    dispatch(filteredBookSearch(inputRef.current?.value));
    localStorage.setItem('search', inputRef.current!.value);
    localStorage.setItem('searchFlag', 'true');
  };

  useEffect(() => {
    inputRef.current!.value = localStorage.getItem('search')!;
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className='search-block__adap'>
      <input
        className='control__search'
        type='text'
        placeholder='Поиск книги или автора…'
        ref={inputRef}
        onChange={filteredSearch}
        onFocus={() => setStateSearch(true)}
        onBlur={() => setStateSearch(false)}
        data-test-id='input-search'
      />
      <img className='search-img' src={stateSearch ? searchOrange : search} alt='search' />
      <button className='search__cross-btn' type='button' onClick={toggleSearch} data-test-id='button-search-close'>
        <img className='search-img__cross' src={cross} alt='cross' />
      </button>
    </div>
  );
};
