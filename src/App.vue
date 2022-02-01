<template>
  <div id="app">
    <h2>Navigatie menu</h2>
    <ul id="navMenu">
      <li>
        <router-link to="HTML">Infopagina HTML</router-link>
      </li>
      <li>
        <router-link to="CSS">Infopagina CSS</router-link>
      </li>
      <li>
        <router-link to="JavaScript">JavaScript HTML</router-link>
      </li>
      <li>
        <router-link to="Laravel">Laravel HTML</router-link>
      </li>
      <li>
        <router-link to="Vue">Vue HTML</router-link>
      </li>
    </ul>
  <router-view></router-view>
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
