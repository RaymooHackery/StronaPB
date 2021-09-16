import React from "react";
import "./description.scss";
import Logo from "./logo.png";

const Description = () => {
  return (
    <div>
      <div className="description">
        <img src={Logo} alt="PBInvest" className="description-img" />
        <div className="description-main">
          <div>
            Czas budowy lub remontu to zazwyczaj okres nerwowości,
            zniecierpliwienia i radość jednocześnie. Najczęściej nasze
            doświadczenia sprowadzają się do negatywnej oceny tego czasu w
            naszym życiu. Ale to już przeszłość! My uwolnimy Cię od traumy i
            nadamy mu nowego znaczenia. Sprawimy, że Twoje wizje nie tylko staną
            się realne, ale przez proces ich tworzenia przejdziesz bez łez i
            złorzeczenia.
          </div>
        </div>
      </div>
      <div>
        <div className="description-sub">
          <ul>
            <strong>Remont z nami to:</strong>
            <div className="description-list">
              <li>jakość!</li>
              <li>solidność!</li>
              <li>gwarancja sukcesu!</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
