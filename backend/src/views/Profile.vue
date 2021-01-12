<template>
  <div class="profile">
    <section class="content">
      <div class="header">
        <router-link to="/catergory">
          <img src="@/assets/graphics/navicon.svg" class="fixMe" />
        </router-link>

        <img
          src="@/assets/graphics/graphics-header.svg"
          alt="header"
          class="hi"
        >
      </div>
      <section class="main">
           <img src="@/assets/graphics/profile.svg" alt class="profile-img" >
        <section >
          <h2 >Sixten Kaffelöver</h2>
          <p >sixten.kaffelover@zocom.se</p>
        </section>
        <section class="history" >
          <ul class="history-scroll">
              <h1>Orderhistorik</h1>
            <li v-for="(orders, i) in orderStatus" :key="i" class="order">
              <div class="left">
                <h3 class="order-nr">#{{ orders.orderNumber }}</h3>
                <p >Total Ordersumma</p>
              </div>
              <div class="right">
                <p class="date">{{ orders.date }}</p>
                <p >{{ orders.orderTotal }} Kr</p>
              </div>
            </li>
          </ul>
          <span class="divider"></span>
          <div class="order">
            <p >Totalt spenderat</p>
            <p class="ml">1669 kr</p>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    orderStatus() {
      return this.$root.orderStatus;
    },
  },
};
</script>

<style  scoped>

* {
  background: #3d3c39;
  color: #fff;
}


h4{
    color:rgb(214, 214, 214);
    margin:1rem 0 0 0;
}

h1{
    font-size: 2rem;
    margin-right: 70%;
}


h2{
    margin: 1rem 0 0 0;
    color: white;
}
p{
    color: rgba(color: #ffffff, alpha: 0.6);
    font-size: 1rem;
}
ul{
    width: 90%;
    list-style: none;
    padding: 0;
    margin: 0;
}

span{
    color:rgb(168, 168, 168);
}

li{
    list-style: none;
}

.ml{
    margin-right: 10%;
}

.fixMe {
  padding: 12px;
  width: 30px;
  margin: 12px;
  margin-right: 800px;
  background-color: #fff;
  border-radius: 30%;
}


.profile-img {
  width: 120px;
  background-color: #f27446;
  border-radius: 60%;
}

.history{
    display: flex;
    flex-direction: column;
     margin-left: 10%;
    
}

.order{
    display: flex;
    justify-content:space-between;
    border-bottom:1px solid rgb(168, 168, 168);
}

@media screen and (min-width: 600px) {
  .hi {
    width: 100%;
  }
}

</style>