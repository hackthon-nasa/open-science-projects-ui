<template>
  <div
    class="max-w-sm w-full lg:max-w-full hover:cursor-pointer"
    v-on:click="viewProject()"
  >
    <div
      class="hover:border-cyan-400 border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">Members only</p>
        <div class="text-gray-900 font-bold text-xl mb-2">
          {{ name }}
        </div>
        <p class="text-gray-700 text-base">
          {{ description }}
        </p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">Organization</p>
          <p class="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Int16Array,
    name: String,
    description: String,
  },
  methods: {
    viewProject() {
      this.$router.push("/project/" + this.id);
    },
  },
};
</script>
