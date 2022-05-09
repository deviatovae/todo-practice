<template>
  <div class="form-container">
    <input v-model="text" @keyup.enter="onSubmit" type="text" placeholder='Enter Item'
    />
    <div class="btn-container">
      <button @click="onSubmit" type="submit">Submit</button>
    </div>
  </div>
</template>

<script>


export default {
  name: "ToDoSubmit",
  data(){
    return {
      text: ''
    }

  },
  methods: {
    onSubmit() {
      if (this.text.length) {
        this.$emit('onSubmit', this.text)
        this.text = ''
      }
    }
  }

}
</script>

<style scoped>
.form-container {
  display: flex;
}

.btn-container {
  width: 30%;
  text-align: end;
}
</style>