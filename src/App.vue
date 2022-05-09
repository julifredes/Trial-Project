<template>
  <div class="w-screen">
    <HeaderNav />
    <HeroSection />
    <BlogSection class="px-4 py-16 lg:p-20" />
    <CallToAction class="px-4 py-16 lg:p-20" />
    <ToasterSuccess v-if="toaster.show"></ToasterSuccess>
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
import HeroSection from "./components/HeroSection.vue";
import BlogSection from "./components/BlogSection.vue";
import CallToAction from "./components/CallToAction.vue";
import ToasterSuccess from "./components/ToasterSuccess.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    HeaderNav,
    HeroSection,
    BlogSection,
    CallToAction,
    ToasterSuccess,
  },
  computed: {
    ...mapState(["toaster"]),
  },
};
</script>
