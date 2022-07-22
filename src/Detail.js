import { useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { useEffect } from "react";
import { addItem } from './store.js'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'


let Box = styled.div`
padding : 20px;
color : gray;
`;

let YellowBtn = styled.button`
background : gold;
color : white;
font-size:30px;
width:100%;
padding : 100px 100px;
border:1px solid #ccc;
background-image:url("https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80");
background-size:cover;
background-position:center;
`;

function Detail(props) {
  let { id } = useParams();
  console.log(id);
  console.log(Number(id) + 1);
  let [tap, setTap] = useState(0);
  let [fade2, setFade2] = useState('')
  useEffect(()=>{
    setFade2('end')
    return ()=>{
      setFade2('')
    }
  },[])
  let selproduct  = props.shoes.find((x) => x.id == id )
  let dispatch = useDispatch()
  return (
    <div className={'container start ' + fade2}>
      <Box>
        <YellowBtn>지금 구매하면 10% 할인</YellowBtn>
      </Box>
      <div className="row">

        <div className="col-md-6">
          {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" /> */}
          <img src={'/'+selproduct.imgUrl} width="80%" />  
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{selproduct.title}</h4>
          <p>{selproduct.content}</p>
          <p>{selproduct.price}</p>
          <button className="btn btn-danger" onClick={()=>{
            //  dispatch(addItem(  {id : 2, name : 'Grey Yordan', count : 1}))

            dispatch(addItem({
              id : selproduct.id, 
              name : selproduct.title,
              count : 1,
            }))
          }}>주문하기</button>
        </div>


        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => { setTap(0) }} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { setTap(1) }} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => { setTap(2) }} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* <div>내용0</div>
            <div>내용1</div>
            <div>내용2</div>  */}

        <TabContent tap={tap} />
      </div>
    </div>
  )
}

function TabContent({ tap }) {
  let [fade, setFade] = useState('')
  useEffect(() => {
    setTimeout(() => { setFade('end') }, 10)
    return () => {
      setFade('')
    }
  }, [tap])
  return (
    <div className="start end">
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]}
    </div>
  )
}

export default Detail;