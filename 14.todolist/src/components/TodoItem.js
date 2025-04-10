
/*
const TodoItem = (props) => {
    return (
        <div className='Todoitem'>
            <input type='checkbox' />
            <span>{props.todo.content}</span>
            <span>{new Date(props.todo.date).toLocaleDateString}</span>
            <button>삭제</button>
        </div>
    )
}
*/

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    return (
        <div className='Todoitem'>
            <input type='checkbox' checked={isDone} onChange={() => {onUpdate(id)}}/>
            <span>{content}</span>
            <span>{new Date(date).toLocaleDateString}</span>
            <button onClick={() => {onDelete(id)}}>DEL</button>
        </div>
    )
}

export default TodoItem;