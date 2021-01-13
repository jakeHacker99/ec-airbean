<template>
  <div class="landing">
    <section class="content">
      <router-link to="/catergory">
        <img
          src="../assets/graphics/airbean-landing.svg"
          alt="airBean inc"
          class="img"
      />
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.landing {
  background: #588a62;
  cursor: pointer;
}
.content {
  align-items: center;
  display: flex;
  height: 66.7rem;
  background: url("../assets/graphics/intro-graphic-left.svg") left no-repeat,
    url("../assets/graphics/intro-graphic-right.svg") right no-repeat;
  justify-content: center;
}
</style>
