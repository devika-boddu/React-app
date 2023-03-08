import React, { Component } from 'react'
import axios from 'axios'
export default class Fetchdata extends Component {
 componentDidMount(){
    axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed`)
    .then(res => console.log(res))
 }
 constructor(props) {
   super(props)
 
   this.state = {
    
   }
 }
 
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
