<template>
  <footer>
    <div class="footer__inner">
      <locale class="fixed" />
      <router-link class="home-link" to="/">
        <i class="fa fa-home" aria-hidden="true"></i>
      </router-link>
      <github class="fixed" />
    </div>
  </footer>
</template>

<script>
import Locale from './parts/Locale'
import Github from './parts/Github'

export default {
  components: {
    Github, Locale
  }
}
</script>

<style lang="scss">
footer {
  border-top: 1px solid #e7e7e7;
  .footer__inner {
    display: flex;
    align-items: center;
    margin: 0 20px;
    height: 40px;
    justify-content: space-between;
    color: #a0a0a0;
    a {
      color: #868686;
      font-weight: bold;
      transition: .2s;
      &:hover {
        color: #333;
      }
    }
    .home-link {
      line-height: 0;
      font-size: 1.3rem;
    }
  }
}

.fixed {
  min-width: 200px;
}
</style>
