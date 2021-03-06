import React from 'react'
import Code from '../../components/Code'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import Example from '../../components/Example'
import Counter from './Counter'

const Page = props => (
  <div>
    <PageTitle text="Redux" />

    <p>
      When building a more complex React app comes the moment to choose a way to
      handle state. For simple scenarios where state is rather scoped, the
      built-in component state is usually more than enough.
    </p>

    <p>
      However, when things get more complicated and several components need to
      get access to the state of the application, and change it, it can be a
      good time to start looking into more advanced solution such as Redux. Side
      note: this counter app is *not* a good example to justify Redux (overkill
      much).
    </p>

    <p>
      <a href="http://redux.js.org/" target="_blank" rel="noopener noreferrer">
        Redux
      </a>{' '}
      is a predictable state container for JavaScript apps. In other words, it’s
      a pattern that helps you structure your application in having a single
      source of truth (a store), and a clean way to handle data flow.
    </p>

    <p>
      It all starts with a store. The store is an object on steroids that
      contains the entire state of your app. It is provided to your app through
      a <code>Provider</code> (wrapping your main component).
    </p>

    <Code language="jsx">{`import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './reducer'
import Counter from './Counter'

const store = createStore(counterReducer)

const Counter = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

export default Counter
`}</Code>

    <p>
      The store needs a “reducer” to work. A reducer is a big-ass function that
      takes the existing state of the store as well as an action (see below) to
      perform and returns the new state for the store.
    </p>

    <Code language="jsx">{`const INITIAL_STATE = { count: 0 }
const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default counterReducer
`}</Code>

    <p>
      An action is a object, or a function returning an object with a{' '}
      <code>type</code> key. This type tells the reducer what operation to
      perform. It can be “dispatched”, that is, sent to the reducer so it can
      make changes to the store.
    </p>

    <Code language="jsx">{`export const incrementCounter = () => ({
  type: 'INCREMENT'
})

export const decrementCounter = () => ({
  type: 'DECREMENT'
})`}</Code>

    <p>
      Finally our component “connects” to the store to have access to the
      current state as well as creating methods to dispatch the actions.
    </p>

    <Code language="jsx">{`import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './actions'

const Counter = props => (
  <div>
    <div>{props.count}</div>
    <button type='button' onClick={props.incrementCounter}>+</button>
    <button type='button' onClick={props.decrementCounter}>-</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
`}</Code>
    <Example live>
      <Counter />
    </Example>

    <SectionTitle text="Exercise A - Increment by 2 (very easy)" />

    <p>Update the example to increment the counter state by 2 instead of 1.</p>

    <Example live>
      <Counter />
    </Example>

    <SectionTitle text="Exercise B - Add by-10 option (medium)" />

    <p>
      Update the example to add two buttons to increment and decrement the
      counter state by 10. The current buttons should still work the same. Hint:
      a Redux action is a function returning the plain JavaScript object of your
      choice.
    </p>

    <Example live>
      <Counter />
    </Example>

    <SectionTitle text="Exercise C - Cap min and max values (medium)" />

    <p>
      Make it so the counter cannot be incremented higher than 25 and lower than
      -25.
    </p>

    <Example live>
      <Counter />
    </Example>

    <SectionTitle text="Exercise D - Add a reset button (medium)" />

    <p>Add a reset button to restore the counter value to 0.</p>

    <Example live>
      <Counter />
    </Example>

    <SectionTitle text="Exercise E - Dynamic increment / decrement (hard)" />

    <p>
      Add a number input that dictates by how much the two new buttons added in
      exercise C increment and decrement the counter.
    </p>

    <Example live>
      <Counter />
    </Example>

    <SectionTitle text="Exercise F - For real?" />

    <p>
      <span role="img" aria-label="screaming face">
        😱
      </span>{' '}
      YOU ALREADY DONE? Alright, help your neighbour then!
    </p>
  </div>
)

export default Page
