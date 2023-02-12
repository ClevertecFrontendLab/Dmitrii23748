import { useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DogovorPage } from '../../pages/dogovor';
import { MainPage } from '../../pages/main';
import { RulesPage } from '../../pages/rules';
import { SingleBookPage } from '../../pages/single/single-book-page';
import { Layout } from '../layout-comp';
import { LayoutNavComponent } from '../layout-nav-comp';

export const App = () => {
  const [burger, setBurger] = useState(true);
  const [colorArrowOrange, setColorArrowOrange] = useState(true);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  const closeBurger = () => {
    setBurger(true);
  };

  const addArrowOrange = () => {
    setColorArrowOrange(true);
  };
  const removeArrowOrange = () => {
    setColorArrowOrange(false);
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout
              closeBurger={closeBurger}
              toggleBurger={toggleBurger}
              burger={burger}
              addArrowOrange={addArrowOrange}
              removeArrowOrange={removeArrowOrange}
            />
          }
        >
          <Route
            element={
              <LayoutNavComponent
                toggleBurger={toggleBurger}
                burger={burger}
                removeArrowOrange={removeArrowOrange}
                colorArrowOrange={colorArrowOrange}
                closeBurger={closeBurger}
              />
            }
          >
            <Route path='/' element={<Navigate to='/book/all' />} />
            <Route path='/book/:namecategory' element={<MainPage  closeBurger={closeBurger}/>} />
            <Route path='/rules' element={<RulesPage closeBurger={closeBurger} />} />
            <Route path='/dogovor' element={<DogovorPage closeBurger={closeBurger}/>} />
          </Route>
          <Route
            path='/book/:namecategory/:idbook'
            element={<SingleBookPage closeBurger={closeBurger} burger={burger} removeArrowOrange={removeArrowOrange} />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};
