import React, { Component } from 'react';
import Axios from 'axios';

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  fetchData = () => {
    
    let url = 'https://randomuser.me/api/?page=1&results=10&seed=abc&nat=fr';
      
      Axios.get(url)
      .then(response => this.setState({data: response.data}))
      .catch(error => console.log(error));
      
  }

  componentDidMount = () => {
    this.fetchData();
  }

  render = () => {
    const { data } = this.state;

    if (!data) {
      return <div>Loading ...........</div>;
    }
    console.log(data);
    
    return (
      <div>
        {data.results.map((item) =>
        <ul>
          <li> {item.gender} </li>
        </ul>
        )}
      </div>
      )   
  }

}
