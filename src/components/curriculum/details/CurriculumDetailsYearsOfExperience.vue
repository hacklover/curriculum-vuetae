<template>
  <Card
    class="card-curriculum-details-years-of-experience"
    :title="$t('details.yearsOfExperience.title')"
  >
    <template v-slot:description>

      <div class="row" v-for="(item, i) of content" :key="i">
        <b v-text="item.title" />
        <p class="subtitle" v-text="item.years" />
        <div v-text="item.value" style="" />
      </div>

    </template>
  </Card>
</template>

<script>
  import Card from "../template/Card";

  export default {
    name: "CurriculumDetailsYearsOfExperience",
    components: {Card},
    computed: {
      content() {
        return this.$t('details.yearsOfExperience.content')
      }
    }
  }
</script>

<style scoped lang="less">
  .card-curriculum-details-years-of-experience {
    .column-description .row {
      p.subtitle {
        margin: 0;
        font-size: 15px;
      }

      div {
        margin-top: 3px;
        margin-bottom: 15px;
      }
    }
  }
</style>