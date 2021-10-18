import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Pages/Footer/Footer';
import NotFound from './Components/Pages/NotFound/NotFound';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import DoctorDetails from './Components/Pages/OurDoctors/DoctorDetails';
import About from './Components/Pages/About/About';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
      <Header/>
          <Switch>
              <Route path="/home">
                  <Home/>
              </Route>
              <Route path="/about">
                  <About/>
              </Route>
              <Route path="/serviceDetails/:servicedetailsid">
                <ServiceDetails/>
              </Route>
              <Route path="/doctorDetails/:doctorDetailsId">
                <DoctorDetails/>
              </Route>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/signin">
                  <Login/>
              </Route>
              <Route path="/register">
                  <Register/>
              </Route>
              <Route  path="*">
                  <NotFound/>
              </Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
