import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';


class Plist extends Component{   


render(){   
return(

  <div id={this.props.id} className="Poster" key={this.props.id}>
      
      <div className="posterImage">
              <Link to={this.props.link}>
                <img src={this.props.iurl}  alt={this.props.title}/>
              </Link>
      </div>
      
  </div>

);
}
}

export default Plist;