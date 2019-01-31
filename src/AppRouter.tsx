import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import ButtonDemo from './views/ButtonDemo';
import ModalDemo from './views/ModalDemo';
import Home from './views/Home';
import About from './views/About';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <Home />
  },
  {
    path: '/button',
    sidebar: () => <div>Button</div>,
    main: () => <ButtonDemo />
  },
  {
    path: '/modal',
    sidebar: () => <div>Modal</div>,
    main: () => <ModalDemo />
  },
  {
    path: '/about',
    sidebar: () => <div>About</div>,
    main: () => <About />
  }
];

function AppRouter() {
  return (
    <Router>
      <div className="Router">
        <div className="Sidebar">
          <ul>
            {routes.map((route, index) => {
              return (
                <li key={index}>
                  <NavLink
                    activeClassName="active"
                    to={route.path}
                    exact={route.exact}
                  >
                    <route.sidebar />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="Main">
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
