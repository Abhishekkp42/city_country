import axios from "axios";
import { useState } from "react"

export const Country = () => {

const [country, setCountry] = useState("");

const handleSubmit = () => {
	// axios.get("http://localhost:5000/countries").then((res) => {
		// res.data.map((el) => {
			// if(country!=el)
			// {
				postData(country);
			// }
		// })
	// })
}

const postData = (country) => {
	axios.post("http://localhost:5000/countries",{country:country})
	console.log("Country Added")
}

	return <div>
		<h2>Add Country</h2>
		<input type="text" placeholder="Enter Country" value={country} onChange= {(e) => setCountry(e.target.value) } />
		<button onClick={handleSubmit}>Add</button>
	</div>
}