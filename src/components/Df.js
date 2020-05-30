import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data'

function DataFetching() {
	const [posts, setPosts] = useState([])
	const [id, setId] = useState('')
	const [idFromButtonClick, setIdFromButtonClick] = useState('')

	const [confirmed, setConfirmed] = useState('');
	const [active, setActive] = useState('')
	const [deaths, setDeath] = useState('')
	const [recovered, setRecovered] = useState('')

	const stateCode = ['', 'IN-AN', 'IN-AP', 'IN-AR', 'IN-AS', 'IN-BR', 'IN-CH', 'IN-CT', 'IN-DN', 'IN-DD', 'IN-DL', 'IN-GA', 'IN-GJ',
		'IN-HR', 'IN-HP', 'IN-JK', 'IN-JH', 'IN-KA', 'IN-KL', 'IN-LA', 'IN-LD', 'IN-MP',
		'IN-MH', 'IN-MN', 'IN-ML', 'IN-MZ', 'IN-NL', 'IN-OR', 'IN-PY',
		'IN-PB', 'IN-RJ', 'IN-SK', 'IN-TN', 'IN-TG', 'IN-TR', 'IN-UP', 'IN-UT', 'IN-WB'];

	const state = ['Select State', 'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat',
		'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka	', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh',
		'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry',
		'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];

	useEffect(() => {
		axios({
			"method": "GET",
			"url": 'https://api.covidindiatracker.com/total.json',
		})
			.then((res) => {
				setConfirmed(res.data.confirmed);
				setActive(res.data.active);
				setRecovered(res.data.recovered);
				setDeath(res.data.deaths);

			})
			.catch((error) => {
				console.log(error)
			})
	}, [])
	useEffect(() => {
		axios({
			"method": "GET",
			"url": 'https://api.covidindiatracker.com/state_data.json',
		})
			.then((res) => {
				setPosts(res.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [idFromButtonClick])

	const handleClick = () => {
		setIdFromButtonClick(id);

		posts.forEach(element => {
			if (element.id === id) {
				setConfirmed(element.confirmed);
				setActive(element.active);
				setRecovered(element.recovered);
				setDeath(element.deaths);
			}
		});
	}
	return (
		<div>
			<div className="row">
				<div className="col">
					<select className="select" onChange={e => setId(e.target.value)}>
						{
							stateCode.map((x, index) =>
								<option key={x} value={x}>{state[index]}</option>)
						}
					</select>
				</div>

				<div className="col">
					<button type="button" className="btn btn-primary" onClick={handleClick}>Result</button>
				</div>
			</div>
			<br />
			<Data confirmed={confirmed} active={active} recovered={recovered} deaths={deaths} />
		</div>
	)
}

export default DataFetching