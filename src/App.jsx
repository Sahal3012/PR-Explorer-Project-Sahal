import { useState } from "react";
import Test1 from "./componets/Test1";
import User from "./componets/User";

export default function App() {
  const [count,setcount] = useState(0);

  const additem = () =>{
    setcount (count + 1)
  }

  const removeitem = () =>{
    if (count > 0 )
      setcount (count => count - 1)
  }

  const resetitem = () =>{
    setcount(0)
  }

  return (
    <>



      {/* <User name = "Sahal" age = "21" email = "sahalmeghani@gmail.com " /> */}
      <Test1/>
      
      

      <h2 className="text-center pt-3 text-secondary ">User: {count}</h2>
      <div className="text-center pt-3  ">
      <button className="text-info fw-bold fs-4 bg-dark" onClick={additem}>Add User</button>
      <button className="text-warning fw-bold fs-4 bg-dark"  onClick={resetitem}>Reset User</button>
      <button className="text-danger fw-bold fs-4 bg-dark" onClick={removeitem}>Remove User</button>
      </div>


      <User name = "Sahal" age = "21" email = "sahalmeghani@gmail.com " />

    </>
  )
}
