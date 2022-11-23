
import './App.css';
import {Provider} from 'react-redux';
import {store} from './Store';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (

   
    <div className="App">
      Redux Toolkit
      <Provider store={store}>
    <Profile/>
    <Login/>
 
    </Provider>
    </div>
  );
}

export default App;
