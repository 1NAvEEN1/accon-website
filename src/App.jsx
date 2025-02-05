import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ThemeProvider from "./theme";
import store from "./app/store";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
import Loadable from "./components/Loadable/Loadable";
import { lazy } from "react";
import { Provider } from "react-redux";

const Layout = Loadable(lazy(() => import("./layout")));
const Home = Loadable(lazy(() => import("./pages/Home")));
const Services = Loadable(lazy(() => import("./pages/Services")));
const Projects = Loadable(lazy(() => import("./pages/Projects")));
// const ContactUs = Loadable(lazy(() => import("./pages/ContactUs")));
// const AboutUs = Loadable(lazy(() => import("./pages/AboutUs")));
// const KidsPlayArea = Loadable(lazy(() => import("./pages/KidsPlayArea")));
// const TreeHouses = Loadable(lazy(() => import("./pages/TreeHouses")));
// const Chalets = Loadable(lazy(() => import("./pages/Chalets")));
// const TinyHouses = Loadable(lazy(() => import("./pages/TinyHouses")));
// const Gallery = Loadable(lazy(() => import("./pages/Gallery")));

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

const App = () => {
  return (
      <Provider store={store}>
        <ThemeProvider>
          <LoadingAnimation />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
  );
};

export default App;
