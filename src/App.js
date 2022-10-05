import React, { useEffect } from "react";
import Sidebar from "./components/sidebar.js";
import CardLayout from "./components/cardlayout";

import SmallScreen from "./components/smallscreen.js";
import LoadBldgModal from "./components/loadbldgmodal";
import LoadConfirmDialog from "./components/loadconfirmdialog";
import UtilityRateModal from "./components/utilityratemodal";
import { Footer } from "./components/footer.js";
import html2canvas from 'html2canvas'

import { conn } from "./store/connect";

import "./App.css";
import "./css/sidebar.css";
import "./css/mainlayout.css";
import "./css/header.css";
import "./css/chart.css";
import "./css/printlayout.css";
import "./css/infomodal.css";
import "./css/loadmodal.css";
import "./css/typography.css";
import "./css/logos.css";
import "./css/footer.css";

const App = (props) => {
  const { dims } = props;

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const handleResize = () => {
    props.actions.setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    if (dims.width < 800 || dims.height < 600) {
      props.actions.setIsSmallScreen(true);
    } else {
      props.actions.setIsSmallScreen(false);
    }
  }, [dims, props.actions]);
  
  const exportAsPicture = () => {
    var html = document.getElementsByTagName('HTML')[0]
    var body =  document.getElementsByTagName('BODY')[0]
    var htmlWidth = html.clientWidth;
    var bodyWidth = body.clientWidth;
    
    var data = document.getElementById('main-container')
    var newWidth = data.scrollWidth - data.clientWidth

    
    if (newWidth > data.clientWidth){
        htmlWidth += newWidth 
        bodyWidth += newWidth
    }
    
    html.style.width = htmlWidth + 'px'
    body.style.width = bodyWidth + 'px'

    
    html2canvas(data).then((canvas)=>{
        var image = canvas.toDataURL('image/png', 1.0);
        return image
    }).then((image)=>{
        saveAs(image, '2024_LL97_Compliance_Fillout.png') 
        html.style.width = null
        body.style.width = null
    })
}

const saveAs = (blob, fileName) =>{
    var elem = window.document.createElement('a');
    elem.href = blob
    elem.download = fileName;
    elem.style = 'display:none;';
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
        elem.click();
    } else {
        elem.target = '_blank';
        elem.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
        }));
    }
    URL.revokeObjectURL(elem.href);
    elem.remove()
}
  
  return (
    <div id="main-container" allowtaint="true" foreignobjectrendering="true">
      <React.Fragment>
        <LoadBldgModal />
        <LoadConfirmDialog />
        <UtilityRateModal />
        <SmallScreen />
          <div className="main-container" >
            <Sidebar />
            <CardLayout />
            <Footer />
              {/*<input type='button' id='but_screenshot' value='Take screenshot' onClick={exportAsPicture}></input>*/}
          </div>
      </React.Fragment>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dims: state.ui.dims,
  };
};



export default conn(mapStateToProps)(App);
