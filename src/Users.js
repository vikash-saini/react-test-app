import { render } from "@testing-library/react";
import React from "react";

export default class Users extends React.Component {
    getUserList() {
    return "users list";
  }
  render() {
    return (
      <>
        <h1>This is Users</h1>
      </>
    );
  }
}
