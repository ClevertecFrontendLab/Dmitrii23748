/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { TextComponent } from '../../components/text-comp';
import { IBurger } from '../../utils/type';

import './dogovor-page.css';

export const DogovorPage:React.FC<IBurger> = ({closeBurger}) => (
  <section className='dogovor-page' onClick={closeBurger}>
      <h2 className='dogovor__title'>Договор оферты</h2>
      <TextComponent  closeBurger={closeBurger}/>
  </section>
);
