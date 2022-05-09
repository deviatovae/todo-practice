
<template>
  <div class="todoList">
    <div class="title">
      <h2>You have {{todos.length}} Todos</h2>
    </div>
      <TodoList
      v-bind:todos="todos"
      @remove="RmItem"
      />
      <ToDoSubmit @onSubmit="AddNewTodo"/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList"
import ToDoSubmit from "@/components/ToDoSubmit";


export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'do housework', completed: false},
        {id: 2, title: 'buy groceries', completed: false},
        {id: 3, title: 'cook dinner', completed: false}

      ]
    }

  },
  components: {
    ToDoSubmit,
    TodoList,
  },
  methods: {
    AddNewTodo(text) {
      this.todos.push({id: this.todos.length + 1, title: text, completed: false})
    },

    RmItem(id) {
      this.todos = this.todos.filter(todo => id !== todo.id)
      console.log (id)
    }
  }

}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
}
.todoList {
  width: 30%;
  min-height: 100px;
  min-width: 300px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  margin-bottom: 20px;
  border: 1px solid gray;
  -webkit-box-shadow: 0 0 14px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 0 14px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0 0 14px 2px rgba(34, 60, 80, 0.2);
  background-color: slateblue;
  color: darksalmon;
}

input {
  width:70%;
  padding: 8px;
  margin: 0;

}
ul {
  margin: 5px 0 5px 0;
  padding: 0;
  list-style: none;
  justify-content: left;
}

li {
  margin: 0;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cfcfcf;
}

button {
  padding: 8px;
  background-color: darksalmon;
  color: slateblue;
  width: 97%
}

button:hover {
  cursor: pointer;
}
input:hover {
  cursor: pointer;
}
</style>
