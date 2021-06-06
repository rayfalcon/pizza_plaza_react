import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchOrders from './components/layout/SearchOrders';
import Orders from './components/orders/Orders';
import AddBtn from './components/layout/AddBtn';
import AddOrderModal from './components/orders/AddOrderModal';
import EditOrderModal from './components/orders/EditOrderModal';
import AddDriverModal from './components/drivers/AddDriverModal';
import DriverListModal from './components/drivers/DriverListModal';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
    // Init Materialize JS
  })

  return (
    <>
    <Provider store={store}>
      <SearchOrders />
      <div className="container">
          <AddBtn />
          <Orders />
          <AddOrderModal />
          <EditOrderModal />
          <AddDriverModal />
          <DriverListModal />
      </div>
     </Provider>
    </>
  );
}

export default App;
