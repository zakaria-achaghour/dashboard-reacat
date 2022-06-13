
import { BrowserRouter,Switch  } from 'react-router-dom';
import './App.css';
import  RouteApp from './BackOffice/App';
import Users from './BackOffice/Features/Users';
import Home from './BackOffice/Home';
import Categories from './BackOffice/Features/Categories';
import Orders from './BackOffice/Features/Orders';
import Sellers from './BackOffice/Features/Sellers';
import Products from './BackOffice/Features/Products';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <RouteApp exact path={'/'} component={Home} />
        <RouteApp path={'/users'} component={Users} />
        <RouteApp path={'/categories'} component={Categories} />
        <RouteApp path={'/orders'} component={Orders} />
        <RouteApp path={'/sellers'} component={Sellers} />
        <RouteApp path={'/products'} component={Products} />
        {/* <RouteApp path={'/transactions'} component={} /> */}


      </Switch>
    </BrowserRouter>
    {/* <BrowserRouter basename="/admin">
      <LayoutAdmin />
    </BrowserRouter> */}
    </div>
  );
}

export default App;
