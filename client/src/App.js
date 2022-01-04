import { React, Fragment} from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { FinanceContextProvider } from './FinanceContext';
import Landing from "./1-Landing/Landing"
import Header from "./Header&Footer/Header";
import Main from "./2-Main/Main"
import Profile from "./3-Profile/Profile"
import Footer from "./Header&Footer/Footer"

function App() {
  let location = useLocation();

  // useEffect(() => {
  //   fetch("/users")
  //     .then((r) => r.json())
  //     .then((users) => console.log(users))
  // }, [])

  return (
    <Fragment>
      <FinanceContextProvider>
        {(location.pathname === '/') ? null : <Header />}
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route path="/main" element={<Main />} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        {(location.pathname === '/') ? null : <Footer/>}
      </FinanceContextProvider>
    </Fragment>
  )
}

export default App;