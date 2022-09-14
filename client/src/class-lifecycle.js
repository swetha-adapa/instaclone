import React from "react";
class ExampleComponent extends React.Component{
    constructor(){
        console.log("Inside Constructor")
    }
    test="";
    componentDidUpdate(){
        console.log("Inside Component Did update")
    }
    componentWillMount(){
        console.log("Inside Component Will Mount")
    }
    componentDidMount(){
        this.test="10x";
        console.log("Inside Component Did Mount")
    }
    componentWillUnmount(){
        console.log("Inside Component will unmount")
    }
    componentWillUpdate(){
        console.log("Inside Component Will update")
    }
    render(){
        console.log("Inside Render")
        return <>{this.state.test}</>
    }
}
export default ExampleComponent;