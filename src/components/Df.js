import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data'

function DataFetching() {
const [posts, setPosts] = useState([])
const [distData, setDistData] = useState('')
const [states, setStates] = useState('')

const [confirmed, setConfirmed] = useState('----');
const [active, setActive] = useState('----')
const [deaths, setDeath] = useState('----')
const [recovered, setRecovered] = useState('----')

const [dist, setDist] = useState(['Select District'])

const stateCode = ['', 'IN-AN', 'IN-AP', 'IN-AR', 'IN-AS', 'IN-BR', 'IN-CH', 'IN-CT', 'IN-DN', 'IN-DD', 'IN-DL', 'IN-GA', 'IN-GJ',
'IN-HR', 'IN-HP', 'IN-JK', 'IN-JH', 'IN-KA', 'IN-KL', 'IN-LA', 'IN-LD', 'IN-MP',
'IN-MH', 'IN-MN', 'IN-ML', 'IN-MZ', 'IN-NL', 'IN-OR', 'IN-PY',
'IN-PB', 'IN-RJ', 'IN-SK', 'IN-TN', 'IN-TG', 'IN-TR', 'IN-UP', 'IN-UT', 'IN-WB'];

const state = ['Select State', 'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh',
'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat',
'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka	', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh',
'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry',
'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];

useEffect(() => {
axios({
	"method": "GET",
	"url": 'https://api.covid19india.org/state_district_wise.json',
})
	.then((res) => {
		setPosts(res.data)

	})
	.catch((error) => {
		console.log(error)
	})
},[]);

const handleResult = () => {
console.log(posts[states].districtData[distData]);
setConfirmed(posts[states].districtData[distData].confirmed)
setActive(posts[states].districtData[distData].active)
setDeath(posts[states].districtData[distData].deceased)
setRecovered(posts[states].districtData[distData].recovered)
}

const handleStatesChange = (e) =>{
var keys =['Select District']
setStates(e.target.value)
for(var k in posts[e.target.value].districtData) keys.push(k);
setDist(keys)}

return (
<div>
	<div className="row">
		<div className="col">
			<select className="select" onChange={handleStatesChange}>
				{
					state.map((x, index) =>
						<option key={x} value={x}>{state[index]}</option>)
				}
			</select>

			<select className="select state" onChange = {e => (setDistData(e.target.value))}>
				{
					dist.map((value) =>
						<option>{value}</option>)
				}
			</select>
		</div>

		<div className="col-4">
			<button type="button" className="btn btn-primary" onClick={handleResult}>Result</button>
		</div>
	</div>
	<br />
	<Data confirmed={confirmed} active={active} recovered={recovered} deaths={deaths} />
</div>
)
}

export default DataFetching
