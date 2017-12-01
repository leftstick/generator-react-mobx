import { observable, computed, action } from 'mobx'
import { id } from '../helper/string'

class TodoStore {
  @observable todoList = []
  @observable filter = 'all'
  @observable editTodo = null

  @computed
  get remainingCount() {
    return this.todoList.filter(todo => !todo.completed).length
  }

  @computed
  get isAllCompleted() {
    return this.todoList.every(todo => todo.completed)
  }

  @action
  reset() {
    const stored = JSON.parse(localStorage.getItem('todo_list') || '[]')
    if (stored.length) {
      this.todoList = stored
    } else {
      this.todoList = [
        { id: id(), text: 'Learn Javascript', completed: true },
        { id: id(), text: 'Learn React', completed: false }
      ]
    }
    this.filter = 'all'
    this.editTodo = null
  }

  @action
  addTodo(todo) {
    this.todoList.unshift(todo)
  }

  @action
  deleteTodo(todo) {
    this.todoList = this.todoList.filter(t => t.id !== todo.id)
  }

  @action
  updateTodo(todo) {
    this.todoList = this.todoList.map(t => {
      if (t.id === todo.id) {
        return todo
      }
      return t
    })
  }

  @action
  saveTodoList(todo) {
    localStorage.setItem('todo_list', JSON.stringify(this.todoList))
  }

  @action
  toggleAll(state) {
    this.todoList = this.todoList.map(t => {
      t.completed = state
      return t
    })
  }

  @action
  setEditTodo(todo) {
    this.editTodo = todo
  }

  @action
  cleanCompleteTodos() {
    this.todoList = this.todoList.filter(t => !t.completed)
  }

  @action
  updateFilter(filter) {
    this.filter = filter
  }
}

export default new TodoStore()
