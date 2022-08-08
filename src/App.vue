<template>
  <div id="#app">
    <div id="navbanner">
      <h1 style="padding-bottom: 0px; margin-bottom: 0px">Vue.js SPA</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/books">Books</router-link>
    </div>
    <router-view id="routerview"></router-view>
    <footer>Made by Lukasz Pawlak for the Reedsy Technical Test</footer>
  </div>
</template>

<style>
html,body {
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;

  background-color: beige;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  padding-left: 20px;
  padding-right: 20px;
}

#navbanner, #routerview, footer {
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  margin-top: 10px;
  background-color: white;
}

#routerview {
  background-color: whitesmoke;
}

#navbanner > h1 {
  margin-top: 0px
}

#navbanner > a {
  border: 1px solid black;
  color: black;
  padding: 2px;
  margin-right: 10px;
}

</style>