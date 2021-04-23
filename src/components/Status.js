import React,{Component} from 'react';

class Status extends Component{
  render(){
    return (
      <div className="Status">
      {this.props.name && <p><span>name :</span>{this.props.name } </p>}
      {this.props.temp && <p><span>temp :</span>{this.props.temp } </p>}
      {this.props.humidity && <p><span>humidity :</span>{this.props.humidity } </p>}
      {this.props.pressure && <p><span>pressure :</span>{this.props.pressure } </p>}
      {this.props.description && <p><span>description :</span>{this.props.description } </p>}
      {this.props.error && <p><span>error :</span>{this.props.error } </p>}
      </div>
    );
  }
}

export default Status;
