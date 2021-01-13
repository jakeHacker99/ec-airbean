<template>
  <div id="About">
          <router-link to="/catergory">
    <img src="../assets/graphics/navicon.svg" class="fixMe"  >      
    </router-link>
    <img src="@/assets/graphics/graphics-header.svg" alt="header" class="hi" >

    <section class="content">
      <div class="imgHeader" id="hi"></div>
      <h1>Vårt Kaffe</h1>
      <strong>
        Pumpkin spice mug, barista cup, sit
        <br />macchiato, kopi-luwak, doppio, grounds <br />dripper, crema,
        strong whipped, variety <br />extra iced id lungo half and half
        mazagran. <br />Pumpkin spice.
      </strong>
      <p>
        Que dark fair trade, spoon decaffeinated, barista
        <br />wings whipped, as rich aftertaste, con panna milk <br />black,
        arabica white rich beans single shot extra <br />affogato. So affogato
        macchiato sit extraction <br />instant grinder seasonal organic, turkish
        single shot, <br />single origin, and robusta strong to go so dripper.
        <br />Viennese froth, grounds caramelization skinny <br />aromatic cup
        kopi-luwak, fair trade flavour, <br />frappuccino medium, café au lait
        flavour cultivar ut <br />bar instant kopi-luwak.
      </p>
      <p>
        Roast id macchiato, single shot siphon mazagran
        <br />milk fair trade est aroma a half and half and, so, <br />galão
        iced to go, whipped as cream cup pumpkin <br />spice iced. At extra,
        rich grinder, brewed to go, <br />steamed half and half at, that,
        percolator macchiato <br />trifecta and body as arabica dripper. In
        galão black <br />java milk sit trifecta, robusta, acerbic café au lait
        <br />instant shop latte. Seasonal bar shop filter aroma id,
        <br />crema, affogato viennese cultivar aftertaste, <br />seasonal,
        percolator cream black, galão flavour, milk <br />aromatic turkish
        skinny crema.
      </p>
    </section>
    <footer>
      <h2>Eva Cortado</h2>
      <h4>VD & Grundare</h4>
      <img
        src="../assets/graphics/eva-cortado.jpg"
        alt="authorimage"
        class="author-img"
      />
    </footer>
    <img
      src="@/assets/graphics/graphics-footer.svg"
      alt="footerimg"
      class="hi"
    />
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Serif:400,700|Work+Sans:300,600&display=swap");

#About {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: rgb(241, 228, 231);
  display: flex;
  flex-direction: column;
}

.content {
  margin-right: auto;
  display: flex;
  justify-content: center;
  margin-left: auto;
  flex-direction: column;
  text-align: left;
}

h1 {
  font-family: "PT Serif", serif;
  font-size: 2rem;
}
p {
  line-height: 1.6em;
  font-size: 0.7rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
}

strong {
  font-size: 0.7rem;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  line-height: 1.6em;
}
footer {
  background-color: rgb(241, 228, 231);
  text-align: center;
}

.author-img {
  border-radius: 100%;
}

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
</style>
