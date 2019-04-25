import React, { Component } from 'react'
import './../Right.css'
import TableRow from "./TableRow"

class RightResult extends Component {

    constructor(props) {
        super(props)
        this.state = {
            res : this.props.result,
            arr : [this.props.result[0].prob, this.props.result[1].prob, this.props.result[2].prob, this.props.result[3].prob, this.props.result[4].prob]
        };
    }

    componentDidMount() {
        this.setState ({
            arr : this.state.arr.sort((a, b) => parseFloat(b) - parseFloat(a))
        }, () => console.log(this.state.arr)
        )
    }

    render () {
        console.log(this.state.arr)
        return (
                <div className="right">
                    <div className="right-wrap">
                        <table className="result-table">
                            <tbody>
                                {this.state.arr.map((d, i) => {
                                    return (
                                        <TableRow src={this.state.res[i].name} prob={d} />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>    
        );
    }
}
    

export default RightResult;