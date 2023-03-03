/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-negated-condition */
import { useEffect, useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { getCategory } from '../../features/category/categorySlice';
import { useAppDispatch } from '../../hook';
import { AuthRootComponent } from '../../pages/auth/auth-root-component';
import { DogovorPage } from '../../pages/dogovor';
import { MainPage } from '../../pages/main';
import { RulesPage } from '../../pages/rules';
import { SingleBookPage } from '../../pages/single/single-book-page';
import { PrivateRoute } from '../../utils/router/privateRoute';
import { Layout } from '../layout-comp';
import { LayoutNavComponent } from '../layout-nav-comp';

export const App = () => {
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
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
              <Route path='/' element={<Navigate to='/books/all' />} />
              <Route path='/books/:namecategory' element={<MainPage closeBurger={closeBurger} />} />
              <Route path='/rules' element={<RulesPage closeBurger={closeBurger} />} />
              <Route path='/dogovor' element={<DogovorPage closeBurger={closeBurger} />} />
            </Route>
            <Route
              path='/books/:namecategory/:idbook'
              element={
                <SingleBookPage closeBurger={closeBurger} burger={burger} removeArrowOrange={removeArrowOrange} />
              }
            />
          </Route>
        </Route>

        <Route path='auth' element={<AuthRootComponent/>}/>
        <Route path='registration' element={<AuthRootComponent/>}/>

      </Routes>
    </HashRouter>
  );
};
