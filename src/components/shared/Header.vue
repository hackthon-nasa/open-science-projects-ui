<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>

      <div class="border rounded-sm p-1">
        <input
          type="text"
          placeholder="Search"
          class="border-current rounded-sm"
        />
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <template v-if="logged">
          <p class="text-sm font-semibold leading-6 text-gray-900">
            Seja bem vindo Gustavo!
          </p>
          <a
            v-on:click="logout()"
            href="/"
            class="ml-3 text-sm font-semibold leading-6 text-red-900"
            >Logout</a
          >
        </template>
        <template v-else>
          <a href="/login" class="text-sm font-semibold leading-6 text-gray-900"
            >Log in <span aria-hidden="true">&rarr;</span></a
          >
        </template>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logged: false,
      name: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
  created() {
    let id = localStorage.getItem("id");
    if (id != null) {
      this.logged = true;
      this.name = localStorage.getItem("name");
    }
  },
};
</script>
