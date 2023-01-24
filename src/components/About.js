import { Outlet } from "react-router-dom";
import React from "react";
// We imported from Class based component
import Profile from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent - Constructor");
  }
  componentDidMount() {
    console.log("Parent - componentDidMount");
  }
  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us page</h1>
        <p>This is About us page description.</p>
        <Profile name={"First Child"} />
      </div>
    );
  }
}

export default About;
