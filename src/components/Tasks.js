import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addTaskAction} from '../actions/taskAction';

class Tasks extends Component {

    
    render() {
        let {taskList,addTask} = this.props;
        return (
            <div>
                <form onSubmit={(e) => {e.preventDefault(); addTask(this.refs.task.value)}}>
                    <label for="newTask">Add Task</label>
                    <input id="newTask" ref="task" />
                    <input type="submit" />
                </form>
                <ul>
                    {
                        taskList.map((task,i) => 
                        <li key={i} >
                            <span>{task}</span>
                            <button>X</button>
                        </li>)
                    }
                </ul>
            </div>
        );  
    }
}

// React redux integrate
const mapStateToProps = (state) => {
    return {
        taskList:state.tr.taskList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (newTask) => dispatch(addTaskAction(newTask))
    }
}

const MyTasks = connect(mapStateToProps, mapDispatchToProps)(Tasks);
export default MyTasks;