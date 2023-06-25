import React from "react";
import donate1 from "../img/donate1.jpg";
import donate2 from "../img/donate2.jpg";
function AssociatesBody() {
  return (
    <section id="features">
      <div className="AssociatesBodyHeader">
        <h1>Get to know our Associates.</h1>
        <hr />
      </div>
      <div className="row  rowassociates">
        <div className=" specs-associates left col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <h3>Nila Charitable Work</h3>
          <img src={donate1} alt=" " className="associateimg"></img>
          </div>
          <div className="Associates col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            donec enim diam vulputate ut pharetra sit amet aliquam. Nullam
            vehicula ipsum a arcu. At risus viverra adipiscing at in tellus
            integer. Aliquet risus feugiat in ante metus. Eu feugiat pretium
            nibh ipsum consequat nisl vel pretium lectus. Mauris in aliquam sem
            fringilla ut morbi tincidunt augue. Ornare suspendisse sed nisi
            lacus sed viverra tellus. Commodo sed egestas egestas fringilla
            phasellus. Nulla porttitor massa id neque aliquam vestibulum morbi
            blandit cursus. Ut morbi tincidunt augue interdum velit euismod.
            Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna id
            volutpat lacus laoreet non curabitur gravida. Sit amet mauris
            commodo quis imperdiet massa.
            <hr />
          </p>
        </div>
        </div>

        {/* 2nd row */}
        <div className="row rowassociates alt">
          <div className="Associates col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            donec enim diam vulputate ut pharetra sit amet aliquam. Nullam
            vehicula ipsum a arcu. At risus viverra adipiscing at in tellus
            integer. Aliquet risus feugiat in ante metus. Eu feugiat pretium
            nibh ipsum consequat nisl vel pretium lectus. Mauris in aliquam sem
            fringilla ut morbi tincidunt augue. Ornare suspendisse sed nisi
            lacus sed viverra tellus. Commodo sed egestas egestas fringilla
            phasellus. Nulla porttitor massa id neque aliquam vestibulum morbi
            blandit cursus. Ut morbi tincidunt augue interdum velit euismod.
            Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna id
            volutpat lacus laoreet non curabitur gravida. Sit amet mauris
            commodo quis imperdiet massa.
            <hr />
          </p>
          
        </div>
        <div className=" specs-associates right col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <h3>NSS MESCE</h3>
          <img src={donate2} alt=" " className="associateimg"></img>
          </div>
        </div>
      <footer className="HungerFooter">©Sadaqa-2023</footer>
    </section>
  );
}

export default AssociatesBody;
