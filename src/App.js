import logo from './logo.svg';
import './App.css';
import Parent from './components/Parents'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={<Parent />}
          >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
