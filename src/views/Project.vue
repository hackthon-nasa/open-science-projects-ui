<template>
  <Header></Header>

  <div class="container mx-auto px-4 mt-8">
    <a href="/" class="mb-1 font-medium">&larr; Back</a>
    <div
      class="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg"
    >
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div
            class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
          >
            <div class="py-6 px-3 mt-32 sm:mt-0">
              <button
                class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Collaborate
              </button>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4 lg:order-1">
            <div class="flex justify-center py-4 lg:pt-4 pt-8">
              <div class="mr-4 p-3 text-center">
                <span
                  class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                  >22</span
                ><span class="text-sm text-blueGray-400">Collaborators</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <h3
            class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
          >
            <a href="organization/{{ project.organization_id }}">{{
              project.name
            }}</a>
          </h3>
          <div
            class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
          >
            <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
            LOCAL (A preencher)
          </div>
          <div class="mb-2 text-blueGray-600 mt-10">
            <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i
            >Solution Manager - Creative Tim Officer
          </div>
          <div class="mb-2 text-blueGray-600">
            <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i
            >University of Computer Science
          </div>
          <div class="mb-2 text-blueGray-600">
            <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
            <a
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              href="{{ project.url }}"
              >Project Link</a
            >
          </div>
        </div>
        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-9/12 px-4">
              <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/shared/Header.vue";
import projects from "../mock/project.js";

export default {
  components: { Header },
  props: { id: Int16Array },
  data() {
    return {
      project: {},
    };
  },
  created() {
    this.project = projects.find((value) => value.id == this.id);
  },
};
</script>
