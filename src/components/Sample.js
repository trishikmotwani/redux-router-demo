import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addTaskAction} from '../actions/taskAction';
import {LoginContext} from '../App';

export default class Sample extends Component {

    constructor(props) {
        super(props);
        // setting initial state
        this.state = {
            trainBoogies: [1,2,3,4,5,undefined,undefined,undefined].reverse(),
            trainBoogiesStyle: {
                width : '25px',
                height: '25px',
                border: '1px solid black',
            },
            boggiesInContainer: [],
            trainBoogiesHolderStyle: {
                display: 'flex',
                border: '1px solid black',
                width: '125px',
            },
            containerStyle: {
                width: '75px',
                height: '100px',
                border: '1px solid black',
                margin: '10px',
                display: 'flex',
            },
            zipcode: undefined,
            showInfoWindow: false,
            activeMarker: {},
            city: ''
        }
    }

    renderTrainArray = () => {
            
            return (
                <div style={this.state.trainBoogiesHolderStyle}>

                    {this.state.trainBoogies && this.state.trainBoogies.map((item,index) => {
                            return <div style={this.state.trainBoogiesStyle}>
                                    {item}
                                    </div>
                        })
                    }
                    
                </div>
            );
    }

    start = () => {

        
        setInterval(() => {
            const trainBoogiesClone = [...this.state.trainBoogies];
            const removedBoogie = trainBoogiesClone.pop();
            let boggiesInContainerClone = [...this.state.boggiesInContainer];
            boggiesInContainerClone.unshift(removedBoogie);
            if(trainBoogiesClone.length > 0) {
                this.setState({
                    trainBoogies: trainBoogiesClone,
                    boggiesInContainer: boggiesInContainerClone,
                });
            } else {
                this.setState({
                    trainBoogies: boggiesInContainerClone,
                    boggiesInContainer: [],
                });
                boggiesInContainerClone = [];
            }
        }, 1000);
    }
    render() {
        let {taskList,addTask} = this.props;
        
        return (
            <div>
                <div style={{display:"flex"}}>

                    <div style={{margin:"25px"}}> 
                        {this.renderTrainArray()}
                    </div>

                    <div>
                        <div>Boogies</div>
                        <div style={this.state.containerStyle}>
                            <div style={this.state.trainBoogiesStyle}>
                                {this.state.boggiesInContainer && this.state.boggiesInContainer[0]}
                            </div>

                            <div style={this.state.trainBoogiesStyle}>
                                {this.state.boggiesInContainer && this.state.boggiesInContainer[1]}
                            </div>

                            <div style={this.state.trainBoogiesStyle}>
                                {this.state.boggiesInContainer && this.state.boggiesInContainer[2]}
                            </div>

                        </div>
                    </div>
                </div>

                <div style={{margin:"0px 0px 0px 150px",}}> 
                    <button onClick={this.start}>Start</button>
                </div>
            
            </div>
        );  
    }
}