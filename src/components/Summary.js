import React from "react";

const Summary = () => {
  return (
    <>
      <div className="row mt-2 mt-md-2 p-2 px-md-5">
        <div className="col-md-12">
          <h4>فعالیت این هفته نسبت به هفته گذشته</h4>
        </div>
      </div>

      <div className="row mt-2 mt-md-2 p-2 px-md-5 min-h-80">
        <div className="col-md-1 border-left-dot bg-dark text-white d-flex align-items-center justify-content-center ">
          <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
          <span className="mr-2">435</span>
        </div>

        <div className="col-md-2 border-left-dot bg-dark text-white d-flex align-items-center justify-content-between">
          <div>
            <p>
              مکالمات
              <i className="fa fa-question mr-2" aria-hidden="true"></i>
            </p>
            <p>
              <small> 345 مکالمه در هفته گذشته </small>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
            <div className="align-items-center justify-content-center mr-2">
              <p>43 </p>
              <p>
                <small> دقیقه </small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-2  bg-dark text-white d-flex align-items-center justify-content-right">
          <div className="align-items-center justify-content-center">
            <p>زمان پاسخگویی</p>
            <p>
              <small> 50 دقیقه در هفته گذشته </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
