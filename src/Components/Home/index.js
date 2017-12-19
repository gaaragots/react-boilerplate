import Home from './Home'
import { compose, withState, withHandlers } from 'recompose'

export default compose(
  withState('value', 'setValue', ''),
  withHandlers({
    onSearch: ({ setValue }) => ({ search }) => setValue(search)
  })
)(Home)
