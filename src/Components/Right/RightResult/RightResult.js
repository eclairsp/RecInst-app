import React from 'react';
import './../Right.css'
import elecguitar from './../../../assets/classes/electric-guitar.svg'
import guitar from './../../../assets/classes/guitar.svg'
import organ from './../../../assets/classes/organ.svg'
import piano from './../../../assets/classes/piano.svg'
import voice from './../../../assets/classes/voice.svg'

const RightResult = ({result}) => {
    return (
        <div className="right">
            <div className="right-wrap">
                <table>
                    <tbody>
                        <tr>
                            <td className="tableData"><h3 className="instruName">Electric Guitar</h3></td>
                            <td className="tableData"><img src={elecguitar} className="instrument" alt="electric guitar"/></td>
                            <td className="tableData"><h3 className="instruName">{result.gel}</h3></td>
                        </tr>
                        <tr>
                            <td className="tableData"><h3 className="instruName">Acoustic Guitar</h3></td>
                            <td className="tableData"><img src={guitar} className="instrument" alt="acoustic guitar"/></td>
                            <td className="tableData"><h3 className="instruName">{result.gac}</h3></td>
                        </tr>
                        <tr>
                            <td className="tableData"><h3 className="instruName">Organ</h3></td>
                            <td className="tableData"><img src={organ} className="instrument" alt="organ"/></td>
                            <td className="tableData"><h3 className="instruName">{result.org}</h3></td>
                        </tr>
                        <tr>
                            <td className="tableData"><h3 className="instruName">Piano</h3></td>
                            <td className="tableData"><img src={piano} className="instrument" alt="piano"/></td>
                            <td className="tableData"><h3 className="instruName">{result.pia}</h3></td>
                        </tr>
                        <tr>
                            <td className="tableData"><h3 className="instruName">Human Voice</h3></td>
                            <td className="tableData"><img src={voice} className="instrument" alt="voice"/></td>
                            <td className="tableData"><h3 className="instruName">{result.voi}</h3></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>    
    );
}
    

export default RightResult;