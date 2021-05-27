import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Results from './Results';
import History from './History';
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


  render() {
    return (
      <div>
        <Header />
        <Form handleApiCall={this.handleApiCall} toggleLoading={this.toggleLoading} handleError={this.handleError} getHistory={this.getHistory} resetState={this.resetState} />
        <div className="results">
          <History history={this.state.history} toggleLoading={this.toggleLoading} handleApiCall={this.handleApiCall} />
          <Results results={this.state.results} count={this.state.count} headers={this.state.headers} loading={this.state.loading} error={this.state.error} resetState={this.resetState} />
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
