<template>
  <router-view/>
</template>

<script>
import deckData from './deckData.json'

const localStorageDraftKey = 'unsavedDeckData'

export default {
  name: 'app',
  data () {
    return {
      deckData: this.loadDraft() || this.getDeckFromSource(),
      deckDataModified: !!this.loadDraft(),
      selectedIds: []
    }
  },
  methods: {
    getDeckFromSource () {
      return JSON.parse(JSON.stringify(deckData))
    },
    loadDraft () {
      return localStorage.getItem(localStorageDraftKey) &&
        JSON.parse(localStorage.getItem(localStorageDraftKey))
    },
    saveDraft (draftDeckData) {
      localStorage.setItem(localStorageDraftKey, draftDeckData)
    },
    discardDraft () {
      this.deckData = this.getDeckFromSource()
      this.$nextTick()
        .then(() => {
          localStorage.removeItem(localStorageDraftKey)
          this.deckDataModified = false
          this.$forceUpdate()
        })
    }
  },
  watch: {
    deckData: {
      handler (val) {
        this.deckDataModified = true
        this.saveDraft(JSON.stringify(val))
      },
      deep: true
    }
  }
}
</script>

<style>
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #fbfbfb;
    margin: 0;
  }
  
  /* Custom CSS */
  body {
    background-color: #0e94e6;
  }
</style>
