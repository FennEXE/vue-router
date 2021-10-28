<template>
  <div class="container">
    <p>
      Vue.js is an open-source model&ndash;view&ndash;viewmodel front end
      JavaScript framework for building user interfaces and single-page
      applications. It was created by Evan You, and is maintained by him and the
      rest of the active core team members.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
