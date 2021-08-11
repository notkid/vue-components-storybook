<template>
  <div class="md-avatar">
    <slot />
  </div>
</template>
<script>
export default {
  name: "MdAvatar",
};
</script>
// <style lang="scss">
// $md-avatar-size: 40px;
// $md-avatar-large-size: 64px;
// $md-avatar-large-icon: 40px;
// $md-avatar-small-size: 24px;
// $md-avatar-small-icon: 16px;
// .md-avatar {
//   width: $md-avatar-size;
//   min-width: $md-avatar-size;
//   height: $md-avatar-size;
//   margin: auto;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   user-select: none;
//   position: relative;
//   border-radius: $md-avatar-size;
//      font-size: 24px;
//     letter-spacing: -.05em;
//     vertical-align: middle;
//     background-color: rgba(0,0,0,.38);
// }
// </style>