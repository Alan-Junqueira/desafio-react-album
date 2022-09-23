import { useRoutes } from 'react-router-dom';
import Album from '../pages/Album';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Photo from '../pages/Photo';

const Routes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/album/:slug', element: <Album /> },
    { path: '/photo/:slug', element: <Photo /> },
    { path: '*', element: <NotFound /> }
  ]);
};

export default Routes;
