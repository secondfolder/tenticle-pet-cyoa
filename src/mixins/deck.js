
import deckRead from './deckRead'
import deckHelpers from './deckHelpers'
import deckValidation from './deckValidation'

export default {
  mixins: [deckRead, deckHelpers, deckValidation],
  computed: {
    deckData () {
      return this.groupData || this.choiceData || this.$root.deckData
    }
  }
}
