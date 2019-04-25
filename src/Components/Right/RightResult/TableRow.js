import React, {Component} from 'react'
import gel from './../../../assets/classes/electric-guitar.svg'
import gac from './../../../assets/classes/guitar.svg'
import org from './../../../assets/classes/organ.svg'
import pia from './../../../assets/classes/piano.svg'
import voi from './../../../assets/classes/voice.svg'

class TableRow extends Component {
    
    source = (src) => {
        if (src === "gac") {
            return gac;
        } else if (src === "gel") {
            return gel;
        } else if (src === "org") {
            return org;
        } else if (src === "pia") {
            return pia;
        } else if (src === "voi") {
            return voi;
        }
    }

    name = (src) => {
        if (src === "gac") {
            return 'Acoustic Guitar';
        } else if (src === "gel") {
            return 'Electric Guitar';
        } else if (src === "org") {
            return "Organ";
        } else if (src === "pia") {
            return "Piano";
        } else if (src === "voi") {
            return "Human Voice";
        }
    }

    render () {
        return (
            <tr>
                <td className="tableData"><h3 className="instruName">{this.name(this.props.src)}</h3></td>
                <td className="tableData"><img src={this.source(this.props.src)} className="instrument" alt={this.name(this.props.src)}/></td>
                <td className="tableData"><h3 className="instruName">{this.props.prob}</h3></td>
            </tr>
        )
        }
}

export default TableRow;