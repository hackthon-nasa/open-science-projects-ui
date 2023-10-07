<template>
  <div className="flex flex-col w-max">
    <div v-for="project in projects">
      <ProjectCard
        :name="project.name"
        :description="project.description"
      ></ProjectCard>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./shared/ProjectCard.vue";

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          name: "OpenAI Chatbot Framework",
          description:
            "Um framework para desenvolver chatbots avançados usando IA.",
        },
        {
          name: "OpenWeather API Wrapper",
          description:
            "Uma biblioteca JavaScript para acessar os dados da API do OpenWeather.",
        },
        {
          name: "Local Food Finder App",
          description:
            "Um aplicativo móvel que ajuda as pessoas a encontrar alimentos locais e mercados próximos.",
        },
        {
          name: "Machine Learning for Healthcare",
          description:
            "Um projeto de pesquisa que aplica aprendizado de máquina para diagnóstico médico.",
        },
        {
          name: "Educational Game Platform",
          description:
            "Uma plataforma de jogos educacionais para crianças em idade escolar.",
        },
        {
          name: "Community Translation Platform",
          description:
            "Uma plataforma que permite que voluntários traduzam documentos e recursos para idiomas locais.",
        },
        {
          name: "Open Source CMS",
          description:
            "Um sistema de gerenciamento de conteúdo de código aberto para criar sites e blogs.",
        },
        {
          name: "Web Accessibility Checker",
          description:
            "Uma ferramenta online para verificar a acessibilidade de sites de acordo com as diretrizes WCAG.",
        },
        {
          name: "Weather Forecast Visualization",
          description:
            "Uma aplicação de visualização de previsão do tempo com gráficos interativos.",
        },
        {
          name: "Open Source 3D Printing",
          description:
            "Um projeto que cria modelos 3D de código aberto para impressoras 3D.",
        },
      ],
    };
  },
};
</script>
