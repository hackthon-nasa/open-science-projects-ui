<template>
  <Header></Header>

  <div class="p-16">
    <a href="/" class="mb-1 font-medium mt-4">&larr; Back</a>
    <div class="p-8 bg-white shadow">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div
          class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"
        >
          <div>
            <p class="font-bold text-gray-700 text-xl">89</p>
            <p class="text-gray-400">Collaborators</p>
          </div>
        </div>
        <div class="relative">
          <div
            class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div
          class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"
        >
          <button
            class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            Oficial Site
          </button>
        </div>
      </div>
      <div class="mt-20 text-center border-b pb-12">
        <h1 class="text-4xl font-medium text-gray-700">
          {{ organization.name }}
          <!-- , <span class="font-light text-gray-500">27</span> -->
        </h1>
        <p class="font-light text-gray-600 m-3">{{ organization.location }}</p>
        <div class="flex flex-row justify-center" v-if="tags">
          <span
            v-for="tag in tags"
            class="flex flex-wrap pl-4 pr-4 py-2 m-1 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          >
            {{ tag.description }}
          </span>
        </div>
      </div>
      <div class="mt-12 flex flex-col justify-center">
        <p class="text-gray-600 text-center font-light lg:px-16">
          {{ organization.description }}
        </p>
        <button class="text-indigo-500 py-2 px-4 font-medium mt-4">
          Show more
        </button>

        <div class="flex" v-for="list_project in projects">
          <ProjectMiniCard
            class="m-2"
            v-for="project in list_project"
            :id="project.id"
            :name="project.title"
            :description="project.description"
            :collaborators="generateRandom()"
          ></ProjectMiniCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/shared/Header.vue";
import ProjectMiniCard from "../components/shared/ProjectMiniCard.vue";
import OrganizationService from "@/services/organization";
import ProjectService from "@/services/project";

export default {
  components: { Header, ProjectMiniCard },
  props: { id: String },
  data() {
    return {
      organization: {
        id: 1,
        name: "",
        email: "",
        phone: "",
        description: "",
        tags: [],
      },
      projects: [],
    };
  },
  methods: {
    generateRandom() {
      return parseInt(Math.random() * 20);
    },
    spliceIntoChunks(arr, chunkSize) {
      return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (v, i) =>
        arr.slice(i * chunkSize, i * chunkSize + chunkSize)
      );
    },
  },
  created() {
    OrganizationService.getById(this.id).then((response) => {
      this.organization = response.data;
    });
    ProjectService.getProjectByOrganizationId(this.id).then((response) => {
      this.projects = this.spliceIntoChunks(response.data, 5);
      console.log(this.projects);
    });
  },
};
</script>
