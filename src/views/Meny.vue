<template>
  <div class="shu">
    <div class="flex-container">
      <div class="">
        <router-link to="/catergory">
          <img src="@/assets/graphics/navicon.svg" class="fixMe" />
        </router-link>
      </div>

      <div class="">
        <b-button v-b-modal.my-modal class="fixMee">
          <h4 class="cart-counter">{{ number }}</h4>

          <img src="@/assets/graphics/bag.svg"
        /></b-button>
        <b-modal id="my-modal">
          <h1>Din beställning</h1>

          <div class="">
            <div class="title-and-price">
              <h3>Bryggdkaffe......................</h3>
              <div class="columnMe">
                <img src="@/assets/graphics/arrow-up.svg" class="ok" alt="up" />
                2
                <img src="@/assets/graphics/arrow-down.svg" class="ok" alt="down" />
              </div>
            </div>
            <div class="title-and-price">98kr</div>
            <div class="title-and-price">
              <h3>Caffe Doppio......................</h3>
              <div class="columnMe">
                <img src="@/assets/graphics/arrow-up.svg" class="ok" alt="up" />
                1
                <img src="@/assets/graphics/arrow-down.svg" class="ok" alt="down" />
              </div>
            </div>
            <div class="title-and-price">49kr</div>
            <div class="title-and-price">
              <h3>Cappuccino......................</h3>
              <div class="columnMe">
                <img src="@/assets/graphics/arrow-up.svg" class="ok" alt="up" />
                4
                <img src="@/assets/graphics/arrow-down.svg" class="ok" alt="down" />
              </div>
            </div>
            <div class="title-and-price">196kr</div>
            <div class="title-and-price">
              <h3>Total ...................</h3>
              <p>{{ cart }} :-</p>
            </div>
          </div>
          <b-button class="mybtn">
            <router-link to="/Orderstatus" class="myBtn">
              Take my money!
            </router-link>
          </b-button>
        </b-modal>
      </div>
    </div>
    <div class="">
      <img
        src="@/assets/graphics/graphics-header.svg"
        alt="header"
        class="hi"
      />

      <h1>Meny</h1>

      <div class="menu-container">
        <article v-for="(product, i) in menu" :key="i">
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
  data() {
    return {
      cart: 0,
      number: "0",
    };
  },

  computed: {
    menu() {
      return this.$root.menu;
    },
  },
  methods: {
    myMethod: function (a) {
      return (this.cart += a.price), this.number++;
    },
  },
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

.add:hover {
  cursor: pointer;
}

.fixMee {
  position: absolute;
  margin-left: -100px;
  margin-top: 10px;
  background: #000;
}

h4 {
  border-radius: 40;
}

.moneyBtn {
  margin-left: 300px;
}

.ok:hover{
  cursor: pointer;
}
p:hover {
  cursor: pointer;
}

.columnMe {
  display: flex;
  flex-direction: column;
}

.cart-counter {
  min-width: 28px;
  padding: 0 4px;
  height: 27px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(224, 227, 237);
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  font-size: 14px;
}
</style>