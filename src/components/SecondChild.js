import { Component } from "react";

class SecondChild extends Component{
    constructor({fruit}){        
       super();
       this.state = {
           fruit: fruit,
           petList:[],
           nameList:[],
           abc:{}
       }
       this.handleFruitChange = this.handleFruitChange.bind(this);
    }

    handleFruitChange(e){
        this.setState({
            ...this.state,
            fruit:e.target.value
        })
    }

    render(){
        return (
            <div>
                <h4>SecondChild Component</h4>
                <input type='text' value={this.state.fruit} onChange={this.handleFruitChange}/>
                The Fruit is: {this.state.fruit}
            </div>
        );
        
    }
}

export default SecondChild;