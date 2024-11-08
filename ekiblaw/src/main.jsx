import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; // Root layout
import Home from './pages/Home'; // Import Home page
import About from './pages/About'; // Import About page
import Blog from './pages/Blog'; // Import Blog page
import './index.css';
import BlogOne from './pages/BlogOne';
import BlogTwo from './pages/BlogTwo';
import BlogThree from './pages/BlogThree';
import BlogFour from './pages/BlogFour';
import BlogFive from './pages/BlogFive';



// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Root layout component
    children: [
      { path: '/', element: <Home /> }, // Home route
      { path: '/about', element: <About /> }, // About route
      { path: '/blog', element: <Blog /> },
      { path: '/blogone', element: <BlogOne /> },
      { path: '/blogtwo', element: <BlogTwo /> },
      { path: '/blogthree', element: <BlogThree /> },
      { path: '/blogfour', element: <BlogFour /> },
      { path: '/blogfive', element: <BlogFive /> }, 
    ],
  },
]);

// Render the app
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}