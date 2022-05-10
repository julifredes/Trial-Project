<template>
  <div class="w-screen h-auto flex flex-col justify-center items-center">
    <img
      src="../assets/hero-image.svg"
      alt="heroImage"
      class="hidden lg:inline-block"
    />
    <img
      src="../assets/hero-image-mobile.svg"
      alt="heroImage"
      class="inline-block w-full lg:hidden"
    />
    <div class="w-full lg:w-8/12 px-7 lg:px-0 absolute text-center">
      <h1 class="font-display text-4.5xl lg:text-6xl text-white mb-6 font-bold">
        Lorem Ipsum
      </h1>
      <p class="text-white text-base font-light mb-6 lg:px-44">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula mauris, orci vel faucibus ac tincidunt.
      </p>
      <button
        class="bg-trialGreen hover:bg-hoverGreen w-7/12 lg:w-3/12 h-14 text-white text-base font-medium btn"
      >
        Button Label
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.btn:hover,
.btn {
  transition: all 0.5s;
}
</style>
