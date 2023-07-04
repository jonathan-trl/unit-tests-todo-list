import { ChangeEvent, useState } from 'react'

interface TodoListProps {
  name: string
}

const TodoList = () => {
  const [items, setItems] = useState<TodoListProps[]>([])
  const [newItem, setNewItem] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewItem(event.target.value)
  }

  const addTodo = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { name: newItem }])
      setNewItem('')
    }
  }

  const handleRemoveItem = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index))
  }

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Adicionar item"
        data-testid="input-task"
      />
      <button onClick={addTodo}>Adicionar</button>
      <ul>
        {items.map((item, index) => (
          <div key={index}>
            <li data-testid="list-item">{item.name}</li>
            <button onClick={() => handleRemoveItem(index)}>Remover</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
