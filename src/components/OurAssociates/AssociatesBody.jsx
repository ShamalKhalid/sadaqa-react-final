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
        <div className=" specs-associates left col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h3>Nila Charitable Work</h3>
          <img src={donate1} alt=" " className="associateimg"></img>
        </div>
        <div className="Associates col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <p>
            Nila Charitable Work is a compassionate and dedicated organization
            committed to making a positive impact on the lives of vulnerable
            communities. With a relentless focus on humanitarian efforts, Nila
            Charitable Work operates various initiatives aimed at addressing
            critical needs such as healthcare, education, and poverty
            alleviation. Through partnerships with local communities and
            organizations, Nila Charitable Work implements sustainable projects
            that empower individuals and promote long-term socio-economic
            development. Their unwavering dedication to inclusivity, integrity,
            and transparency has earned them widespread recognition and support
            from donors and beneficiaries alike. Nila Charitable Work's tireless
            efforts inspire hope and create a ripple effect of positive change,
            leaving a lasting mark on the lives they touch.
            <hr />
          </p>
        </div>
      </div>

      {/* 2nd row */}
      <div className="row rowassociates alt">
      <div className=" specs-associates left col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <h3>NSS MESCE</h3>
          <img src={donate1} alt=" " className="associateimg"></img>
        </div>
        <div className="Associates col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <hr />
          <p>
            NSS MESCE (National Service Scheme, MES College of Engineering) is a
            vibrant and impactful organization that strives to create positive
            social change and foster a spirit of volunteerism among students.
            Committed to the principles of community service, NSS MESCE actively
            engages students in various outreach programs, social initiatives,
            and environmental campaigns. Through these activities, students gain
            valuable experiences and contribute their time and efforts to
            address the pressing needs of the community. NSS MESCE also plays a
            significant role in organizing awareness drives on critical issues
            like health, education, and environmental conservation. The
            organization's dedication to creating a better society and
            empowering students to become responsible citizens reflects its
            unwavering commitment to social welfare and altruism. NSS MESCE
            serves as a platform for students to make a meaningful impact while
            nurturing a sense of empathy and social responsibility that extends
            beyond the campus boundaries.
            <hr />
          </p>
        </div>
      </div>
      <footer className="HungerFooter">©Sadaqa-2023</footer>
    </section>
  );
}

export default AssociatesBody;
