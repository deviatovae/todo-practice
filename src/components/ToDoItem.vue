<template>
  <li>{{ todo.title }}
    <span class="cross" @click="removeItem">+</span>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  methods: {
   removeItem() {
     this.$emit('remove', this.todo.id)
   }
  }

}
</script>

<style scoped>
.cross {

  display: flex;
  flex-direction: row;
  background: #c17f26;
  opacity: 0.7;
  border-radius: 50%;
  padding: 3px;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: rotate(45deg);
  height: 24px;
  width: 24px;
  user-select: none;
}

.cross:hover {
  cursor: pointer
}

li {
  margin: 5px;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cfcfcf;
  font-family: "Lucida Bright", serif;
  background-color: rgba(216,213,210, 0.7);
  line-height: 24px;
}
</style>