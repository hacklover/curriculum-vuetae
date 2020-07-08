<template>
  <Card
    class="card-curriculum-details-professional-skills"
    :title="$t('details.professionalSkills.title')"
  >
    <template v-slot:description>

      <template v-for="(item, i) of content">
        <p v-text="item" :key="i" />
      </template>

    </template>
  </Card>
</template>

<script>
  import Card from "../template/Card";

  export default {
    name: "CurriculumDetailsProfessionalSkills",
    components: {Card},
    computed: {
      content() {
        return this.$t('details.professionalSkills.content')
      }
    }
  }
</script>