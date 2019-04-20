import React from 'react';
import './ModalInfo.css';
import elecguitar from './../../assets/classes/electric-guitar.svg'
import guitar from './../../assets/classes/guitar.svg'
import organ from './../../assets/classes/organ.svg'
import piano from './../../assets/classes/piano.svg'
import voice from './../../assets/classes/voice.svg'


const ModalInfo = (props) => {
        return (
            <div>             
                <p className="modalHead">Supported Instruments</p>
                    <table>
                        <tbody>
                            <tr>
                                <td className="tableData"><h3 className="instruName">Electric Guitar</h3></td>
                                <td className="tableData"><img src={elecguitar} className="instrument" alt="electric guitar"/></td>
                            </tr>
                            <tr>
                                <td className="tableData"><h3 className="instruName">Acoustic Guitar</h3></td>
                                <td className="tableData"><img src={guitar} className="instrument" alt="acoustic guitar"/></td>
                            </tr>
                            <tr>
                                <td className="tableData"><h3 className="instruName">Organ</h3></td>
                                <td className="tableData"><img src={organ} className="instrument" alt="organ"/></td>
                            </tr>
                            <tr>
                                <td className="tableData"><h3 className="instruName">Piano</h3></td>
                                <td className="tableData"><img src={piano} className="instrument" alt="piano"/></td>
                            </tr>
                            <tr>
                                <td className="tableData"><h3 className="instruName">Human Voice</h3></td>
                                <td className="tableData"><img src={voice} className="instrument" alt="voice"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>   
        );
}
    

export default ModalInfo;