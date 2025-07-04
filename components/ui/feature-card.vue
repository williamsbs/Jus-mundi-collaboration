<template>
  <article class="content-centered feature-card">
    <div class="feature-card__icon">
      <AppIcon :src="iconSrc" decorative size="48" />
    </div>
    <h3 class="title-feature feature-card__title">
      {{ title }}
    </h3>
    <p class="feature-card__description">
      {{ description }}
    </p>
  </article>
</template>

<script setup lang="ts">
import AppIcon from "./app-icon.vue";

interface Props {
  /** Source URL for the feature card icon */
  iconSrc: string;
  /** Title text for the feature card */
  title: string;
  /** Description text explaining the feature */
  description: string;
}

defineProps<Props>();
</script>

<style scoped>
.feature-card {
  gap: 0.5rem;
}

.feature-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-card__description {
  font-family: var(--font-secondary, Arial, sans-serif);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  letter-spacing: 0.01em;
}

@media (max-width: 768px) {
  .feature-card {
    max-width: 400px;
    margin: 0 auto;
  }

  .feature-card__description {
    max-width: 350px;
  }
}

@media (max-width: 480px) {
  .feature-card__title {
    font-size: 1rem;
  }

  .feature-card__description {
    font-size: 0.9rem;
    max-width: 300px;
  }
}
</style>
