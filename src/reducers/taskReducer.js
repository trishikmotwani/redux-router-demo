const initialState = {
    taskList: []
};

export const taskReducer = (state=initialState,action) => {

    switch (action.type) {
        case "AddTask" :
            return {
                    
                    taskList: [...state.taskList,action.newTask]
                }
            
        default:
            return state;

    }
}