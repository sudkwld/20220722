import { useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'
import { useEffect } from "react";
// import data from './data';
import { addItem } from './store.js'
import { useDispatch, useSelector } from 'react-redux'
import {Table} from 'react-bootstrap'
import { addCount, sortName } from './store.js'
import { Button } from 'react-bootstrap'

function Cart() {

  let state = useSelector((state) => state)
  // console.log(state.cart[0].name);

  // dispatch는  store.js 로 요청보내주는 함수
  let dispatch = useDispatch()
  return (
    <>
      <h5>{state.user.name} {state.user.age}의 장바구니</h5>
      {/* <button onClick={()=>{ dispatch(increase())}}>나이+</button>
     <button onClick={()=>{ dispatch(increase(100))}}>나이+</button> */}


      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>

          {
            state.cart.map((a, i) =>
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td><button onClick={() => {
                  dispatch(addCount(state.cart[i].id))
                }}>+</button></td>
              </tr>
            )
          }

        </tbody>
      </Table>
      <Button variant="outline-primary" onClick={() => {
        dispatch(sortName(state.cart.Name))
      }}>이름순정렬</Button>{' '}
    </>

  )

}

export default Cart