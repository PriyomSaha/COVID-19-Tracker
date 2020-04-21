import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data'

function DataFetching() {
	const [posts, setPosts] = useState([])
	const [id, setId] = useState('')
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	const stateCode = ['','AP', 'AS', 'BR', 'CH', 'DL', 'GA', 'GJ',
		'HR', 'HP', 'JK', 'JH', 'KA', 'KL', 'MP',
		'MH', 'MN', 'ML', 'MZ', 'NL', 'OR', 'PY',
		'PB', 'RJ', 'TN', 'TR', 'UP', 'WB'];

	const state = ['Select State','Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
		'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka	', 'Kerala', 'Madhya Pradesh',
		'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry',
		'Punjab', 'Rajasthan', 'Tamil Nadu', 'Tripura', 'Uttar Pradesh', 'West Bengal'];

	useEffect(() => {
		axios({
			"method": "GET",
			"url": `https://covid19india.p.rapidapi.com/getStateData/${id}`,
			"headers": {
				"content-type": "application/octet-stream",
				"x-rapidapi-host": "covid19india.p.rapidapi.com",
				"x-rapidapi-key": "0577cace1cmsh16549506bfab3dep1a7116jsnaf23580d2668"
			}
		})
			.then((res) => {
				console.log(res.data.response);
				setPosts(res.data.response)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [idFromButtonClick])

	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	const confirmed = posts.confirmed;
	const active = posts.active;
	const recovered = posts.recovered;
	const deaths = posts.deaths;
	return (
		<div>
			<div className="row">
				<div className="col-sm-8">
					<select onChange={e => setId(e.target.value)}>
						{
							stateCode.map((x, index) =>
								<option key={x} value={x}>{state[index]}</option>)
						}
					</select>
				</div>
				
				<div className="col-sm-4">
					<button type="button" className="btn btn-primary" onClick={handleClick}>View Data</button>
				</div>
			</div>
			<br/>
			<Data confirmed={confirmed} active={active} recovered={recovered} deaths={deaths} />
		</div>
	)
}

export default DataFetching