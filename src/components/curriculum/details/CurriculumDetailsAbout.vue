<template>
  <Card
    class="card-curriculum-details-about"
    :title="$t('details.about.title')"
  >
    <template v-slot:content>

      <div v-html="content" />

    </template>
  </Card>
</template>

<script>
  import Card from "../template/Card";

  export default {
    name: "CurriculumDetailsAbout",
    components: {Card},
    computed: {
      content() {
        return this.$t('details.about.content')
      }
    }
  }
</script>