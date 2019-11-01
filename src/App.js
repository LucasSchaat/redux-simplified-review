import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import Header from './Components/Header'


class App extends React.Component {
  
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Header something={'something'} next={'next'}/>
        </div>
      </Provider>
  )};
}

export default App;
