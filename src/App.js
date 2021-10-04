import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './componets/Home/Home';
import Header from './componets/Header/Header';
import About from './componets/About/About';
import Service from './componets/service/Service';
import Services from './componets/Services/Services';
import Title from './componets/Title/Title';
import NotFound from './componets/NotFound/NotFound';
import Footer from './componets/Footer/Footer';
import HomeData from './componets/HomeData/HomeData';

function App() {
  return (

    <div>

    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/service'>
          <Services></Services>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>

    </div>
  );
}

export default App;
