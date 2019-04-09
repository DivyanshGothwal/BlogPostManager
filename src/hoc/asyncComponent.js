import React ,{Component } from 'react';




const asyncComponent = (importedComponent) =>{
    return class extends Component{
        state={
            component:null
        }
        componentDidMount(){
            importedComponent().then(e=>{
                this.setState({component:e.default});
            })
        }
        render(){
            const C = this.state.component;
            return(
                C? <C {...this.props}/> :null
            );
        }
    }
}



export default asyncComponent;