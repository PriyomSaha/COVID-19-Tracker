import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Data(props) {

    var today = new Date();
    var date = today.toDateString();
    return (
        <div>
            <div className="card-deck">
                <div className="card green">
                    <div className="card-body">
                        <h4 className="card-title"><b>Recovered</b></h4>
                        <hr />
                        <p className="card-text"><h1>{props.recovered}</h1></p>
                        <p className="card-text"><small className="text-muted">Updated on {date}</small></p>
                        <p className="card-text">Number of recoveries from COVID-19</p>
                    </div>
                </div>
                <div className="card yellow">
                    <div className="card-body">
                        <h4 className="card-title"><b>Active</b></h4>
                        <hr />
                        <p className="card-text"><h1>{props.active}</h1></p>
                        <p className="card-text"><small className="text-muted">Updated on {date}</small></p>
                        <p className="card-text">Number of active cases of COVID-19.</p>
                    </div>
                </div>
                <div className="card red">
                    <div className="card-body">
                        <h4 className="card-title"><b>Deaths</b></h4>
                        <hr />
                        <p className="card-text"><h1>{props.deaths}</h1></p>
                        <p className="card-text"><small className="text-muted">Updated on {date}</small></p>
                        <p className="card-text">Number of deaths caused by COVID-19.</p>
                    </div>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-header">
                </div>
                <div class="card-body">
                    <h4 className="card-title"><b>Total Affected</b></h4>
                    <hr />
                    <p className="card-text"><h1>{props.confirmed}</h1></p>
                    <p className="card-text"><small className="text-muted">Updated on {date}</small></p>
                </div>
                <div class="card-footer text-muted teal">
                    C O R O N A
                </div>
            </div>
        </div>
    )
}
