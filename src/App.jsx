// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// import {
//   // BrowserRouter,
//   Routes,
//   Route,
//   // useNavigate,
//   Link,
// } from "react-router-dom";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
// import User from "./components/User";

// function App() {
//   // const navigate = useNavigate();

//   return (
//     <>
//       {/* <div>
//         <button onClick={() => {
//           navigate("/")
//         }}>Home</button>
//         <button onClick={() => {
//           navigate("/dashboard")
//         }}>Dashboard</button>
//       </div> */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/:id" element={<User />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";

function App() {
  const [mark, setMark] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [flag, setFlag] = useState(true);
  const [winner, setWinner] = useState("No winner");
  function checkWinner(mark) {
    let winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let res = "draw";
    winner.forEach((w) => {
      if (mark[w[0]] && mark[w[0]] == mark[w[1]] && mark[w[0]] == mark[w[2]]) {
        res = mark[w[0]];
      }
    });
    setWinner(res);
    if(res!=="draw"){
      setMark([null, null, null, null, null, null, null, null, null]);
    }
  }
  function markChnageHandler(idx) {
    // setMark("X");
    if(winner!=="No winner");
    let newMark = [...mark];
    if (mark[idx] == null) {
      newMark[idx] = flag ? "X" : "O";
      setFlag(!flag);
      setMark(newMark);
      checkWinner(newMark);
    }
  }
  return (
    <>
      <h1>Tic-tac-toe</h1>
      <div className="board">
        <div style={{ margin: "5px" }}>
          <button
            onClick={() => markChnageHandler(0)}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid white",
              padding: "5px",
              margin: "5px",
            }}
          >
            {mark[0] ? <div>{mark[0]}</div> : <div></div>}
          </button>
          <button
            onClick={() => markChnageHandler(1)}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid white",
              padding: "5px",
              margin: "5px",
            }}
          >
            {mark[1] ? <div>{mark[1]}</div> : <div></div>}
          </button>
          <button
            onClick={() => markChnageHandler(2)}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid white",
              padding: "5px",
              margin: "5px",
            }}
          >
            {mark[2] ? <div>{mark[2]}</div> : <div></div>}
          </button>
        </div>
        <div>
          <button
            onClick={() => markChnageHandler(3)}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid white",
              padding: "5px",
              margin: "5px",
            }}
          >
            {mark[3] ? <div>{mark[3]}</div> : <div></div>}
          </button>
          <button
            onClick={() => markChnageHandler(4)}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid white",
              padding: "5px",
              margin: "5px",
            }}
          >
            {mark[4] ? <div>{mark[4]}</div> : <div></div>}
          </button>
          <button
            onClick={() => markChnageHandler(5)}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid white",
              padding: "5px",
              margin: "5px",
            }}
          >
            {mark[5] ? <div>{mark[5]}</div> : <div></div>}
          </button>
        </div>
        <div>
          <button
            onClick={() => markChnageHandler(6)}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid white",
              padding: "5px",
              margin: "5px",
            }}
          >
            {mark[6] ? <div>{mark[6]}</div> : <div></div>}
          </button>
          <button
            onClick={() => markChnageHandler(7)}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid white",
              padding: "5px",
              margin: "5px",
            }}
          >
            {mark[7] ? <div>{mark[7]}</div> : <div></div>}
          </button>
          <button
            onClick={() => markChnageHandler(8)}
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid white",
              padding: "5px",
              margin: "5px",
            }}
          >
            {mark[8] ? <div>{mark[8]}</div> : <div></div>}
          </button>
        </div>
        <h1>Winner:{winner}</h1>
      </div>
    </>
  );
}

export default App;