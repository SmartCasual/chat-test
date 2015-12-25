views (container components)
  - decides whether to re-render (PureRenderMixin recommended, from `react`)
  - renders templates (presentational components)
  - provides templates with state and props, including event callbacks
    (typically including action dispatches)

templates (presentational components)
  - takes state and props from container, including event callbacks
  - contains the markup, inserting data
  - wires up even callbacks

store
  - contains the full data tree
  - receives subscriptions from views
  - notifies subscribed views when store contents change
  - is passed to views by wrapping them in a `Provider` (from `react-redux`)

reducers
  - functions which, given some current state and an action, produce a new state
  - composed of one another in a large application, with a root reducer calling
    sub-reducers with a smaller chunk of the current state
  - pure functions, no side effects

actions
  - simple JSON objects which describe an action to be taken and the data to go
    with it.  Examples include adding an item to a list, saving to the server,
    sending or receiving a chat message over a channel
  - Format recommended to follow the Flux Standard Action guide
    https://github.com/acdlite/flux-standard-action

`connect` (from `react-redux`)
  - subscribes views to store
  - takes a selector function which pulls the relevant state for the view
    from the store's overall state (`reselect` recommended)
