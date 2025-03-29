import { React, Component } from "react";

class ErrorBoundry extends Component{

   ErrorBoundry(props){
      super(props);
      this.state = {
         hasError : false
      }
   }

   componentDidCatch(err, info){
      if(err){
         this.setState({},()=> {hasError : true})
         
      }
   }
   render(){
      return state.hasError ? <p>There is some erroe</p> : this.props.children
   }

}