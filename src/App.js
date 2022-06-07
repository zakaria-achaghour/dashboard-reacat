
import { BrowserRouter,Switch  } from 'react-router-dom';
import './App.css';
import LayoutAdmin from './BackOffice/LayoutAdmin';
import  RouteApp from './BackOffice/App';
import Users from './BackOffice/Users';
import Counter from './BackOffice/Counter';
import Home from './BackOffice/Home';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <RouteApp path={'/users'} component={Users} />
        <RouteApp path={'/counter'} component={Counter} />
        <RouteApp path={'/'} component={Home} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
