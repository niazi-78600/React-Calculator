// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import './App.css';
// import Calculator from './components/calculator';
// import Quotes from './components/qoutes.jsx';

// const Home = () => (
//   <div>
//     <h2>Welcome to the Home Page</h2>
//     <p>This is the home page of the multi-page React app.</p>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/calculator">Calculator</Link>
//             </li>
//             <li>
//               <Link to="/quotes">Quotes</Link>
//             </li>
//           </ul>
//         </nav>

//         <hr />

//         <Switch>
//           <Route path="/calculator">
//             <Calculator />
//           </Route>
//           <Route path="/quotes">
//             <Quotes />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator.jsx';
import Quotes from './components/qoutes.jsx';

const Home = () => (
  <div>
    <h2>Welcome to the Home Page</h2>
    <p>This is the home page of the React app.</p>
    <p>Thanks For Visiting!</p>
      </div>
);
function App() {
 
  return (
    <Router>
      <h1 style={{ color: 'green' }}>This is my React App, Ammar Hamza</h1>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>

        <hr />

        {/* Use Routes instead of Route */}
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

