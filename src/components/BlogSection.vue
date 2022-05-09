<template>
  <div
    class="w-screen h-auto flex flex-col items-center bg-trialbg text-center"
  >
    <h2
      class="text-3xl lg:text-4xl font-medium text-trialblack mb-10 lg:mb-16 font-display tracking-wide"
    >
      Lorem Ipsum Dolor Sit Amet
    </h2>
    <div class="flex flex-col lg:flex-row px-0 lg:px-10 justify-between gap-9">
      <div
        v-for="card in cards"
        :key="card.title"
        class="flex flex-col relative text-left"
      >
        <img
          :src="require(`@/assets/${card.url}.svg`)"
          class="hidden lg:inline-block"
        />
        <img
          :src="require(`@/assets/${card.urlMobile}.svg`)"
          class="inline-block lg:hidden"
        />
        <button
          class="hidden lg:inline-block bg-trialGreen rounded-full w-4/12 h-8 absolute left-3 top-3 text-white text-xs font-display font-bold btn hover:bg-trialBlue"
        >
          {{ card.cta }}
        </button>
        <span
          class="text-xs font-display font-bold py-3 lg:py-4 text-trialblack"
          >{{ card.title }}
          <button
            class="inline-block lg:hidden text-xs font-display font-bold ml-3"
          >
            <div class="inline-block rounded-full h-2 w-2 bg-trialGreen"></div>
            Type
          </button>
        </span>

        <p class="text-sm text-opacity-70 lg:text-opacity-100 text-trialblack">
          {{ card.description }}
        </p>
      </div>
    </div>
    <button
      class="bg-trialGreen hover:bg-hoverGreen w-40 h-16 text-white text-lg btn mt-7 lg:mt-16"
    >
      Our Blog
    </button>
  </div>
</template>

<script>
export default {
  name: "BlogSection",
  data() {
    return {
      cards: [
        {
          title: "Card 1",
          description:
            "This is the title of the journal post lorem ipsum dolor sit ameis is the title of the journal post lorem ipsum.",
          cta: "Type Pill",
          url: "card-1",
          urlMobile: "card-1-mobile",
        },
        {
          title: "Card 2",
          description:
            "This is the title of the journal post lorem ipsum dolor sit ameis is the title of the journal post lorem ipsum.",
          cta: "Type Pill",
          url: "card-2",
          urlMobile: "card-2-mobile",
        },
        {
          title: "Card 3",
          description:
            "This is the title of the journal post lorem ipsum dolor sit ameis is the title of the journal post lorem ipsum.",
          cta: "Type Pill",
          url: "card-3",
          urlMobile: "card-3-mobile",
        },
        {
          title: "Card 4",
          description:
            "This is the title of the journal post lorem ipsum dolor sit ameis is the title of the journal post lorem ipsum.",
          cta: "Type Pill",
          url: "card-4",
          urlMobile: "card-4-mobile",
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn:hover,
.btn {
  transition: all 0.5s;
}
</style>
