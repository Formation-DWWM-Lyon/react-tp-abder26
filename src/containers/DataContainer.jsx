import React, { Component } from 'react';
import Axios from 'axios';

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  fetchData = () => {
    
    let url = 'https://randomuser.me/api/?page=1&results=10&seed=abc&nat=fr';
      console.log(url);
      
      Axios.get(url)
      .then(response => console.log(response))
      .catch(error => console.log(error)); 
  }

  componentDidMount = () => {
    this.fetchData();
  }

  render = () => {
    return (this.fetchData)
       
  }

}
