import {compose} from 'recompose';
import * as React from 'react';

// below is higher order component of TodoList
const withTodosNull = (Component) => {
    return function(props) {
        return !props.todos ? <div> <p>No Todos are passed In Props </p></div> : <Component {...props} />
    }
};
const withTodosEmpty = (Component) => (props) => {
    return  !props.todos.length 
            ? <div><p>You do not have any To Do's</p></div> 
            : <Component {...props} />
}

const withTodosLoading = (Component) => ({areTodosLoading , ...others}) => {
    return areTodosLoading 
            ? <div><p>To Do's are Loading ...</p></div>
            : <Component {...others} />
}

const TodoListWithNull = withTodosNull(TodoList);
const EmptyTodoList = withTodosEmpty(TodoListWithNull);
const TodoListLoading = withTodosLoading(EmptyTodoList);
// for above wrap of compoennets into each other we can write like below as well
const TodoListWithConditionalRendering1 = withTodosLoading(withTodosNull(withTodosEmpty(TodoList)));
// OR we can also use recompose like below 
const withConditionalRendering =  compose(withTodosNull,withTodosEmpty,withTodosLoading);
const TodoListWithConditionalRendering2 = withConditionalRendering(TodoList);


export const HOCDemoApp = (props) => {

    
    return (
        <div>
            {/* below is normal TodoList component */}
            {/* <TodoList todos={props.todos}/> */}

            {/* below is TodoList with higher Order Component */}
            {/* <TodoListLoading 
                todos={props.todos}
                areTodosLoading={props.areTodosLoading}
            /> */}

            {/* below is TodoList with hOC using compose */}
            <TodoListWithConditionalRendering1 
                todos={props.todos}
                areTodosLoading={props.areTodosLoading}
            />
        </div>
    )
}

function TodoList({todos, areTodosLoading}) {

    // ALL BELOW IF conditions are taken care in Higher Order Components
    // if(areTodosLoading) {
    //     <div><p>To Do's are Loading ...</p></div>
    // }

    // below null check is implemented with higher order component
    // if(!todos) {
    //     return null;
    // }

    // if(!todos.length) {
    //     return <div><p>You do not have any To Do's</p></div>
    // }
    
    return (

        <div>
            {todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />
                })
            }
        </div>
    );
}

export const TodoItem = ({key,todo}) => {

    return (
        <div>
            {key} {todo.name} 

        </div>
    )
} 