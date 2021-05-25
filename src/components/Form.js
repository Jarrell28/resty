import React from 'react';
import '../style/form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: "",
            method: "GET",
            requests: []
        }
    }

    handleInputChange = (e) => {
        this.setState({ ...this.state, url: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const url = this.state.url;
        const method = this.state.method;

        this.setState({ ...this.state, requests: [...this.state.requests, { url, method }] })
    }

    handleButtonClick = (e) => {
        e.preventDefault();
        this.setState({ ...this.state, method: e.target.innerHTML })
    }



    render() {
        let listitem = this.state.requests.map(item =>
            <li>{item.method} - {item.url}</li>
        )

        return (
            <div>
                <form>
                    <div className="input">
                        <input type="text" value={this.state.url} onChange={this.handleInputChange} placeholder="Enter URL" />
                        <input type="submit" value="Fetch!" onClick={this.handleSubmit} />
                    </div>

                    <div className="buttons">
                        <button onClick={this.handleButtonClick} class={this.state.method === 'GET' ? 'active' : ''}>GET</button>
                        <button onClick={this.handleButtonClick} class={this.state.method === 'POST' ? 'active' : ''}>POST</button>
                        <button onClick={this.handleButtonClick} class={this.state.method === 'PUT' ? 'active' : ''}>PUT</button>
                        <button onClick={this.handleButtonClick} class={this.state.method === 'DELETE' ? 'active' : ''}>DELETE</button>
                    </div>
                </form>

                {/* output */}
                <div className="output">
                    <ul>
                        {listitem}
                    </ul>
                </div>

            </div>
        )
    }
}

export default Form;