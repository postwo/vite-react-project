import { createBrowserRouter } from 'react-router';

import { lazy, Suspense } from 'react';
import BasicLayout from '../layouts/BasicLayout';

const Loading = () => <div>Loding ....</div>;

//lazy는 필요할때까지 로딩을 안하는거다
const Main = lazy(() => import('../pages/mainPage'));

const About = lazy(() => import('../pages/aboutPage'));

const router = createBrowserRouter([
  {
    path: '',

    Component: BasicLayout,
    /*하위 경로 */
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
