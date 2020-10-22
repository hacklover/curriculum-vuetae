<template>
  <Card
    class="card-curriculum-details-education"
    :title="$t('details.education.title')"
  >
    <template v-slot:content>

      <div class="row" v-for="(item, i) of content" :key="i">
        <b v-text="item.name" />
        <p class="subtitle" v-text="item.type" />
        <p v-text="item.description" />
      </div>

    </template>
  </Card>
</template>

<script>
  import Card from "../template/Card";

  export default {
    name: "CurriculumDetailsEducation",
    components: {Card},
    computed: {
      content() {
        return this.$t('details.education.content')
      }
    }
  }
</script>

<style scoped lang="less">
  .card-curriculum-details-education {
    .row:not(:last-child) {
      margin-bottom: 22px;
    }
  }
</style>