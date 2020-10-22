<template>
  <div>

    <template v-if="$te('details.information')">
      <CurriculumDetailsBase />
    </template>

    <template v-if="$te('details.about')">
      <CurriculumDetailsAbout />
    </template>

    <template v-if="$te('details.education')">
      <CurriculumDetailsEducation />
    </template>

    <template v-if="$te('details.languageSkills')">
      <CurriculumDetailsLanguageSkills />
    </template>

    <template v-if="$te('details.yearsOfExperience')">
      <CurriculumDetailsYearsOfExperience />
    </template>

    <template v-if="$te('details.professionalSkills')">
      <CurriculumDetailsProfessionalSkills />
    </template>

  </div>
</template>

<script>
  import CurriculumDetailsBase from "./details/CurriculumDetailsBase";
  import CurriculumDetailsEducation from "./details/CurriculumDetailsEducation";
  import CurriculumDetailsLanguageSkills from "./details/CurriculumDetailsLanguageSkills";
  import CurriculumDetailsYearsOfExperience from "./details/CurriculumDetailsYearsOfExperience";
  import CurriculumDetailsProfessionalSkills from "./details/CurriculumDetailsProfessionalSkills";
  import CurriculumDetailsAbout from "@/components/curriculum/details/CurriculumDetailsAbout";

  export default {
    name: "CurriculumDetails",
    components: {
      CurriculumDetailsBase,
      CurriculumDetailsAbout,
      CurriculumDetailsEducation,
      CurriculumDetailsLanguageSkills,
      CurriculumDetailsYearsOfExperience,
      CurriculumDetailsProfessionalSkills
    }
  }
</script>