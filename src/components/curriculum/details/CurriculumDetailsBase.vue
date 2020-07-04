<template>
  <Card
    class="card-curriculum-details-base"
    :title="$t('details.informations.title')"
  >
    <template v-slot:description>

      <table>
        <tbody>
          <tr v-for="(item, i) of content" :key="i">

            <!-- separator -->
            <template v-if="item && item.separator">
              <td colspan="2" class="td-separator"><hr /></td>
            </template>

            <!-- website -->
            <template v-else-if="item && item.link">
              <td v-text="item.title" />
              <td>
                <a :href="item.link" target="_blank" rel="noopener noreferrer">
                  {{item.value}}
                </a>
              </td>
            </template>

            <!-- e-mail -->
            <template v-else-if="item && item.email">
              <td v-text="item.title" />
              <td>
                <a :href="`mailto:${item.email}`" target="_blank">
                  {{item.email}}
                </a>
              </td>
            </template>

            <!-- text value -->
            <template v-else>
              <td v-text="item.title" />
              <td v-text="item.value" />
            </template>

          </tr>
        </tbody>
      </table>

    </template>
  </Card>
</template>

<script>
  import Card from "../template/Card";

  export default {
    name: "CurriculumDetailsBase",
    components: {Card},
    computed: {
      content() {
        return this.$t('details.informations.content')
      }
    }
  }
</script>

<style scoped lang="less">
  .card-curriculum-details-base {
    table {
      background: var(--app-table-color);
      border-collapse: inherit;

      td.td-separator {
        padding: 0;

        hr {
          background: var(--app-separator-color);
        }
      }
    }
  }
</style>