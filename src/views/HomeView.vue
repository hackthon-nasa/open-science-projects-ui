<template>
  <Header></Header>
  <hr />

  <template v-if="id">
    <div class="flex text-center pt-2 text-red-600 justify-center">
      Filtered by profile tags
    </div>
  </template>

  <div className="flex flex-row justify-normal w-full p-5 pt-0 justify-center">
    <!-- <div class="text-start w-full">
      <h1 class="font-bold text-lg text-start">{{ user.name }}</h1>
    </div> -->

    <div class="p-5">
      <FeedComponent :id="id"></FeedComponent>
    </div>

    <div class="p-5">
      <Tag :id="id"></Tag>
    </div>
  </div>
</template>

<script>
import Header from "@/components/shared/Header.vue";
import FeedComponent from "@/components/FeedComponent.vue";
import Tag from "@/components/Tags.vue";

export default {
  components: { Header, FeedComponent, Tag },
  data() {
    return {
      id: null,
    };
  },
  created() {
    this.id = localStorage.getItem("id");
  },
  methods: {},
};
</script>
