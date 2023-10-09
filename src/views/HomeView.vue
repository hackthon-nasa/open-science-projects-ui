<template>
  <Header></Header>
  <hr />
  <div className="flex flex-row justify-normal w-full p-5 justify-center">
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
import TagService from "@/services/tag";

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
