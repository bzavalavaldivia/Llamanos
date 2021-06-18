import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Status from './components/Status';
import Home from './pages/Home';
import Pizzas from './pages/Pizzas';
import Desserts from './pages/Dessets';
import Modal from './components/Modal';
import { CustomerContext } from './contexts/CustomerContext';

function App() {
  const { isThereCustomer } = useContext(CustomerContext);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(!isThereCustomer);

  console.log(isThereCustomer)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleShowModal = () => {
    setShow(!show);
  };

  return (
    <Router>
      <GlobalStyle />
      {
        isThereCustomer &&
        <Status />
      }

      <Modal onClose={toggleShowModal} show={show} />

      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Switch>
        <Route path="/pizzas">
          <Pizzas />
        </Route>
        <Route path="/desserts">
          <Desserts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
