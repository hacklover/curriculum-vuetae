<template>
  <h4 class="common-card-title title is-5 is-bold" v-text="title" />
</template>

<script>
export default {
  name: "CardTitle",
  props: {
    title: String
  }
}
</script>

<style scoped lang="less">
.common-card-title {
  color: var(--app-heading-color);
  margin-bottom: 15px;
  padding-bottom: 13px;
  border-bottom: 1px solid var(--app-separator-color);
  user-select: none;
}
</style>