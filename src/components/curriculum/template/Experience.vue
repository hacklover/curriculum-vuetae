<template>
  <div class="timeline-item">

    <div class="timeline-marker" />

    <div class="timeline-content">

      <!-- date -->
      <div class="experience-heading heading" v-if="$slots['date']">
        <slot name="date" />
        <slot name="teamSize" />
      </div>

      <!-- experience title -->
      <div class="experience-title">
        <a :href="url" target="_blank" rel="noopener noreferrer" v-if="url">
          <strong v-text="title" />
        </a>
        <strong v-text="title" v-else />
      </div>

      <!-- experience task -->
      <div class="experience-task">
        <span v-text="task" />
      </div>

      <!-- experience description -->
      <div class="experience-description">
        <slot name="description" />
        <slot name="tags" />
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "Experience",
    props: {
      title: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      },
      task: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less">
  .timeline {
    .experience-heading {
      margin-right: 5px;
      user-select: none;

      .experience-team-size {
        opacity: 0.6;
        margin-left: 5px;
      }
    }

    .experience-title {
      font-size: 17px;
      user-select: none;

      a strong {
        color: var(--experience-title-color);
      }
    }

    .experience-task {
      color: var(--app-subtitle-color);
      font-size: 15px;
      margin-bottom: 10px;
      user-select: none;
    }

    .experience-description {
      color: var(--experience-text-color);
      max-width: 580px;
      font-size: 15px;

      p:not(:last-child) {
        margin-bottom: 12px;
      }

      .tags {
        display: block;
        margin-top: 15px;

        .tag {
          background: var(--experience-tag-primary-color);

          &.tag-secondary {
            background: var(--experience-tag-secondary-color);
            color: white;
          }
        }
      }
    }

    .experience-project-sections {
      ul {
        li {
          .project {
            .link-title {
              margin-bottom: 8px;

              div {
                position: relative;
                font-size: 13px;
                top: -1px;
              }

              a {
                font-weight: bold;
                margin-right: 5px;
                color: var(--project-title-color);
              }
            }

            .tag {
              background: var(--project-tag-primary-color);

              &.tag-secondary {
                background: var(--project-tag-secondary-color);
                color: white;
              }
            }
          }
        }
      }

      ul {
        margin-top: 12px;
        margin-left: 18px;
        list-style-type: square;
        color: var(--project-text-color);

        li {
          font-size: 15px;

          &:not(:first-child) {
            margin-top: 20px;
          }
        }

        &:not(:last-child) {
          ul {
            margin-bottom: 28px;
          }
        }
      }

      p {
        margin-bottom: 8px;
      }

      .tags {
        display: block;
        margin-top: 12px;
      }

      .separator {
        margin-bottom: 25px;
      }

      > *:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
</style>