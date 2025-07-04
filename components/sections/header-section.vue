<template>
  <header class="main-header">
    <!-- Decorative Lines -->
    <div class="decoration-lines">
      <DecorativeLine class="line-1" />
      <DecorativeLine class="line-2" :width="40" rotation="45deg" />
      <DecorativeLine class="line-3" :width="2" :height="25" />

      <!-- Top Navigation -->
      <nav class="top-nav">
        <a href="#" class="btn-secondary try-jus-mundi-button">
          <AppIcon
            src="/images/ico-arrow_up.svg"
            alt="Arrow"
            size="16"
            icon-class="arrow-icon"
          />
          TRY JUS MUNDI
        </a>
      </nav>

      <!-- Main Content Container -->
      <div class="content-container">
        <!-- Left Content - Logos and Animation -->
        <div class="left-content">
          <!-- ICC Logo Container -->
          <div class="icc-logo-container">
            <div class="circle-background">
              <img src="/images/logo_icc.svg" alt="ICC Logo" class="icc-logo" />
            </div>
          </div>

          <!-- Background GIF and JM Logo Overlay -->
          <div class="relative-position">
            <div class="background-gif-container">
              <img src="/images/case_bg.gif" class="background-gif" />
            </div>

            <div class="jm-logo-overlay">
              <div class="jm-circle">
                <img
                  src="/images/logo_jm.svg"
                  alt="Jus Mundi Logo"
                  class="jm-logo"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Text and CTA -->
        <div class="right-content">
          <div class="text-container">
            <h1 class="title-large header-title">
              A Unique Partnership<br />
              for the Publication of<br />
              ICC Arbitration<br />
              Awards
            </h1>

            <p class="text-description header-description">
              The International Chamber of Commerce (ICC) & Jus Mundi have
              joined<br />
              forces to make ICC Arbitration Awards and related materials
              freely<br />
              available to the global legal community.
            </p>

            <button class="btn-primary cta-button">ACCESS ICC AWARDS</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppIcon from "../ui/app-icon.vue";
import DecorativeLine from "../ui/decorative-line.vue";
</script>

<style scoped>
.decoration-lines {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.line-1 {
  position: absolute;
  top: 15px;
  left: 0;
}

.line-2 {
  position: absolute;
  bottom: 13px;
  right: -5px;
}

.line-3 {
  position: absolute;
  bottom: 0;
  left: 0;
}

.top-nav {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
  display: flex;
}

.try-jus-mundi-button {
  box-shadow: 0 4px 20px 0px var(--shadow-dark-light);
  transition: all 0.3s ease;
}

.try-jus-mundi-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0px 45px var(--shadow-dark-light),
    0 0 0 1px var(--shadow-dark-subtle), 0 0 50px var(--shadow-dark-subtle);
}

.try-jus-mundi-button:hover .arrow-icon {
  transform: translateY(-1px);
  filter: brightness(1.2);
}

.arrow-icon {
  transition: all 0.3s ease;
}

.content-container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 3rem;
  padding-bottom: 2rem;
}

.left-content {
  display: grid;
  grid-template-rows: 400px 200px;
  position: relative;
}

.right-content {
  position: relative;
  display: flex;
  align-items: end;
}

.circle-background {
  position: absolute;
  background: var(--color-white);
  top: 0;
  border-radius: 50%;
  width: 480px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transform-origin: center;
  animation: growCircle 0.7s ease-out forwards;
}

.icc-logo {
  position: relative;
  z-index: 2;
  width: 330px;
  height: auto;
  left: 15px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.8s forwards;
}

.background-gif-container {
  grid-row: 2;
  height: 270px;
  display: flex;
  left: 120px;
  overflow: hidden;
  position: relative;
  opacity: 0;
  animation: fadeInBackground 0.8s ease-out 1.8s forwards;
}

.background-gif {
  width: 480px;
  height: 100%;
  object-fit: cover;
  filter: blur(0px);
  position: relative;
}

.background-gif-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 30px 0 40px -20px var(--color-white),
    inset -30px 0 40px -20px var(--color-white),
    inset 0 30px 40px -20px var(--color-white),
    inset 0 -30px 40px -20px var(--color-white);
  pointer-events: none;
  z-index: 1;
}

.background-gif-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-white-horizontal), var(--gradient-white-vertical);
  pointer-events: none;
  z-index: 2;
}

.icc-logo-container {
  grid-row: 1;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-left: 30px;
  width: 100%;
  height: 100%;
  z-index: 10;
  margin-bottom: -150px;
}

.text-container {
  animation: fadeIn 1s ease-out 0.8s both;
  z-index: 1;
  position: relative;
}

.header-title {
  font-weight: 800;
  line-height: 1.2;
}

.header-description {
  margin-bottom: 6rem;
}

.cta-button {
  opacity: 0;
  animation: fadeIn 0.6s ease-out 2.5s forwards;
  box-shadow: 0 4px 15px var(--shadow-blue-light);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px var(--shadow-blue-medium),
    0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 30px var(--shadow-blue-strong);
}

.cta-button:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px var(--shadow-blue-medium);
}

.cta-button::before {
  content: "> ";
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.jm-logo-container {
  grid-area: jm-logo;
  align-self: end;
  animation: slideInLeft 1s ease-out 0.8s both;
}

.jm-logo {
  width: 120px;
  height: auto;
}

.jm-logo-overlay {
  position: absolute;
  top: 133px;
  left: 78px;
  transform: translateY(-50%);
  z-index: 12;
  opacity: 0;
  animation: slideInDiagonal 0.6s ease-out 1.8s forwards;
}

.jm-circle {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px var(--shadow-black-light);
  transition: all 0.3s ease;
}

.jm-logo {
  width: 110px;
  height: auto;
  filter: drop-shadow(0 2px 4px var(--shadow-black-light));
}

@media (max-width: 1260px) {
  .content-container {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
  }

  .left-content {
    order: 1;
    justify-self: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-rows: auto;
  }

  .right-content {
    order: 2;
    justify-self: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-container {
    text-align: center;
    width: 100%;
  }

  .header-title {
    font-size: 2.8rem;
  }

  .header-description {
    margin-bottom: 4rem;
  }

  .icc-logo-container {
    margin-bottom: 0;
    justify-self: center;
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
  }

  .circle-background {
    width: 200px;
    height: 200px;
  }

  .icc-logo {
    width: 130px;
    left: 0;
  }

  .line-1,
  .line-2,
  .line-3,
  .background-gif-container,
  .jm-logo-overlay {
    display: none;
  }
}

@media (max-width: 768px) {
  .main-header {
    padding: 1.5rem 2rem;
  }

  .top-nav {
    top: 0;
    width: 100%;
  }

  .try-jus-mundi-button {
    width: 100%;
    justify-content: center;
  }

  .content-container {
    gap: 1rem;
    grid-template-rows: 130px 1fr;
  }

  .header-title {
    font-size: 2rem;
  }

  .header-description {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .cta-button {
    font-size: 0.8rem;
  }

  .circle-background {
    animation: growCircleMobile 1.5s ease-out forwards;
  }

  .icc-logo {
    width: 200px;
  }

  .background-gif-container {
    height: 150px;
  }

  .text-container {
    padding: 1rem;
  }

  .jm-circle {
    width: 100px;
    height: 100px;
  }

  .jm-logo {
    width: 65px;
  }
}
</style>
