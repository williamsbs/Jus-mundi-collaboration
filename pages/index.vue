<template>
  <div class="main-page">
    <HeaderSection class="header-section" />
    <QuotesSection class="quotes-section" />
    <PartnershipSection class="partnership-section" />
  </div>
</template>

<script setup lang="ts">
import HeaderSection from "~/components/sections/header-section.vue";
import PartnershipSection from "~/components/sections/partnership-section.vue";
import QuotesSection from "~/components/sections/quotes-section.vue";
</script>

<style scoped>
.main-page {
  min-height: 100vh;
}

.header-section {
  background: linear-gradient(180deg, #ffffff 87.38%, #f6f6f6 99.55%);
  position: relative;
  height: 800px;
  overflow: hidden;
  padding: 3rem 4rem;
}

.quotes-section {
  padding: 8rem 4rem 3rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.partnership-section {
  padding: 1rem 4rem 4rem;
  display: flex;
  justify-content: center;
}
</style>
