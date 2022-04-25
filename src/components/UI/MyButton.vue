<template lang="pug">
include /_mixins
button.button
  slot
</template>
<script>
export default {
  name: 'my-button'
}
</script>
<style lang="scss">
.button{
  @include adaptiveValue("font-size", 28, 22);
  border: 2px solid var(--color-blackRaisin);
  padding: rem(10) rem(25);
}
</style>