<template>
  <Header></Header>
  <hr />
  <div className="flex flex-row justify-normal w-full p-5 justify-center">
    <!-- <div class="text-start w-full">
      <h1 class="font-bold text-lg text-start">{{ user.name }}</h1>
    </div> -->

    <div class="p-5">
      <FeedComponent></FeedComponent>
    </div>

    <div class="p-5">
      <Tag></Tag>
    </div>
  </div>
</template>

<script>
import Header from "@/components/shared/Header.vue";
import FeedComponent from "@/components/FeedComponent.vue";
import Tag from "@/components/Tags.Vue";

export default {
  components: { Header, FeedComponent, Tag },
  data() {
    return {
      user: {
        name: "Gustavo Voltoini",
      },
    };
  },
  methods: {
    loginUser() {
      this.loading = true;
      User.login(this.user)
        .then((response) => {
          localStorage.setItem("token", response.data.access_token);
          this.$router.push("/");
        })
        .catch(() => {
          this.generateMessage("Incorrect credentials!", "alert alert-danger");
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
