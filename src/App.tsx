import React from "react"
import { SendRegitrationForm } from "./Helper/Backend"  /* use this function to simulate the Backend */

/*EXample */
/* SendRegitrationForm({email: "email",firstname:"fname",lastname:"lname"}) */
/* 	.then((res)=>{ */
/* 		console.log(res) */
/* }) */

const App = ():JSX.Element=>{
	return(
		<div className="h-[100vh] w-[100vw] flex justify-center items-center">
			<h1>Hello World</h1>
		</div>
	)
}


export default App
