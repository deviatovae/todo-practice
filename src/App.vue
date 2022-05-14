
<template>
  <div class="todoList">
    <div class="title">
      <h2>{{ todoTitle }}</h2>
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
  },
  computed: {
    todoTitle() {
      if (this.todos.length > 0) {
        return `You have ${this.todos.length} Todos`
      }

      return 'No todos!'
    }
  }

}
</script>

<style>
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative;
}
body:before {
  content: "";
  background-image: url("https://images.pexels.com/photos/6690924/pexels-photo-6690924.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
  background-size: cover;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;


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
  background-color: #86abbd;
  color: #d3cac0;
  font-family: "Lucida Handwriting", serif;
}


</style>
