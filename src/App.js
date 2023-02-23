import React from "react";

import NavBar from "./Components/AssetsComponents/NavBar";
import Header from "./Components/AssetsComponents/Header";


const App = () => {
  return(
      <div>
        <div>
          <NavBar/>
        </div>

        <div id={'Header'}>
           <Header/>
        </div>

      </div>

  );
}
export default App;
