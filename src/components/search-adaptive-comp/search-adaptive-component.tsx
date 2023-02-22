/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useRef } from 'react';

import cross from '../../assets/images/control/cross-search.svg';
import search from '../../assets/images/control/search-control.svg';
import { filteredBookSearch } from '../../features/books/booksSlice';
import { useAppDispatch } from '../../hook';
import { ISearch } from '../../utils/type';

import './search-adaptive-component.css';

export const SearchAdaptiveComponent: React.FC<ISearch> = ({ toggleSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const filteredSearch = () => {
    dispatch(filteredBookSearch(inputRef.current?.value));
    if (inputRef.current?.value) {
      localStorage.setItem('search', inputRef.current?.value);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('search')) {
      inputRef.current!.value = localStorage.getItem('search')!;
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
        data-test-id='input-search'
      />
      <img className='search-img' src={search} alt='search' />
      <button className='search__cross-btn' type='button' onClick={toggleSearch} data-test-id='button-search-close'>
        <img className='search-img__cross' src={cross} alt='cross' />
      </button>
    </div>
  );
};
