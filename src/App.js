import React from "react";

/*import NavBar from "./Components/AssetsComponents/NavBar";*/
import Header from "./Components/AssetsComponents/Header";
import Quisommenous from "./Components/AssetsComponents/quiSommeNous";
import Epicerie from "./Components/AssetsComponents/Epicerie";
import Horaire from "./Components/AssetsComponents/Horaire";
import Accordion from "./Components/AssetsComponents/AccComponents/Accordion";
import Footer from "./Components/AssetsComponents/Footer";


const App = () => {
  return(
      <div>
{/*        <div>
          <NavBar/>
        </div>*/}

        <div id={'Header'}>
           <Header/>
        </div>
          <div id={'QSN'}>
              <Quisommenous/>
          </div>
          <div id={'Epicerie'}>
              <Epicerie/>
          </div>
          <div id={'Horaire'}>
              <Horaire/>
          </div>
          <div>
              <Accordion/>
          </div>
          <div id={'Footer'}>
              <Footer/>
          </div>

      </div>

  );
}
export default App;
