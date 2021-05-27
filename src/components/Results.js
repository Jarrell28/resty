import React from 'react';
import '../style/results.scss';
import 'loaders.css';
import { If, Then, Else } from 'react-if';

let Loader = require('react-loaders').Loader;

function Results(props) {

    return (
        <div className="output">

            <If condition={props.error}>
                <Then>
                    <pre>{JSON.stringify(props.error, null, 2)}</pre>
                </Then>
            </If>
            <If condition={props.loading}>
                <Then>
                    <div className="loader">
                        <Loader type="ball-triangle-path" active />
                    </div>
                </Then>

                <Else>
                    <If condition={Object.keys(props.results).length > 0}>
                        <Then>
                            <pre id="header" >Headers: {JSON.stringify(props.headers, null, 2)}</pre>
                            <p id="count">Count: {props.count}</p>
                            {/* <pre>{JSON.stringify(props.count, null, 2)}</pre> */}
                            <pre id="results">Data: {JSON.stringify(props.results, null, 2)}</pre>
                        </Then>
                    </If>
                </Else>
            </If>

        </div>
    )
}

export default Results;