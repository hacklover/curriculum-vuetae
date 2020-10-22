<template>
  <div class="common-card">
    <CardTitle :title="title" />

    <div class="common-card-content content">
      <div class="columns">

        <div class="column column-info is-one-quarter" v-if="$slots['info']">
          <slot name="info" />
        </div>

        <div class="column column-content">
          <slot name="content" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import CardTitle from "@/components/curriculum/template/CardTitle";
  export default {
    name: "Card",
    components: {CardTitle},
    props: {
      title: String
    }
  }
</script>

<style scoped lang="less">
  .common-card {
    margin-bottom: 40px;
    box-shadow: none;
    font-size: 14px;

    a {
      color: var(--app-link-color);
    }

    .common-card-content {
      @media screen and (max-width: 1020px) {
        .columns {
          .column {
            width: 100%;
          }
        }
      }

      table {
        width: 100%;
        font-size: 15px;
        line-height: 12px;
        border: 15px solid transparent;
        border-radius: 3px;

        tr {
          td {
            padding: 0.5em;
            border: 0;
            line-height: 18px;

            hr {
              height: 1px;
              background: #d0d0d0;
              margin: 15px 5px;
            }
          }
        }
      }

      .column-content {
        color: var(--details-text-color);
        font-size: 15px;

        b {
          color: var(--details-title-color);
        }

        .subtitle {
          color: var(--details-subtitle-color);
          font-size: 15px;
          margin-bottom: 8px;
        }

        ul {
          margin-left: 18px;
          list-style-type: square;
        }

        .tags {
          max-width: 470px;

          @media (max-width: 768px) {
            display: block;
          }
        }
      }
    }
  }
</style>