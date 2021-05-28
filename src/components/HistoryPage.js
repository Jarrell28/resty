import React from 'react';
import '../style/historypage.scss'

import { withRouter } from 'react-router'

class HistoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: {}
        }
    }

    selectActive = (e) => {
        let key = e.target.innerHTML;
        console.log(e);

        let item = JSON.parse(localStorage.getItem(key));
        this.setState({ activeItem: item });
    }

    runRequest = (e) => {
        let key = e.target.parentElement.previousElementSibling.innerHTML;
        let item = JSON.parse(localStorage.getItem(key));
        this.props.runRequest(item);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="historyPage">
                <div className="historyResults">
                    <h3>History</h3>
                    <ul>
                        {this.props.historyResults?.map((item, idx) => <li key={idx} ><p onClick={this.selectActive}>{item.method} - {item.url}</p> <p><i className="fas fa-redo" onClick={this.runRequest}></i></p></li>)}
                    </ul>
                </div>
                <div className="historyDetails">
                    <h3>History Details</h3>
                    <>
                        {Object.keys(this.state.activeItem).length > 0 ?
                            <>
                                {/* <p>Method: {this.state.activeItem.method}</p>
                                <p>URL: {this.state.activeItem.url}</p>
                                <p>Data: {JSON.parse(this.state.activeItem.data)}</p> */}
                                <pre>{JSON.stringify(this.state.activeItem, null, 2)}</pre>

                            </>
                            :

                            ""
                        }
                    </>
                </div>

            </div>
        )
    }
}

export default withRouter(HistoryPage);