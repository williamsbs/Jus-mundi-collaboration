<template>
  <section role="region" aria-label="Partnership benefits">
    <div class="section-container partnership-section__container">
      <!-- Section Header -->
      <header class="partnership-header">
        <DecorativeLine class="partnership-header__decorative-line--left" />
        <h2 class="title-large partnership-header__title">
          Why this partnership?
        </h2>
        <DecorativeLine class="partnership-header__decorative-line--right" />
      </header>

      <!-- Description Content -->
      <div class="partnership-content">
        <p class="text-description partnership-content__description">
          Throughout its 100-year history, ICC has brought global business
          together to support an international rules-based order, including the
          promotion of global trade and commerce through the work of the ICC
          International Court of Arbitration.
        </p>

        <p class="text-description partnership-content__description">
          ICC has partnered with Jus Mundi to provide full public access to all
          publishable ICC International Court of Arbitration awards and related
          documents made as of 1 January 2019
        </p>
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        <FeatureCard
          icon-src="/images/morecontent_icon.svg"
          title="More key arbitration content"
          description="This unique partnership means you will have access to more key arbitration content to level up your arbitration research."
        />

        <FeatureCard
          icon-src="/images/transparency_icon.svg"
          title="More transparency"
          description="You will appreciate the increase in transparency in arbitration!"
        />

        <FeatureCard
          icon-src="/images/efficency_icon.svg"
          title="More efficiency"
          description="Jus Mundi's AI-powered technology efficiently delivers thorough legal research and due diligence with full confidence."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DecorativeLine from "../ui/decorative-line.vue";
import FeatureCard from "../ui/feature-card.vue";
</script>

<style scoped>
.partnership-section__container {
  width: 100%;
}

.partnership-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.partnership-header__title {
  text-align: center;
  white-space: nowrap;
}

.partnership-content {
  text-align: center;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.features-grid {
  margin-top: 8rem;
}

@media (max-width: 1024px) {
  .partnership-header__title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .partnership-section {
    padding: 4rem 1.5rem;
  }

  .partnership-section__container {
    gap: 2.5rem;
  }

  .partnership-header {
    flex-direction: column;
    gap: 1rem;
  }

  .partnership-header__title {
    font-size: 2rem;
    white-space: normal;
  }

  .partnership-header__decorative-line--left,
  .partnership-header__decorative-line--right {
    display: none;
  }

  .features-grid {
    margin-top: 1rem;
  }

  .partnership-content__description {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .partnership-section {
    padding: 3rem 1rem;
  }

  .partnership-header__title {
    font-size: 1.8rem;
  }

  .partnership-content {
    gap: 1rem;
  }

  .partnership-content__description {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}
</style>
