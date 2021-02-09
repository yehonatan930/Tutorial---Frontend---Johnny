import React from 'react';
import './App.css';
import { Typography} from '@material-ui/core'
// import { Banner, HalfPage, StickyHalfPage } from './ads/src/ads/ads';
import { TemplateExhibitor } from './components/TemplatesExhibitor';
import { TemplateProvider } from './utils/TemplateContext';
// import LyingKitbag from "./ads/src/ads/LyingK.jpg";
// import Madim from "./ads/src/ads/madim.jpg";

function App() {

  return (
    <div className="App">
      <TemplateProvider>

        <header className="App-header">
          {/* <StickyHalfPage href={'https://madim-develop.azurewebsites.net/#/home'} image={Madim}></StickyHalfPage> */}

          <Typography variant='h1'>This is a Template page</Typography>
          <TemplateExhibitor/>

        </header>
        {/* <Banner href={"https://kitbag.prat.idf.il/#"} image={LyingKitbag}></Banner> */}
      </TemplateProvider>

    </div>
  );
}

export default App;
