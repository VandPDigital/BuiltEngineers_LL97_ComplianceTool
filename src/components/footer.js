import React from "react";
import html2canvas from 'html2canvas'

const Footer = () =>{
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

const buttonStyle = {
  color: "dark gray",
  backgroundColor: "#edcd1f",
  padding: "10px",
  margin: "10px",
  fontFamily: "Arial",
  borderRadius: "5px",
  border: "0px"
}

      return (
          <div className="footer"  >
            <div className="footer-left">
              <p>
                Download Dynamically Generated File 
                <button onClick={exportAsPicture} style={buttonStyle} >Download Screenshot</button>
                {/*<input type="button" id="dwn-btn" value="Download"/>*/}
              </p>
              
                
              
            </div>
            <div className="footer-right">
            </div>
          </div>
        );
    };


export { Footer };

