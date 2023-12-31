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
                  >0</span
                ><span class="text-sm text-blueGray-400">Collaborators</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <h3
            class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
          >
            <a>{{ project.title }}</a>
          </h3>
          <div
            class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
          >
            <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
            LOCAL (A preencher)
          </div>
          <div class="mb-2 text-blueGray-600 mt-10">
            <a
              v-on:click="toOrganization()"
              class="fas fa-briefcase mr-2 text-lg text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
              >{{ organization.name }}</a
            >
          </div>
          <div class="flex flex-row justify-center">
            <span
              v-for="tag in project.tag_ids"
              class="flex flex-wrap pl-4 pr-4 py-2 m-1 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              {{ tag }}
            </span>
          </div>
          <div class="mb-2 text-blueGray-600">
            <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i
            >University of Computer Science
          </div>
          <div class="mb-2 text-blueGray-600">
            <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
            <a
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
              :href="project.link"
              target="_blank"
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
import ProjectService from "@/services/project";
import OrganizationService from "@/services/organization";

export default {
  components: { Header },
  props: { id: String },
  data() {
    return {
      project: {},
      organization: {},
      tags: [],
    };
  },
  methods: {
    toOrganization() {
      this.$router.push("/organization/" + this.project.organization_id);
    },
  },
  created() {
    ProjectService.getById(this.id)
      .then((response) => {
        this.project = response.data;
      })
      .finally((r) => {
        OrganizationService.getById(this.project.organization_id).then(
          (response) => {
            this.organization = response.data;
          }
        );
      });

    ProjectService.getTagsByProjectId(this.id).then((response) => {
      this.tags = response.data;
    });
  },
};
</script>
