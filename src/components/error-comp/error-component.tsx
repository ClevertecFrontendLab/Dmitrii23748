import imgError from '../../assets/images/error/error-img.svg';
import imgCloseError from '../../assets/images/error/error-img-close.svg';

import './error-component.css';

export const ErrorComponent: React.FC = () => (
  <div className='wrapper-error' data-test-id='error'>
    <div className='container'>
      <div className='error'>
        <div className='error-text__block'>
          <img className='error__img' src={imgError} alt='imgError' />
          <p className='error-text'>Что-то пошло не так. Обновите страницу через некоторое время.</p>
        </div>
        <button className='error__btn' type='button'>
            <img className='error__btn-img' src={imgCloseError} alt="imgCloseError" />
        </button>
      </div>
    </div>
  </div>
);
