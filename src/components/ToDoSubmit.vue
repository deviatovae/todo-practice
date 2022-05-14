<template>
  <div class="form-container">
    <input v-model="text" @keyup.enter="onSubmit" type="text" placeholder='Enter Item'
    />
    <div class="btn-container">
      <button @click="onSubmit" type="submit">Add</button>
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

input {
  width:70%;
  padding: 8px;
  margin: 0;
  background-color: #d8d5d2;
  border: solid #86abbd;
  font-family: "Lucida Handwriting", serif;
}


button {
  padding: 8px;
  background-color: #86abbd;
  color: #d3cac0;
  width: 97%;
  font-size: large;
  font-family: "Lucida Handwriting", serif;
  border: solid lightgrey;
}

button:hover {
  cursor: pointer;
}
input:hover {
  cursor: pointer;
}
</style>