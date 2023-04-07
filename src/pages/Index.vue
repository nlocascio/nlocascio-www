<template>
  <Layout>
    <div class="container-fluid p-0">
      <About />
      <hr class="m-0">
      <Experience />
      <hr class="m-0">
      <Education />
      <hr class="m-0">
      <Skills />
      <hr class="m-0">
      <Interests />
    </div>
  </Layout>
</template>

<script>
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
export default {
  components: {
    About,
    Experience,
    Education,
    Skills,
    Interests
  },
  metaInfo: {
    title: "Nick LoCascio",
    titleTemplate: "Nick LoCascio - Software Engineer & Manager. Vue.js, Node.js, Python, AWS."
  }
};
</script>
