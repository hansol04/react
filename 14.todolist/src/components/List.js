import TodoItem from "./TodoItem";
import { useState } from "react";
// todos = 배열 4개

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState('');

    const getSearchData = () => {
        if(search == "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        )
    }

    return (
        <div className='List'>
            <h4>Todo List</h4>
            <input type="text" placeholder="PLEASE ENTER YOUR SEARCH TERM.." 
                onChange={(e) => {
                    setSearch(e.target.value);
                }}/>
            <div className='todos_wrapper'>
                {
                    getSearchData().map((todo, i) => 
                           // <TodoItem todo = {todo} />)
                            <TodoItem {...todo}  key={i} onUpdate={onUpdate} onDelete={onDelete}/>
                    )
                }
            </div>
        </div>
    )
}
export default List;