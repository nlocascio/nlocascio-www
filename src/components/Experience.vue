<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div class="w-100">
      <h2 class="mb-5">Experience</h2>

      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" v-for="{ node: { title, company, dates, accomplishments } } in $static.experiences.edges">
        <div class="resume-content">
          <h3 class="mb-0">{{ title }}</h3>
          <div class="subheading mb-3">{{ company }}</div>
          <ul>
            <li v-for="accomplishment in accomplishments" v-html="accomplishment"></li>
          </ul>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary text-uppercase">{{ dates }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  experiences: allExperience(order: ASC) {
    edges {
      node {
        title
        company
        dates
        accomplishments
      }
    }
  }
}
</static-query>