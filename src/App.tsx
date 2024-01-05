import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import  Login  from "./components/login/Login";
import { useSelector } from 'react-redux';

function App() {

  // const user = useSelector((state) => state.user.user);
  const user = null;
  return (
    <div className="App">
      {
        user ? (
          <>
            {/* {sidebar} */}
            <Sidebar />
            {/* {chat} */}
            <Chat />
          </>
        ) : (
          <>
            <Login />
          </>
        )
      }
    </div>
  );
}

export default App;
