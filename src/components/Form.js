import React from 'react';
import axios from 'axios';
import { If, Then } from 'react-if';

import '../style/form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: "",
            method: "GET",
            body: ""
        }
    }

    handleInputChange = (e) => {
        this.setState({ ...this.state, url: e.target.value });
    }

    handleTextareaChange = (e) => {
        this.setState({ body: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.resetState();
        const url = this.state.url;
        const method = this.state.method;
        if (!url) {
            this.props.handleError('A valid URL is required!')
        } else {
            this.props.toggleLoading();
            axios({
                method: this.state.method,
                url,
                data: this.state.method === "POST" || this.state.method === "PUT" ? this.state.body : ""
            }).then(response => {
                this.props.handleApiCall(response.data.count, response.data, response.headers)
                this.props.toggleLoading();
                this.state.method === "POST" || this.state.method === "PUT" ? this.props.getHistory(url, method, this.state.body) : this.props.getHistory(url, method);

            }).catch(e => {
                this.props.handleError(e)
                this.props.toggleLoading();
            })

        }

    }

    handleButtonClick = (e) => {
        e.preventDefault();
        this.setState({ method: e.target.innerHTML })
    }

    render() {

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

                    <If condition={this.state.method === "POST" || this.state.method === "PUT"}>

                        <Then>
                            <div className="textarea">
                                <textarea rows="5" cols="50" placeholder="Enter JSON body" onChange={this.handleTextareaChange} value={this.state.body} />
                            </div>
                        </Then>
                    </If>

                </form>
            </div>
        )
    }
}

export default Form;