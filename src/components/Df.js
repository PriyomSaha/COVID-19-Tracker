import React, { useState, useEffect } from 'react'
import axios from 'axios'
import'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data'

function DataFetching() {
	const [posts, setPosts] = useState([])
	const [id, setId] = useState('')
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

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
			<div className="form-group">
				<input type="text" className="form-control" placeholder="Enter the ISO Code of the state..." value={id} onChange={e => setId(e.target.value)} />
				<br/>
				<button type="button" className="btn btn-primary" onClick={handleClick}>View Data</button>
			</div>
			<Data confirmed={confirmed} active={active} recovered={recovered} deaths={deaths} />
		</div>
	)
}

export default DataFetching