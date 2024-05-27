import { Component } from "react";
import "./DestinationStyle.css";
import Mountain1 from '../Images/1.jpg'
import Mountain2 from '../Images/2.jpg'
import Mountain3 from '../Images/3.jpg'
import Mountain4 from '../Images/4.jpg'

class DestinationData extends Component{
  render(){
    return(
        <div className={this
            .props.className
        }>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>
            {this.props.text}
          </p>
        </div>
        <div className="image">
            <img src={this.props.img1} alt="img" />
            <img src={this.props.img2} alt="img" />
        </div>
      </div>
    )
  }
}
export default DestinationData;