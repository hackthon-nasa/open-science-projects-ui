<template>
  <!-- Começo Projects -->
  <div
    class="card border border-gray-700 bg-gray-700 text-gray-50 transition-shadow shadow-xl hover:shadow-xl"
  >
    <div class="flex items-center p-4">
      <div class="relative flex flex-col items-center">
        <div class="flex flex-col space-y-1 justify-center items-center">
          <span class="text-md whitespace-nowrap text-gray-50 font-semibold">{{
            name
          }}</span>
          <p class="text-sm text-gray-200">
            {{ description_formatted }}
          </p>
          <div class="py-2 flex space-x-2">
            <button
              class="flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg"
            >
              View <span class="ml-2"></span>
            </button>
          </div>
          <div
            class="py-4 flex justify-center items-center divide-x divide-gray-400 divide-solid"
          >
            <span class="text-center px-2"
              ><span class="font-bold text-gray-50"> {{ collaborators }}</span
              ><span class="text-gray-100"> collaborators</span></span
            ><span class="text-center px-2"
              ><span class="font-bold text-gray-50">1</span
              ><span class="text-gray-100"> repos</span></span
            >
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
  <!-- Fim projects -->
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    collaborators: String,
  },
  data() {
    return {
      description_formatted: "",
    };
  },
  created() {
    this.description_formatted = this.description + this.description;
    if (this.description.length > 40) {
      let new_description = this.description.substr(0, 40);
      this.description_formatted = new_description + "...";
    }
  },
};
</script>
