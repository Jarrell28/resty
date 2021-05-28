import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Help from './Help';
import HistoryPage from './HistoryPage';

import '../style/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      results: [],
      headers: {},
      loading: false,
      error: "",
      history: []
    }
  }

  componentDidMount() {
    let storage = [];

    for (let i = 0; i < localStorage.length; i++) {
      storage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }

    this.setState({ history: storage });
  }

  handleApiCall = (count, results, headers) => {
    this.setState({ count, results, headers });
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleError = (string) => {
    this.setState({ error: string })
  }

  getHistory = (url, method, data = null) => {
    this.setState({ history: [...this.state.history, { url, method }] })
    if (!localStorage.getItem(`${method} - ${url}`)) {
      localStorage.setItem(`${method} - ${url}`, JSON.stringify({ method, url, data }))
    }
  }

  resetState = () => {
    this.setState({ results: [], count: 0, headers: {}, error: "" });
  }

  runRequest = (obj) => {
    this.toggleLoading();
    axios({
      method: obj.method,
      url: obj.url,
      data: JSON.parse(obj.data)
    }).then(response => {
      console.log(response);
      this.handleApiCall(response.data.count, response.data, response.headers)
      this.toggleLoading();
    })
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />

          <Switch>
            <Route path="/history"><HistoryPage historyResults={this.state.history} runRequest={this.runRequest} /></Route>
            <Route path="/help"><Help /></Route>
            <Route path="/"><Home handleApiCall={this.handleApiCall} toggleLoading={this.toggleLoading} handleError={this.handleError} getHistory={this.getHistory} resetState={this.resetState} history={this.state.history} results={this.state.results} loading={this.state.loading} error={this.state.error} headers={this.state.headers} count={this.state.count} /></Route>

          </Switch>


          <Footer />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
