import React from 'react';
import '../style/results.scss';


function Results(props) {

    return (
        <div className="output">
            <pre id="header" >Headers: {JSON.stringify(props.headers, null, 2)}</pre>
            <p id="count">Count: {props.count}</p>
            {/* <pre>{JSON.stringify(props.count, null, 2)}</pre> */}
            <pre id="results">Data: {JSON.stringify(props.results, null, 2)}</pre>
        </div>
    )
}

export default Results;