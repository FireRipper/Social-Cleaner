<template>
  <a :href="Github.prototype.url + repository" target="_blank" rel="noopener" class="github">
    <div class="github__icon">
      <i class="fa fa-github" aria-hidden="true"></i>
    </div>
    <div class="github__inner">
      <div class="github__name">{{ repository }}</div>
      <div class="github__info">
        <p v-if="loading">Loading..</p>
        <template v-else>
          <span class="github__start">{{ stars }} Stars</span>
          <div class="github__dot"></div>
          <span class="github__forks">{{ forks }} Forks</span>
        </template>
      </div>
    </div>
  </a>
</template>

<script>
import Github from '../../../networks/Github'
import { repository } from '../../../config'

export default {
  data () {
    return {
      Github,
      repository,
      stars: 0,
      forks: 0,
      loading: false
    }
  },
  mounted () {
    const storage = localStorage.getItem('github')

    if (storage) {
      try {
        const parse = JSON.parse(storage)
        if (parse.time && parse.time + 3600 > this.getSecondsNow()) {
          this.stars = +parse.stars
          this.forks = +parse.forks
          return
        }
      } catch (e) { }
    }

    this.fetchGet()
  },
  methods: {
    async fetchGet () {
      this.loading = true
      const result = await Github.fetchGetRepo(repository)

      if (result.ok) {
        this.forks = result.body.forks_count
        this.stars = result.body.stargazers_count
        localStorage.setItem('github', JSON.stringify({
          stars: this.stars,
          forks: this.forks,
          time: this.getSecondsNow()
        }))
      }

      this.loading = false
    },
    getSecondsNow () {
      return Math.floor(Date.now() / 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.github {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.github__icon {
  font-size: 1.5rem;
}

.github__inner {
  margin-left: 7px;
  .github__name {
    font-size: .8rem;
    color: #555;
  }
  .github__info {
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
      font-size: .7rem;
      color: #868686;
    }
    .github__dot {
      border: 1px solid #777;
      margin: 0 10px;
      border-radius: 50%;
    }
  }
}
</style>
