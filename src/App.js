import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './configureStore';
import MyCounter from './components/Counter';
import MyTasks from './components/Tasks';
import Sample from './components/Sample';
import {HOCDemoApp} from './components/higherordercomponents/HOCDemoApp';
import {HooksDemo} from './components/hookscomponents/HooksDemo';

const users = {
    user1: {
      username:"trishik",
      password:"trishik"
    },
    admin: {
      username:"admin",
      password:"adminpass"
    }
}

export const LoginContext = React.createContext(users.user1);
function App() {
  return (
    // BELOW is Redux demo
    // <Provider store={store}>
    //   <MyCounter/>
    //   <MyTasks/> 
    //  
    // </Provider>

    // BELOW is HOC demo
    // <HOCDemoApp todos={[{id:1,name:"Todo1"},
    //                     {id:2,name:"Todo2"}]}
    // />

    // BELOW is useContext HooksDemo 
    <LoginContext.Provider value={users.admin}>
        <HooksDemo />
         {/* <Sample /> */}
    </LoginContext.Provider>

  );
}

export default App;
