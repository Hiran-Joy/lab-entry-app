import axios from "axios";
import React, { useState } from "react";

const AddStudent = () => {
  const [input, changeInput] = useState({
    name: "",
    department: "",
    semester: "",
    course: "",
    systemnumber: "",
    logintime: "",
    logouttime: "",
    date: "",
  });

  const [error, setError] = useState("");

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    console.log(input);

    axios
      .post("http://localhost:3000/add_lab", input) // Change API if needed
      .then((response) => {
        console.log(response.data);
        alert("Student record added successfully!");

        changeInput({
          name: "",
          department: "",
          semester: "",
          course: "",
          systemnumber: "",
          logintime: "",
          logouttime: "",
          date: "",
        });

        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to add student record.");
      });
  };

  return (
    <div className="container mt-5">
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="row">
        <div className="col-12">
          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={input.name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                name="department"
                value={input.department}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Semester</label>
              <input
                type="text"
                className="form-control"
                name="semester"
                value={input.semester}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Course</label>
              <input
                type="text"
                className="form-control"
                name="course"
                value={input.course}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">System Number</label>
              <input
                type="text"
                className="form-control"
                name="systemnumber"
                value={input.systemnumber}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Login Time</label>
              <input
                type="time"
                className="form-control"
                name="logintime"
                value={input.logintime}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Logout Time</label>
              <input
                type="time"
                className="form-control"
                name="logouttime"
                value={input.logouttime}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={input.date}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12">
              <button className="btn btn-success" onClick={readValue}>
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;