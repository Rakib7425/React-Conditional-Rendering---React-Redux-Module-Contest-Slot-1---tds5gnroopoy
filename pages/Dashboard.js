import { useContext } from "react";
import { AuthContext } from "./_app";

function Dashboard() {
  const { btn1State, setBtn1State, btn2State, setBtn2State } = useContext(AuthContext);

  const handleBtn1Click = () => {
    setBtn1State(!btn1State);
  };

  const handleBtn2Click = () => {
    setBtn2State(!btn2State);
  };

  return (
    <div id="dashboardPage">
      <button id="btn1" onClick={handleBtn1Click}>
        Button 1
      </button>
      <button id="btn2" onClick={handleBtn2Click}>
        Button 2
      </button>
      {btn1State && btn2State && <div className="msg">Both are true</div>}
      {(btn1State && !btn2State) || (!btn1State && btn2State) ? (
        <div className="msg">One of them is false</div>
      ) : null}
      {!btn1State && !btn2State && <div className="msg">Both are false</div>}
    </div>
  );
}

export default Dashboard;
