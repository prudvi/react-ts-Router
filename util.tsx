import * as React from 'react';

const dynamicRoutes = () => {
  return [
    {
      path: 'testpage1',
      element: <div> testpage1</div>,
    },
    {
      path: 'testpage2',
      element: <div> testpage2</div>,
    },
    {
      path: 'testpage3',
      element: <div> testpage3</div>,
    },
    {
      path: 'testpage5',
      element: <div> testpage5</div>,
    },
    {
      path: 'testpage6',
      element: <div> testpage6</div>,
    },
  ];
};

export default dynamicRoutes;
