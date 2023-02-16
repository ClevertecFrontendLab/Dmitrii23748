/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { TextComponent } from '../../components/text-comp';
import { IBurger } from '../../utils/type';

import './rules-page.css';

export const RulesPage:React.FC<IBurger> = ({closeBurger}) =>  (
  <section className='rules-page' onClick={closeBurger}>
    <h2 className='rules__title'>Правила пользования</h2>
    <TextComponent closeBurger={closeBurger} />
  </section>
);
