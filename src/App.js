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

function App() {
  return (

     <div>
     <About></About>
     </div>
  );
}

export default App;
