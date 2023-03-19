import { Outlet, Link } from 'react-router-dom';
import * as React from 'react';
import dynamicRoutes from './util';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/welcome">welcome</Link>
          </li>

          <li>
            <Link to="/firstpage">firstpage</Link>
          </li>

          <li>
            <Link to="/lastpage">lastpage</Link>
          </li>
          <li>
            <Link to="/testpage">testpage</Link>
          </li>
          {dynamicRoutes().map((routeM) => {
            return (
              <li>
                <Link to={`/${routeM.path}`}>{routeM.path}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
