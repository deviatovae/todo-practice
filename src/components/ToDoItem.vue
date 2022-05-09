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
  background: lightgrey;
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

</style>