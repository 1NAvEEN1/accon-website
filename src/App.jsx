import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import ThemeProvider from "./theme";
import store from "./app/store";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
import Loadable from "./components/Loadable/Loadable";
import { lazy } from "react";
import { Provider } from "react-redux";

const Layout = Loadable(lazy(() => import("./layout")));
const Home = Loadable(lazy(() => import("./pages/Home")));
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
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <Provider store={store}>
        <ThemeProvider>
          <LoadingAnimation />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    )
  );
};

export default App;
