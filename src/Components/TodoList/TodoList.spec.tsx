import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import TodoList from '.'

describe('TodoList', () => {
  it('should have an empty item list initially', () => {
    const { queryByTestId } = render(<TodoList />)

    const listItem = queryByTestId('list-item')

    expect(listItem).toBeNull()
  })

  it('should add an item to the list when add button is clicked', () => {
    const { getByText, getByTestId, queryByText } = render(<TodoList />)

    const input = getByTestId('input-task')
    const addButton = getByText('Adicionar')

    fireEvent.change(input, { target: { value: 'Novo item' } })
    fireEvent.click(addButton)

    const listItem = queryByText('Novo item')
    expect(listItem).toBeInTheDocument()
  })

  it('should clear the input after adding an item', () => {
    const { getByText, getByTestId } = render(<TodoList />)

    const input = getByTestId('input-task') as HTMLInputElement
    const addButton = getByText('Adicionar')

    fireEvent.change(input, { target: { value: 'Novo item' } })
    fireEvent.click(addButton)

    expect(input.value).toBe('') // Verifica se o input está vazio após adicionar o item
  })

  it('should remove an item from the list when the remove button is clicked', () => {
    const { getByText, queryByText, getByTestId } = render(<TodoList />)

    const input = getByTestId('input-task')
    const addButton = getByText('Adicionar')
     fireEvent.change(input, { target: { value: 'Novo item' } })
     fireEvent.click(addButton)

    const removeButton = getByText('Remover')
    fireEvent.click(removeButton)

    const listItem = queryByText('Novo item')
    expect(listItem).toBeNull()
  })
})
