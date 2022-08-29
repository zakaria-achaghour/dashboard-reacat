
import { BrowserRouter,Switch  } from 'react-router-dom';
import './App.css';
import  RouteApp from './BackOffice/App';
import Home from './BackOffice/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      
       {/* <Provider store={store}> */}
     <BrowserRouter>
     <ToastContainer />
      <Switch>
        <RouteApp exact path={'/'} component={Home} />
      </Switch>
    </BrowserRouter>
    {/* </Provider> */}
    </div>
  );
}

export default App;
