import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import  Login  from "./components/login/Login";
import { useSelector } from 'react-redux';
import { useAppSelector } from './app/hooks';
import { login,logout } from "./features/userSlice"
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function App() {

  const user = useAppSelector((state) => state.user);
  // const user = null;
  // console.log(user)

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser)
      if(loginUser){
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        )
      } else{
        dispatch(logout());
      }
    });
  }, [dispatch])
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
