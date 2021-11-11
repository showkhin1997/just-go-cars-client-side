import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ConfirmOrder from './Pages/ConfirmOrder/ConfirmOrder/ConfirmOrder';
import MoreProducts from './Pages/MoreProducts/MoreProducts/MoreProducts';
import MoreConfirmOrder from './Pages/MoreProducts/MoreConfirmOrder/MoreConfirmOrder';

function App() {
  return (
    <div>
      <AuthProvider>
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
            <Route path="/moreproducts">
              <MoreProducts></MoreProducts>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/confirmorder/:productId">
              <ConfirmOrder></ConfirmOrder>
            </PrivateRoute>
            <PrivateRoute path="/moreconfirmorder/:productId">
              <MoreConfirmOrder></MoreConfirmOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
