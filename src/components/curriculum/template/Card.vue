<template>
  <div class="card-common">
    <h4 class="title is-5 is-bold" v-text="title" />

    <div class="content">
      <div class="columns">

        <div class="column column-info is-one-quarter" v-if="$slots['info']">
          <slot name="info" />
        </div>

        <div class="column column-description">
          <slot name="description" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      title: String
    }
  }
</script>

<style scoped lang="less">
  .card-common {
    margin-bottom: 40px;
    box-shadow: none;
    font-size: 14px;

    a {
      color: var(--app-link-color);
    }

    .title {
      color: var(--app-heading-color);
      margin-bottom: 15px;
      padding-bottom: 13px;
      border-bottom: 1px solid var(--app-separator-color);
      user-select: none;
    }

    table {
      width: 100%;
      font-size: 15px;
      line-height: 12px;
      border: 15px solid transparent;
      background: #E1E1E1;
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

    .column-description {
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
</style>