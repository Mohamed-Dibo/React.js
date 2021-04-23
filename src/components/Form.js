import React,{Component} from 'react';

class Form extends Component{
  render(){
    return (
      <form onSubmit={this.props.getdata} className="Form">
        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="country" placeholder="Egypt..." />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
