import React from "react";
import { AuthContext } from "./_app";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <div id="index">
      <AuthContext.Consumer>
        {(context) => <Dashboard {...context} />}
      </AuthContext.Consumer>
    </div>
  );
}
