import './App.css';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Main from './Pages/MainPage/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPage from './Pages/RootPage/RootPage';
import FeedPage from './Pages/FeedPage/FeedPage';
import MyPage from './Pages/MyPage/MyPage';
import TokenStorage from './Module/HandleToken.js'
import PostPage from './Pages/PostPage/PostPage';


const tokenStorage = new TokenStorage();

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage tokenStorage={tokenStorage} />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },
      { path: '/feeds', element: <FeedPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: 'posts/:id', element: <PostPage /> }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router}>
      <Main />
    </RouterProvider >
  );
}

export default App;
