<template>
  <div
    class="w-screen h-auto flex flex-col items-center bg-trialblack relative text-center"
  >
    <img
      src="../assets/mask-right.svg"
      class="hidden lg:inline-block absolute top-0 right-0 opacity-20 lines"
    />
    <img
      src="../assets/mask-left.svg"
      class="hidden lg:inline-block absolute bottom-0 left-0 opacity-20 lines"
    />
    <h3 class="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
      Join Us
    </h3>
    <p
      class="text-sm lg:text-base text-opacity-70 text-white font-light mb-6 px-6 lg:px-0"
    >
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor.
    </p>
    <div
      class="flex flex-col lg:flex-row lg:flex-wrap justify-center content-center w-full items-center lg:w-3/6 mb-6"
    >
      <input
        v-model="email"
        type="email"
        placeholder="Your Email"
        class="text-trialblack text-base text-opacity-70 p-6 w-full lg:w-3/6 h-14 email order-1"
      />
      <button
        :disabled="isDisable"
        @click="sendEmailContact()"
        class="w-full lg:w-2/6 lg:max-w-xxs h-14 text-white font-medium text-base text-center bg-trialGreen btn order-3 lg:order-2"
        :class="{
          'cursor-not-allowed': isDisable,
          'hover:bg-hoverGreen': !isDisable,
        }"
      >
        Subscribe
      </button>
      <div
        class="flex justify-center items-center w-full lg:w-3/6 order-2 lg:order-3 my-6 lg:my-0 lg:pt-4"
      >
        <input v-model="checked" type="checkbox" />
        <span class="text-white text-xs font-light ml-3 text-opacity-70"
          >I read and accept the Privacy Policy</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CallToAction",
  data() {
    return {
      email: null,
      checked: false,
    };
  },
  computed: {
    isDisable() {
      let re = /\S+@\S+\.\S+/;
      return !this.email || !this.checked || !re.test(this.email);
    },
  },
  methods: {
    ...mapActions(["showToaster"]),
    sendEmailContact() {
      this.showToaster(`Subscription successful.`);
      this.cleanVars();
    },
    cleanVars() {
      this.email = null;
      this.checked = false;
    },
  },
};
</script>

<style scoped>
.btn:hover,
.btn {
  transition: all 0.5s;
}
.lines {
  width: auto;
  height: 100%;
}

.email:focus {
  outline: none;
}
</style>
