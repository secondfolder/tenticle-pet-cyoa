
import deckRead from 'src/mixins/deckRead'
import deckHelpers from 'src/mixins/deckHelpers'
import deckValidation from 'src/mixins/deckValidation'

export default {
  mixins: [deckRead, deckHelpers, deckValidation],
  computed: {
    deckData () {
      return this.groupData || this.choiceData || this.$root.deckData
    }
  }
}
