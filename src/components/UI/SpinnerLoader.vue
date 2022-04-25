<template lang="pug">
include /_mixins
.loader
</template>
<script>
export default {
  name: "spinner-loader",
};
</script>
<style lang="scss" scoped>
.loader {
  position: absolute;
  top: calc(50% - rem(100));
  left: calc(50% - rem(90));
  width: rem(100);
  height: rem(100);
  border-radius: 50%;
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    border: rem(4) solid var(--color-yellow);
    border-radius: 50%;
  }
  &::before {
    border-left-color: transparent;
    border-bottom: 0;
    width: 100%;
    height: 100%;
    animation: loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
  }
  &::after {
    top: calc(50% - rem(30));
    left: calc(50% - rem(30));
    width: rem(60);
    height: rem(60);
    border-right: 0;
    border-top-color: transparent;
    animation: loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
  }
}
@keyframes loader-outter {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
