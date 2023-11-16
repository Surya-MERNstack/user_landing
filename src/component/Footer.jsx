import React from "react";

const Footer = () => {
  return (
    <div className="container mt-4 mx-auto">
      <div className="row justify-content-between rounded bg-lightcyan shadow-xl">
        <div
          className="col-md-2 bg-green rounded p-3 mt-5 shadow bg-white"
          style={{ height: "190px" }}
        >
          <ul className="list-unstyled">
            <li>Directory</li>
            <li>Jobs</li>
            <li>Today's Offer</li>
            <li>Buy & sale</li>
            <li>Rent & Lease</li>
          </ul>
        </div>
        <div className="col-md-7  mt-4 mb-4 m-2 p-4">
          <div className="row bg-lightcyan shadow-xl  bg-white p-4">
            <div className="col-md-12 bg-green rounded m-3">
              <div className="d-flex align-items-center">
                <span
                  className="rounded-circle bg-yellow p-2"
                  style={{
                    width: "30px",
                    height: "30px",
                    display: "inline-block",
                    backgroundColor: "yellow",
                  }}
                ></span>
                <h4 className="ml-2">VishRaj</h4>
              </div>
              <p>Real Estate +Follow</p>
              <p>October 11</p>
            </div>
            <div className="col-md-12 text-center m-3">
              <img
                src=""
                alt=""
                className="img-fluid"
                style={{
                  width: "230px",
                  height: "120px",
                  backgroundColor: "blue",
                }}
              />
              <div className="d-flex justify-content-between mt-3">
                <p>Like</p>
                <p>Comment</p>
                <p>Share</p>
              </div>
              <div className="d-flex justify-content-end">
                <p>250k 53k comments 1M views</p>
              </div>
            </div>
            <div className="my-4"></div>
          </div>
          <div className="row shadow mt-5 bg-white p-4">
            <div className="col-md-12 bg-green rounded">
              <div className="d-flex align-items-center">
                <span
                  className="rounded-circle bg-orange p-2"
                  style={{
                    width: "30px",
                    height: "30px",
                    display: "inline-block",
                    backgroundColor: "orange",
                  }}
                ></span>
                <h4 className="ml-2">Rathna Nayak</h4>
              </div>
              <p>Training institute +Follow</p>
              <p>October 10</p>
            </div>
            <div className="col-md-12 text-center m-3">
              <img
                src=""
                alt=""
                className="img-fluid"
                style={{
                  width: "230px",
                  height: "120px",
                  backgroundColor: "blue",
                }}
              />
              <div className="d-flex justify-content-between mt-3">
                <p>Like</p>
                <p>Comment</p>
                <p>Share</p>
              </div>
              <div className="d-flex justify-content-end">
                <p>430k 78k comments 1M views</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-2 bg-red rounded p-3 mt-4 shadow bg-white"
          style={{ height: "250px" }}
        >
          <ul className="list-unstyled">
            <li>Recent</li>
            <li>Smart Saver</li>
            <li>with Earning</li>
            <li>Status</li>
          </ul>
          <ul className="list-unstyled">
            <li>ID 001</li>
            <li>ID 002</li>
            <li>ID 003</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
