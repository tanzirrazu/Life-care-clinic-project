import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Pages/Footer/Footer';
import NotFound from './Components/Pages/NotFound/NotFound';
import ServiceDetails from './Components/Pages/Services/ServiceDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
          <Switch>
              <Route path="/home">
                  <Home/>
              </Route>
              <Route path="/serviceDetails/:servicedetailsid">
                  <ServiceDetails/>
              </Route>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route  path="*">
                  <NotFound/>
              </Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
