<template>
  <div className="flex flex-col w-max">
    <div v-for="project in projects">
      <ProjectCard
        :id="project.id"
        :name="project.name"
        :description="project.description"
      ></ProjectCard>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./shared/ProjectCard.vue";
import project from "@/mock/project.js";

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.projects = project;
    console.log(project);
  },
};
</script>
