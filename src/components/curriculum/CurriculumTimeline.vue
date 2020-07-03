<template>
  <div class="timeline">

    <Experience
      v-for="(experience, i) of content"
      :key="i"
      :title="experience.company"
      :url="experience.link"
      :task="experience.task"
    >
      <!-- experience heading -->
      <template v-slot:date v-if="experience.date">
        {{experience.date}}
      </template>

      <template v-slot:teamSize v-if="experience.teamSize">
        <span class="experience-team-size"  v-text="`(${experience.teamSize})`" />
      </template>

      <!-- experience description -->
      <template v-slot:description v-if="experience.description && experience.description.length > 0">
        <div class="experience-description">
          <p
            v-for="(descriptionParagrah, p) of experience.description" :key="p"
            v-text="descriptionParagrah"
          />
        </div>

        <!-- experience projects -->
        <template v-if="experience.projectSections && experience.projectSections.length > 0">
          <div class="experience-project-sections">
            <div v-for="(projectSection, ps) of experience.projectSections" :key="ps">
              <div class="separator" />

              <b v-text="projectSection.title" />

              <template v-if="projectSection.projects && projectSection.projects.length > 0">
                <ul class="links">
                  <li v-for="(project, p) of projectSection.projects" :key="p">

                    <div class="project">

                      <!-- project title -->
                      <div class="link-title">
                        <div v-text="project.date" />
                        <a :href="project.link" target="_blank" v-text="project.title" />
                      </div>

                      <!-- project description -->
                      <template v-if="project.description && project.description.length > 0">
                        <p
                          v-for="(projectDescriptionParagrah, p) of project.description" :key="p"
                          v-text="projectDescriptionParagrah"
                        />
                      </template>

                      <!-- project tags -->
                      <template v-if="project.tags && project.tags.length > 0">
                        <b-taglist>
                          <b-tag
                            v-for="(tag, t) of project.tags" :key="t"
                            type="is-info" v-text="tag"
                          />
                          <span class="tags-secondary">
                            <b-tag
                              v-for="(tag, ts) of project.tagsSecondary" :key="ts"
                              type="tag-secondary" v-text="tag"
                            />
                          </span>
                        </b-taglist>
                      </template>

                    </div>

                  </li>
                </ul>
              </template>
            </div>
          </div>
        </template>
      </template>

      <!-- experience tags -->
      <template v-slot:tags v-if="experience.tags && experience.tags.length > 0">
        <b-taglist>
          <b-tag
            v-for="(tag, t) of experience.tags" :key="t"
            type="is-info" v-text="tag"
          />
          <span class="tags-secondary">
            <b-tag
              v-for="(tag, ts) of experience.tagsSecondary" :key="ts"
              type="tag-secondary" v-text="tag"
            />
          </span>
        </b-taglist>
      </template>
    </Experience>

  </div>
</template>

<script>
  import Experience from './template/Experience.vue'

  export default {
    name: "CurriculumTimeline",
    components: {
      Experience
    },
    computed: {
      content() {
        return this.$t('timeline')
      }
    }
  }
</script>

<style lang="less">
  #app {
    .timeline {
      .timeline-header {
        .tag {
          background: #555;
        }
      }

      .timeline-item {
        padding-bottom: 1.2em;

        .timeline-marker {
          top: 1.78rem !important;
        }

        .timeline-content {
          padding: 1.69em 0 0 2em !important;
        }
      }
    }

    .timeline.is-centered .timeline-item:nth-of-type(2n) .timeline-content {
      padding: 1.69em 2em 0 0 !important;
    }
  }
</style>