<template>
  <section role="complementary" aria-label="ICC commitment statement">
    <div class="section-container quotes-section__container">
      <!-- Quote Content -->
      <blockquote class="quote-block">
        <AppIcon
          src="/images/quote_2.svg"
          decorative
          size="28"
          icon-class="quote-block__quote-start"
        />
        <div class="quote-block__content">
          <p class="quote-block__text">
            Publicising and disseminating information about arbitration has been
            one of ICC's commitments since its creation and an instrumental
            factor in facilitating the development of trade worldwide.
          </p>
        </div>
        <AppIcon
          src="/images/quote_1.svg"
          decorative
          size="28"
          icon-class="quote-block__quote-end"
        />
      </blockquote>

      <!-- Document Information -->
      <div class="document-info">
        <p class="document-info__title">
          Note to the Parties and the Arbitral Tribunals
        </p>
        <p class="document-info__subtitle">
          on the Conduct of Arbitration under the ICC Rules of Arbitration
        </p>
      </div>

      <!-- Call to Action -->
      <div class="quote-cta">
        <a
          href="#"
          class="btn-link quote-cta__link"
          aria-label="Read the complete ICC arbitration document"
        >
          READ THE WHOLE DOCUMENT
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppIcon from "../ui/app-icon.vue";
</script>

<style scoped>
.quotes-section__container {
  max-width: 700px;
}

.quote-block {
  position: relative;
  margin: 0;
  padding: 0 3rem;
}

.quote-block__content {
  position: relative;
}

.quote-block__text {
  font-family: var(--font-primary, Georgia, serif);
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  font-style: italic;
  line-height: 2rem;
  text-align: justify;
  text-align-last: auto;
}

.quote-block__quote-start {
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 20px;
  z-index: 1;
}

.quote-block__quote-end {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 28px;
  height: 20px;
  z-index: 1;
}

.document-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
}

.document-info__title {
  font-family: var(--font-secondary, Arial, sans-serif);
  font-size: 1rem;
  line-height: 1.2;
  margin: 0;
  letter-spacing: 0.02em;
}

.document-info__subtitle {
  font-family: var(--font-secondary, Arial, sans-serif);
  font-size: 1rem;
  margin: 0;
  letter-spacing: 0.02em;
}

.quote-cta {
  margin-top: 1rem;
  text-align: center;
}

.quote-cta__link {
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .quotes-section {
    padding: 3rem 1.5rem;
    min-height: 350px;
  }

  .quotes-section__container {
    max-width: 100%;
    gap: 1.5rem;
  }

  .quote-block {
    padding: 0 2rem;
  }

  .quote-block__text {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .quote-block__quote-start {
    width: 24px;
    height: 17px;
    top: -0.25rem;
    left: -0.5rem;
  }

  .quote-block__quote-end {
    width: 24px;
    height: 17px;
    bottom: -0.75rem;
    right: -0.5rem;
  }

  .document-info__title,
  .document-info__subtitle {
    font-size: 0.9rem;
  }

  .quote-cta__link {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .quotes-section {
    padding: 2rem 1rem;
  }

  .quote-block {
    padding: 0 1.5rem;
  }

  .quote-block__text {
    font-size: 1rem;
  }

  .quote-block__quote-start,
  .quote-block__quote-end {
    width: 20px;
    height: 14px;
  }
}
</style>
