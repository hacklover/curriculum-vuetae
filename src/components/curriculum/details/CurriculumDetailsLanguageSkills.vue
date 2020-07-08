<template>
  <Card
    class="card-curriculum-details-language-skills"
    :title="$t('details.languageSkills.title')"
  >
    <template v-slot:description>

      <div class="columns columns-flow-root">
        <div class="column is-half" v-for="(item, i) of content" :key="i">
          <b v-text="item.title" />

          <ul>
            <li>
              <span v-text="item.written" />
            </li>
            <li>
              <span v-text="item.oral" />
            </li>
          </ul>
        </div>
      </div>

    </template>
  </Card>
</template>

<script>
  import Card from "../template/Card";

  export default {
    name: "CurriculumDetailsLanguageSkills",
    components: {Card},
    computed: {
      content() {
        return this.$t('details.languageSkills.content')
      }
    }
  }
</script>

<style scoped lang="less">
  .card-curriculum-details-language-skills {
    .columns {
      display: flow-root;

      > .column {
        float: left;
      }
    }
  }
</style>