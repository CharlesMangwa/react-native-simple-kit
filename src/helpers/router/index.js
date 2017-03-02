
import React from 'react'
import * as ReactRouter from 'react-router'
import createHistory from 'history/createMemoryHistory'
import { connect } from 'react-redux'
import { initialyzeHistory, changeHistory } from '@store/modules/history'

const Router: ReactClass<any> = connect()((ownProps: Object): ReactClass<any> => {
  const { dispatch, ...props }: Object = ownProps
  const history: Function = createHistory(props: Object)
  dispatch(initialyzeHistory(history: Function): Function)
  history.listen((): void => dispatch(changeHistory(history: Function)))
  return (
    <ReactRouter.Router
      {...props}
      history={history}
    />
  )
})

export default Router
