<template>
  <div class="shu">
    <div class="flex-container">
      <router-link to="/catergory">
        <img src="@/assets/graphics/navicon.svg" class="fixMe" >
      </router-link>

      <router-link to="/myCart">
        <img src="@/assets/graphics/bag.svg" class="rightMe" >
      </router-link>
    </div>
    <div class="">
      <img
        src="@/assets/graphics/graphics-header.svg"
        alt="header"
        class="hi"
      />

      <h1>Meny</h1>
                          <h1>{{number}} </h1>

      <div class="menu-container">
        <article v-for="(product,i) in menu" :key="i">

          <div class="add" @click="myMethod(product)">
            <img src="@/assets/graphics/add.svg" class="add" />
          </div>
          <div class="coffe-info">
            <div class="title-and-price">
              <h1>{{ product.title }}</h1>
              <h1>{{ product.price }} :-</h1>
            </div>
            <p>{{ product.desc }}</p>
          </div>

        </article>
      </div>
    </div>
  </div>
</template>


<script>
export default {
      data(){
      return{
        cart:[],
        number:"0"
      }
    },
  
  computed: {
    menu() {
      return this.$root.menu
    }
  },
  methods:{
    myMethod: function(a){
    console.log(a)
    return this.cart +=[a],
    this.number++

}
    
  }
};
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .hi {
    width: 100%;
  }
}

.fixMe {
  padding: 12px;
  width: 30px;
  margin: 12px;
  margin-right: 800px;
  background-color: #fff;
  border-radius: 30%;
}

.fixMe:hover {
  cursor: pointer;
}

.mr {
  color: #000;
  background: #000;
}

.flex-container {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
}

.rightMe {
  padding: 16px;
  width: 10px;
  margin: 20px;
  margin-left: -120px;
  background: #000;
  border-radius: 45%;
}
.rightMe:hover {
  cursor: pointer;
}

.shu {
  background: rgb(241, 228, 231);
}

.addbtn {
  width: 10px;
  background: #000;
  margin: 12px;
  padding: 12px;
  border-radius: 40%;
  margin-left: -80%;
  list-style: none;
}

li {
  list-style: none;
}

.coffe-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
  width: 100%;
}
.title-and-price {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

article {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
}

.add {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.2rem;
  min-width: 2.2rem;
  background: black;
  border-radius: 50%;
}

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.add:hover{
  cursor: pointer;

}
</style>