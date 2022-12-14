import Todo from '../../models/todo'

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, isDone: !item.isDone } : item
      })
    )
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  return (
    <div className='max-w-6xl container mx-auto flex justify-center'>
      <div
        className={`card w-72 md:w-96 shadow-xl  ${
          todo.isDone
            ? 'bg-secondary text-secondary-content'
            : 'bg-accent text-accent-content'
        }`}
      >
        <div className='card-body'>
          <h2 className='card-title'>Shoes!</h2>
          <div className='card-actions justify-end'>
            <button className='btn btn-xs btn-warning'>Edit</button>
            <button
              className='btn btn-xs btn-error '
              onClick={(e) => handleDelete(todo.id)}
            >
              Delete
            </button>
            <button
              className='btn btn-xs btn-success'
              onClick={(e) => handleDone(todo.id)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
