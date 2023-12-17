import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";


function Dashboard() {
  const { } = useContext(AuthContext);

  return (
    <div id="dashboardPage">
      <button id="btn1" >Button 1</button>
      <button id="btn2" >Button 2</button>
      <div className="msg">Both are true</div>
      <div className="msg">One on them is false</div>
      <div className="msg">Both are false</div>

    </div>
  );
}
export default Dashboard;
