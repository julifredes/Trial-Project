<template>
  <div>
    <div>
      <button @click="showMenu()" class="relative z-10 rounded-md">
        <img src="../assets/burger.svg" class="w-10/12" />
      </button>
      <div
        v-if="dropdownOpen"
        class="absolute right-0 pt-9 pb-6 w-screen h-3/12 bg-white rounded-b-lg shadow-xl z-20 text-left"
      >
        <a
          href="#"
          class="block px-6 py-4 text-lg text-trialblack hover:text-trialGreen"
        >
          Store
        </a>
        <a
          href="#"
          class="block px-6 py-4 text-lg text-trialblack hover:text-trialGreen"
        >
          Our Story
        </a>
        <a
          href="#"
          class="block px-6 py-4 text-lg text-trialblack hover:text-trialGreen"
        >
          Journal
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBurguer",
  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    showMenu() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>
