import axios from "axios";
import React, { useEffect, useState } from "react";

// components and assets
import BarChart from "./BarChart";
import Spinner from '../assets/images/spinner.gif'

const Chart = () => {
  const [users, setUsers] = useState([]);

  const url = "https://randomuser.me/api/?results=";

  useEffect(() => {
    const randomCount = Math.ceil(Math.random() * 90) + 10;
    axios.get(url + randomCount).then((response) => {
      //   console.log(response.data);
      //   console.log(randomCount);
      let ageCategories = [];
      let userAges = [];
      let chartLabels = [];
      let chartData = [];
      const users = response.data.results;

      users.forEach((user) => {
        userAges.push(user.dob.age);
      });

      userAges.forEach((user) => {
        ageCategories[user] = ageCategories[user] ? ageCategories[user] + 1 : 1;
      });

      // console.log(userAges);
      //   console.log(ageCategories);

      ageCategories.forEach((value, index) => {
        if (value !== null && value !== undefined) {
          chartLabels.push(index);
          chartData.push(value);
        }
      });

      // console.log(chartLabels);
      //   console.log(chartData)

      setUsers({
        originalUsers: users,
        userAgesCount: userAges.length,
        chartLabels: chartLabels,
        chartData: chartData,
        selectedChartLabels: chartLabels,
        selectedChartData: chartData,

      });
    });
  }, []);

  const ageSelectorChange = (e) => {
    let updatedChartLabels = [];
    let updatedChartData = [];

    const selectedIndex =e.target.value 
    const updatedState = {...users}
    updatedChartLabels.push(users.chartLabels[selectedIndex]);
    updatedChartData.push(users.chartData[selectedIndex]);

    setUsers({
      ...users,
      selectedChartLabels: updatedChartLabels,
      selectedChartData: updatedChartData,

    })

  }

  return (
    <>
    {users.chartLabels ? 
      <>
        <div className="row mt-2 mt-md-2 p-2 px-md-5">
          <div className="col-md-12">
            <h4>آمار سن کاربران</h4>
          </div>
        </div>

        <div className="row p-2 px-md-5 justify-content-between">
          <div className="col-md-3 d-flex">
            <div className="col-md-6 border-left-dot d-flex align-items-center justify-content-center ">
              <div className="d-flex align-items-center text-arghavani">
                <i
                  className="fa fa-square align-self-start"
                  aria-hidden="true"
                ></i>
                <div className="align-items-center justify-content-center mr-2">
                  <p>{users.userAgesCount}</p>
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
                  <p>{users.chartLabels.length}</p>
                  <p>
                    <small> دسته سنی </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 ">
            <span>انتخاب سن</span>
            <select onChange={e => ageSelectorChange(e)} className="form-control" >
              {users.chartLabels.map((value, index) => <option key={value} value={index}>{value}</option>)}   
            </select>
          </div>
        </div>

        <div className="row mt-2 mt-md-2 p-2 px-md-5">
          <div className="col-md-12">
            <BarChart usersData={users} />
          </div>
        </div>
      </>
      :
      <div className="row mt-2 mt-md-2 p-2 px-md-5">
        <div className="col-md-12 text-center">
            <img src={Spinner} alt="spinner" />
        </div>
      </div>
    }
    </>
  );
};

export default Chart;
