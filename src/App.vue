<template>
  <div id="app">
    <h2>Navigatie menu</h2>
    <ul id="navMenu">
      <li>
        <a href="#HTML">Infopagina HTML</a>
      </li>
      <li>
        <a href="#CSS">Infopagina CSS</a>
      </li>
      <li>
        <a href="#JavaScript">JavaScript HTML</a>
      </li>
      <li>
        <a href="#Laravel">Laravel HTML</a>
      </li>
      <li>
        <a href="#Vue">Vue HTML</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#navMenu {
  list-style: none;
}

#navMenu li {
  display: inline-block;
  margin: 10px;
}
</style>
