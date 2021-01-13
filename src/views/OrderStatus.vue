  
<template>
  <div class="container">
    <p class="order-number">Ordernummer <strong>#12dv13f</strong></p>

    <img src="@/assets/graphics/drone.svg" />
    <div class="eta">
      <h1>Din beställning är på väg</h1>

      <p><strong>14</strong> minuter</p>
    </div>

    <div class="accept">
      <router-link to="/menu">
        <button class="accept-btn">
          <router-link to="/">Ok, cool!</router-link> 
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.container {
  background-color: #f56f33;
  padding: 100px;
}

p {
  padding: 30px;
}

.accept-btn {
  height: 3.5rem;
  width: 35%;
  outline: none;
  border: none;
  border-radius: 40px;
  background-color: white;
}
</style>