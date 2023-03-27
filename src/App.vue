<template>
  <div id="#app">
    <div id="navbanner">
      <h1 style="padding-bottom: 0px; margin-bottom: 0px">Hello, this is an example of an SPA I have made.</h1>
      <h3 style="margin-top: 0px">This app is made without the major use of 3rd party libraries such as Vuetify</h3>
      <router-link to="/">Home</router-link>
      <router-link to="/books">Books</router-link>
    </div>
    <router-view id="routerview"></router-view>
    <footer>Made by <a href="https://github.com/LTenshi">Lukasz Pawlak</a></footer>
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
  padding-bottom: 10px;
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