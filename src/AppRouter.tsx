import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ButtonDemo from './views/ButtonDemo';
import Home from './views/Home';
import About from './views/About';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>

        <div className="Main">
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
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
