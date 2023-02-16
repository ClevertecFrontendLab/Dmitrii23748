/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import facebook from '../../assets/images/footer-link/facebook.svg';
import instagram from '../../assets/images/footer-link/insta.svg';
import likedin from '../../assets/images/footer-link/linkedin.svg'
import vk from '../../assets/images/footer-link/vk.svg';
import { IBurger } from '../../utils/type';

import './footer-component.css';

export const FooterComponent:React.FC<IBurger> = ({toggleBurger}) => (
  <section className='footer' onClick={toggleBurger}>
    <div className='container'>
      <nav className='footer__nav'>
        <span className='footer__info'>© 2020-2023 Cleverland. Все права защищены.</span>
        <ul className='footer__social-list'>
          <li className='footer__social-item'>
            <a className='footer__social-facebook' href='https://m.facebook.com/login/?locale2=ru_RU'>
              <img src={facebook} alt='facebook' />
            </a>
          </li>
          <li className='footer__social-item'>
            <a className='footer__social-instagram' href='https://www.instagram.com/'>
              <img src={instagram} alt='instagram'/>
            </a>
          </li>
          <li className='footer__social-item'>
            <a className='footer__social-vk' href='https://vk.com/'>
              <img src={vk} alt='vk'/>
            </a>
          </li>
          <li className='footer__social-item'>
            <a className='footer__social-vk' href='https://www.linkedin.com/'>
              <img src={likedin} alt='likedin'/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
);
