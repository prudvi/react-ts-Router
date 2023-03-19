import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

import dynamicRoutes from './util';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout> </Layout>}>
            <Route index element={<div> index</div>} />
            <Route path="blogs" element={<div> blogs</div>} />
            <Route path="contact" element={<div> contact</div>} />
            <Route path="welcome" element={<div> welcome</div>} />
            <Route path="firstpage" element={<div> firstPage</div>} />
            <Route path="lastpage" element={<div> lastPage</div>} />
            {dynamicRoutes().map((routeM) => {
              return <Route path={routeM.path} element={routeM.element} />;
            })}
            <Route path="testpage" element={<div> testpage</div>} />

            <Route path="*" element={<div> no page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
