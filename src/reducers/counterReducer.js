const initialState = {count:0};

export const counterReducer = (state=initialState,action) => {

    switch (action.type) {
        case "Increase" :
            return {
                
                    count : state.count + 1
                }
            
        case "Decrease" : 
            return {
               
                    count : state.count - 1
                }
            
        default:
            return initialState;

    }
}