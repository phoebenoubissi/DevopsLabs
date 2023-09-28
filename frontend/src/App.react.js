import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { Route } from 'react-router-dom';


//import { Route } from '@elastic/apm-rum-react'
//import { init as initApm } from "@elastic/apm-rum";

import HomePage from "./HomePage.react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from './EmployeeList';
import AttendanceForm from "./AttendanceForm";
import ListAttendance from './AttendanceList';
import ListSalary from './ListSalary';

//import "tabler-react/dist/Tabler.css";

type Props = {||};

//initApm({
//  serverUrl: "http://apm-server:8200",
//  serviceName: "frontend",
//  instrument: "false"
//});

function App(props: Props): React.Node {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/employee-add" component={EmployeeForm} />
          <Route exact path="/employee-list" component={EmployeeList} />
          <Route exact path="/attendance-add" component={AttendanceForm} />
          <Route exact path="/attendance-list" component={ListAttendance} />
          <Route exact path="/salary-list" component={ListSalary} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

