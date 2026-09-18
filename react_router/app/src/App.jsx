// App.jsx
import { Routes, Route } from "react-router-dom";
import About from './Routes/About'
import Home from './Routes/Home'
import Random from './Routes/Random'
import User from './Routes/User'
import Info from './Routes/Info'
import UserInfo from './Routes/UserInfo'

function App() {
  const obj = {
    name : "Ronit Patidar",
    desc : "Working on react_router",
    canCode : "Yes",
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/random" element={<Random/>}>
          <Route path="user" element={<User/>}/>
        </Route>
        <Route path="/user/:info" element={<Info/>}/>
        <Route path="/userInfo" element={<UserInfo data={obj}/>}/>
      </Routes>
    </div>
  )
}

export default App