import React from "react";

const Chart = () => {
  return (
    <>
      <div className="row mt-2 mt-md-2 p-2 px-md-5">
        <div className="col-md-12">
          <h4>آمار سن کاربران</h4>
        </div>
      </div>

      <div className="row p-2 px-md-5 justify-content-between">
        <div className="col-md-3 d-flex">
          <div className="col-md-6 border-left-dot d-flex align-items-center justify-content-center ">
            <div className="d-flex align-items-center">
              <i
                className="fa fa-square align-self-start"
                aria-hidden="true"
              ></i>
              <div className="align-items-center justify-content-center mr-2">
                <p>100 </p>
                <p>
                  <small> تعداد کاربران </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center ">
            <div className="d-flex align-items-center">
              <i
                className="fa fa-square align-self-start"
                aria-hidden="true"
              ></i>
              <div className="align-items-center justify-content-center mr-2">
                <p>60 </p>
                <p>
                  <small> دسته سنی </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2 ">
          <select className="form-control" aria-label="Default select example">
            <option >Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Chart;
