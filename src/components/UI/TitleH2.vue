<template lang="pug">
include /_mixins
h2.title-h2
  slot
</template>
<script>
export default {
  name: "title-h2",
};
</script>
<style lang="scss" scoped>
.title-h2 {
  font-weight: 900;
  @include adaptiveValue("font-size", 60, 42);
}
</style>
