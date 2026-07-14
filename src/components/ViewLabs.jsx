import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewLabs = () => {
  const [labs, setLabs] = useState([]);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/view")
      .then((response) => {
        setLabs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lab Records</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Course</th>
              <th>System No.</th>
              <th>Login Time</th>
              <th>Logout Time</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {labs.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.department}</td>
                <td>{value.semester}</td>
                <td>{value.course}</td>
                <td>{value.systemnumber}</td>
                <td>{value.logintime}</td>
                <td>{value.logouttime}</td>
                <td>{value.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLabs;