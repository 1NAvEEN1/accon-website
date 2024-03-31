// material-ui
import React from "react";
import "./loadingStyles.css";

// ==============================|| Loader ||============================== //

const Loader = () => (
  <div class="loading-overlay">
    <div id="spinner" class="container">
      <div class="loader"></div>
    </div>
  </div>
);

export default Loader;
