import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : { name : 'kim', age : 20 },
  reducers :{
    changeName(state){
      state.name = 'park'
    },

  //state  변경함수를   action이라고 함
    increase(state, action){
      state.age += action.payload
    }
  }
})

//   increase(10)
//   increase(100)

export let { changeName, increase } = user.actions

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((a) => { return a.id === action.payload })
      console.log(num);
      state[num].count++
    },
    addItem(state, action) {
      state.push(action.payload)
    },
    sortName(state, action) {
      state.sort((a, b) =>
        a.name > b.name ? 1 : -1,
      );
    }
  }
})

// addCount(1)

export let { addCount, addItem, sortName } = cart.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
}) 