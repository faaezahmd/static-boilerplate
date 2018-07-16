import { createStore } from 'redux';
// import promise from './promise';
import Game from './promise';
const initialState = {
  username: "Max",
  age: 90
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        username: action.payload
      };
      break;
    default: 
      return state;
  }
  return state;
}

const store = createStore(reducer, {});

store.subscribe(() => {
  // console.log("State: ", store.getState());
})

document.querySelector('#add').addEventListener('click', (e) => {
  e.preventDefault();
  store.dispatch({
    type: "ADD",
    payload: document.querySelector('#username').value
  })
  document.querySelector('#payload').innerHTML = store.getState().username;
})

// const game = new Game(document.getElementById('canvas'));
// game.animate();
function getCode() {
  const code = 100;
  if (code !== 200) {
    throw new Error('Code is not 200');
  }
}

try {
  getCode();
} catch (error) {
  console.log(error);
}

console.log('after');