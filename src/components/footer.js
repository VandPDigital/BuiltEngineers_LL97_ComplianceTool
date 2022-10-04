import React from "react";



const Footer = (props) => {
  const   retrofiturl =
    "https://www1.nyc.gov/site/nycaccelerator/index.page?utm_source=BEEx&utm_medium=LL97_Calc&utm_campaign=Evergreen";
  const akfurl = "http://www.akfgroup.com";

  return (
    <div className="footer">
      <div className="footer-left">
        <p>
          Download Dynamically Genereated File   <input type="button" id="dwn-btn" value="Download"/>
        </p>
      </div>
      <div className="footer-right">
      </div>
    </div>
  );
};



export { Footer };
