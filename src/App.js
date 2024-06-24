import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import PostPage from './pages/Post';
import BlogPage, { loader as pageLoader } from './pages/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'posts',
        children: [
          { index: true, element: <BlogPage />, loader: pageLoader },
          { path: 'id', element: <PostPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
