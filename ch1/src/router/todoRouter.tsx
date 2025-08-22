import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router';

const Loading = () => <div>Loading.....</div>;
const TodoIndex = lazy(() => import('../pages/todo/indexPage'));
const TodoList = lazy(() => import('../pages/todo/listPage'));
const TodoRead = lazy(() => import('../pages/todo/readPage'));

const TodoAdd = lazy(() => import('../pages/todo/addPage'));
const TodoModify = lazy(() => import('../pages/todo/modifyPage'));

const todoRouter = () => {
  return {
    path: 'todo',
    Component: TodoIndex,
    children: [
      {
        path: 'list',
        element: (
          <Suspense fallback={<Loading />}>
            <TodoList />
          </Suspense>
        ),
      },
      {
        // 아이디에 해당하는 변수값을 tno라고 지정 변수명은 마음대로 변경 가능
        //  중요한거는 tno 이렇게 받아오는것들은 다 문자열이다
        path: 'read/:tno',
        element: (
          <Suspense fallback={<Loading />}>
            <TodoRead />
          </Suspense>
        ),
      },
      {
        path: 'modify/:tno',
        element: (
          <Suspense fallback={<Loading />}>
            <TodoModify />
          </Suspense>
        ),
      },
      {
        path: 'add',
        element: (
          <Suspense fallback={<Loading />}>
            <TodoAdd />
          </Suspense>
        ),
      },
      {
        // redirect 페이지 : redirect를 할때는 useNavigate를 사용 안하고 이렇게 처리한다
        path: '',
        element: <Navigate to={'/todo/list'}></Navigate>,
      },
    ],
  };
};

export default todoRouter;
