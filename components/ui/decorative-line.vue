<template>
  <div
    class="decorative-line"
    :style="{
      width: width + 'px',
      height: height + 'px',
      background: color,
      transform: rotation !== '0deg' ? `rotate(${rotation})` : undefined,
    }"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
interface Props {
  /** Width of the decorative line in pixels */
  width?: number;
  /** Height of the decorative line in pixels */
  height?: number;
  /** Background color of the line (CSS color value or CSS variable) */
  color?: string;
  /** Rotation angle for the line (e.g., "45deg", "90deg") */
  rotation?: string;
}

withDefaults(defineProps<Props>(), {
  width: 25,
  height: 2,
  color: "var(--color-primary-green)",
  rotation: "0deg",
});
</script>

<style scoped>
.decorative-line {
  transform-origin: center;
  flex-shrink: 0;
}
</style>
