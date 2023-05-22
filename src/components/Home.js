import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import TopHeader from "./TopHeader";
import CardSection from "./CardSection";
import EarningsOverview from "./EarningsOverview";
import RevenueSources from "./RevenueSources";
import ProjectsProgress from "./ProjectsProgress";
import IllustrationsArea from "./IllustrationsArea";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Home = () => {
  const [toggle, setToggle] = useState(true);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);

      if (windowSize[0] > 767) {
        setToggle(true);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const menuButtonClicked = () => {
    //alert("This is an alert from the Child Component");
    setToggle(!toggle);
  };
  return (
    <>
      <div id="wrapper">
        {toggle ? <Sidebar /> : <></>}

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopHeader menuButtonClicked={menuButtonClicked} />

            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                  Generate Report
                </a>
              </div>

              <CardSection />

              <div className="row">
                <div className="col-xl-8 col-lg-7">
                  <EarningsOverview />
                </div>

                <div className="col-xl-4 col-lg-5">
                  <RevenueSources />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4">
                  <ProjectsProgress />
                </div>

                <div className="col-lg-6 mb-4">
                  <IllustrationsArea />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
