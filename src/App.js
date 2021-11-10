import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addproduct">
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
