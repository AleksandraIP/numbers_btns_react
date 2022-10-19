import React from "react";

class Number extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            number: 0
        }
    }
    render() {
        const clickPlusTen =()=>{
            this.setState({number: this.state.number+10})
        }
        const clickMinusHundred =()=>{
            this.setState({number: this.state.number-100})
        }
        const clickMulTF =()=>{
            this.setState({number: this.state.number*25})
        }
        return(
            <div>
                <button  onClick={clickPlusTen}>+10</button>
                <button  onClick={clickMinusHundred}>-100</button>
                <button  onClick={clickMulTF}>*25</button>
                <h3>{this.state.number}</h3>
            </div>
        )
    }
}
export default Number;