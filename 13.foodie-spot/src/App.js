import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*
  * 동적 UI를 만드는 법(모달창 만들기)
    : 유저가 조작시 형태가 바뀌는 모달창, 탭, 서브메뉴, 경고문 등 UI들

  * 순서
    1. html과 css로 ui 디자인하기
    2. UI의 현재 상태를 state에 저장
    3. state에 따라 UI가 어떻게 보일지 조건문 등으로 작성
*/

function App() {
  const [like, setLike] = useState([0,0,0]);
  const [title, setTitle] = useState(['JIMMYJOHNS', 'SUSH', 'MOMSTOUCH']);
  const [modal, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>
      {
      title.map(function(v, i){
        return (
          <div className='list'>
        <h4 onClick={()=>{setModal(!modal); setModalIndex(i)}}>{title[i]}</h4>
        <p>APRIL 9TH <span onClick={() => {
          let copy = [...like];
          copy[i] = copy[i] + 1;
          setLike(copy);
          }}>👍</span> {like[i]} </p>
      </div>
        )
    })
  }

  <input onChange={(e) => { setInputValue(e.target.value) }}/>
  { modal ? <Modal title={title} setTitle={setTitle} modalIndex={modalIndex} inputValue={inputValue}/> : null }

      {/* <div className='list'>
        <h4 onClick={()=>{setModal(!Modal);}}>{title[0]}</h4>
        <p>APRIL 9TH <span onClick={() => {setLike(like+1)}}>🌯</span> {like} </p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>APRIL 17TH <span onClick={() => {setLike(like+1)}}>🍣</span> {like} </p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>APRIL 25TH <span onClick={() => {setLike(like+1)}}>🍔</span> {like} </p>
      </div> */}

    </div>
  );
}

function Modal (props) {
  return (
    <div className='modal'>
        <h4>{props.title[props.modalIndex]}</h4>
        <p>DATE</p>
        <p>DETAILS</p>
          <div className='update'>
              <button onClick={() => {
              let copy = [...props.title];
              copy[props.modalIndex] = props.inputValue;
              props.setTitle(copy);
            }}>EDIT</button>
          </div>
      </div>
  ) 
}

export default App;
