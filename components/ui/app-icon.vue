<template>
  <img
    :src="src"
    :alt="alt"
    :aria-hidden="decorative ? 'true' : undefined"
    :class="iconClass"
    class="app-icon"
  />
</template>

<script setup lang="ts">
interface Props {
  /** The source URL for the icon image */
  src: string;
  /** Alt text for the icon. Should be empty for decorative icons */
  alt?: string;
  /** Whether the icon is decorative (hidden from screen readers) */
  decorative?: boolean;
  /** Icon size in pixels (applied to both width and height) */
  size?: string;
  /** Additional CSS classes to apply to the icon */
  iconClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alt: "",
  decorative: false,
  size: "24",
  iconClass: "",
});
</script>

<style scoped>
.app-icon {
  display: block;
  width: v-bind('props.size + "px"');
  height: v-bind('props.size + "px"');
  object-fit: contain;
}
</style>
