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
                        <div className="card-text"><h1>{props.recovered}</h1></div>
                        <div className="card-text"><small className="text-muted">Updated on {date}</small></div>
                        <div className="card-text">Number of recoveries from COVID-19</div>
                    </div>
                </div>
                <div className="card yellow">
                    <div className="card-body">
                        <h4 className="card-title"><b>Active</b></h4>
                        <hr />
                        <div className="card-text"><h1>{props.active}</h1></div>
                        <div className="card-text"><small className="text-muted">Updated on {date}</small></div>
                        <div className="card-text">Number of active cases of COVID-19.</div>
                    </div>
                </div>
                <div className="card red">
                    <div className="card-body">
                        <h4 className="card-title"><b>Deaths</b></h4>
                        <hr />
                        <div className="card-text"><h1>{props.deaths}</h1></div>
                        <div className="card-text"><small className="text-muted">Updated on {date}</small></div>
                        <div className="card-text">Number of deaths caused by COVID-19.</div>
                    </div>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <h4 className="card-title"><b>Total Affected</b></h4>
                    <hr />
                    <div className="card-text"><h1>{props.confirmed}</h1></div>
                    <div className="card-text"><small className="text-muted">Updated on {date}</small></div>
                </div>
                <div className="card-footer text-muted teal">
                    C O R O N A
                </div>
            </div>
        </div>
    )
}
