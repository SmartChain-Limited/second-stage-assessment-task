import { Navigate, Route, Routes } from "react-router-dom";
import { SendRegitrationForm } from "./Helper/Backend"; /* use this function to simulate the Backend */
import Signup from "./pages/Signup";
import Success from "./pages/Success";

/*EXample */
/* SendRegitrationForm({email: "email",firstname:"fname",lastname:"lname"}) */
/* 	.then((res)=>{ */
/* 		console.log(res) */
/* }) */

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to="/signup" />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/success"} element={<Success />} />
    </Routes>
  );
};

export default App;
