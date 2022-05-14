<template>
  <div>
    <ul>
      <ToDoItem
      v-for="(todo, index) of todos"
      v-bind:todo="todo"
      :key="index"
      @remove="RmItem"
      />
    </ul>
  </div>
</template>

<script>

import ToDoItem from "@/components/ToDoItem"


export default {
  props: ['todos'],
  components: {
    ToDoItem,
  },

  methods: {
    RmItem(id) {
      this.$emit('remove', id)
    }
  }
}

</script>

<style scoped>
ul {
  margin: 5px 0 10px 0;
  padding: 0;
  list-style: none;
  justify-content: left;
}
</style>