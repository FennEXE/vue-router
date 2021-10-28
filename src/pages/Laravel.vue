<template>
  <div class="container">
    <p>
      Laravel is a free, open-source PHP web framework, created by Taylor Otwell
      and intended for the development of web applications following the
      model&ndash;view&ndash;controller (MVC) architectural pattern and based on
      Symfony. Some of the features of Laravel are a modular packaging system
      with a dedicated dependency manager, different ways for accessing
      relational databases, utilities that aid in application deployment and
      maintenance, and its orientation toward syntactic sugar.
    </p>

    <p>
      The source code of Laravel is hosted on GitHub and licensed under the
      terms of MIT License.
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
