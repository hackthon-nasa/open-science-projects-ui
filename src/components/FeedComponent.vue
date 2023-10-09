<template>
  <div className="flex flex-col w-max">
    <div v-for="project in projects">
      <ProjectCard
        :id="project.id"
        :name="project.title"
        :description="project.description"
      ></ProjectCard>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./shared/ProjectCard.vue";
import ServiceProject from "@/services/project.js";
import TagService from "@/services/tag";

export default {
  props: { id: String },
  components: { ProjectCard },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    if (this.id != null) {
      TagService.getTagsByUserId(this.id).then((response) => {
        let tagIds = [];
        response.data.tags.forEach((t) => {
          tagIds.push(t.id);
        });
        ServiceProject.getListFiltered(tagIds).then((response) => {
          this.projects = response.data.projects.slice(1, 100);
        });
      });
    } else {
      ServiceProject.getListFiltered([]).then((response) => {
        this.projects = response.data.projects.slice(1, 100);
      });
    }
  },
};
</script>
