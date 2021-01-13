<template>
  <div class="bg">
    <div class="">
      <router-link to="/">
        <img src="@/assets/graphics/close.svg" alt="close" class="exitMe" />
      </router-link>
    </div>

    <router-link to="/meny">
      <h1>meny</h1>
      <hr />
    </router-link>
    <router-link to="/about">
      <h1>vårt kaffe</h1>
      <hr />
    </router-link>
    <router-link to="/profile">
      <h1>Min profil</h1>
      <hr />
    </router-link>
    <router-link to="/Orderstatus">
      <h1>Orderstatus</h1>
    </router-link>

  </div>
</template>


<style scoped>
.bg {
  background-color: black;
  height: 400px;
}
a {
  text-decoration: none;
  color: white;
  height: 100%;
}
hr {
  width: 45px;
  color: #6f7871;
}

.exitMe {
  padding: 8px;
  width: 20px;
  margin: 20px;
  margin-right: 800px;
  background-color: #fff;
  border-radius: 50%;
}

.exitMe:hover {
  cursor: pointer;
}
</style>

<script>
export default {
}
</script>