import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      results: [],
      headers: {}
    }
  }

  handleApiCall = (count, results, headers) => {
    this.setState({ count, results, headers });
  }

  render() {
    return (
      <div>
        <Header />
        <Form handleApiCall={this.handleApiCall} />
        <Results results={this.state.results} count={this.state.count} headers={this.state.headers} />
        <Footer />
      </div>
    );
  }
}

export default App;
