import React from 'react';
import Form from './Form';
import Results from './Results';
import History from './History';

const Home = (props) => {

    return (
        <div>
            <Form handleApiCall={props.handleApiCall} toggleLoading={props.toggleLoading} handleError={props.handleError} getHistory={props.getHistory} resetState={props.resetState} />
            <div className="results">
                <History history={props.history} toggleLoading={props.toggleLoading} handleApiCall={props.handleApiCall} />
                <Results results={props.results} count={props.count} headers={props.headers} loading={props.loading} error={props.error} resetState={props.resetState} />
            </div>
        </div>
    )
}

export default Home;