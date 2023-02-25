/* eslint-disable react/button-has-type */
import React from 'react';

interface IButton {
  test: string;
  controlbtn: string;
  togleBgColor: () => void;
  imgButton: string;
}

export const ButtonComponent: React.FC<IButton> = ({ test, controlbtn, togleBgColor, imgButton }) => (
  <button data-test-id={test} className={controlbtn} type='button' onClick={togleBgColor}>
    <img src={imgButton} alt='btn' />
  </button>
);
