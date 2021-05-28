import React from 'react';
import '../style/history.scss';
import axios from 'axios';

const History = (props) => {

    const historyCall = async (e) => {
        let call = JSON.parse(localStorage.getItem(e.target.innerHTML));
        props.toggleLoading();
        axios({
            method: call.method,
            url: call.url,
            data: call.data
        }).then(response => {
            props.handleApiCall(response.data.count, response.data, response.headers)
            props.toggleLoading();
        })
    }

    return (
        <div className="history">
            <h3>History</h3>
            <ul>
                {props.history?.map((item, idx) => <li key={idx} onClick={historyCall}>{item.method} - {item.url}</li>)}
            </ul>
        </div>
    )
}

export default History;