import React from "react";
import { STUDENTS } from "../studentlist";
import { useState } from "react";

import "./Search.css";
// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search(props) {
  const [name, setName] = useState("");
  const [joiningDate, setJoiningDate] = useState();

  const residentAdder = (r) => {
    props.setResidentList((arr) => [...arr, r]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let exist = STUDENTS.find(
      (p, i) => p.name.toLowerCase() === name.toLowerCase()
    );
    if (exist) {
      if (checkValidity(joiningDate, exist.validityDate)) {
        residentAdder({name:exist.name,
		joiningDate:joiningDate
		});
		setName('')
		setJoiningDate('dd/mm/yyyy')
        props.setErrorMessage(null);
      } else {
        props.setErrorMessage(
          `Sorry, ${name} is verified but validity is expired`
        );
      }
    } else {
      props.setErrorMessage(`Sorry, ${name} is not verified student`);
    }
  };
  return (
    <div className="searchForm">
      <form onSubmit={submitHandler}>
        <div className="input">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="input">
          <label>JoiningDate:</label>
          <input
            type="date"
			value={joiningDate}
            onChange={(e) => setJoiningDate(e.target.value)}
          ></input>
        </div>

        <input
          className="button"
          type="submit"
          disabled={!name && joiningDate==='dd/mm/yyyy'}
        />
      </form>
    </div>
  );
}

export default Search;
