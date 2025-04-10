import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import img1 from './img/img1.jpg'
// import {num1, num2} from './data/ProductList'

function App() {
  const [clothes, setClothes] = useState(pList);
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">CHANEL</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' />
      {/* background로 넣을 때
          <div className='main-bg' /> 
      */}

      {/* src 하위에 넣었을 때는 import하여 넣는다
          <img src= {mainBg}/>
      */}

      {/* src 하위에 넣었을 때는 import하여 넣는다
          <img src= "/img/main_bg.png" />
      */}

      {/*배포할 때 기존 url 하위에 폴더를 가져와야 되므로
         기존 url을 얻어와서 넣어 준다
      <img src={process.env.PUBLIC_URL + 'img/main_bg.png'} />
      */}

    <Container>
      <Row>
        <Col>
          {/* src 하위에 넣었을 때는 import하여 넣는다 */}
          <img src = {img1} width="100%" />
          <h4>{clothes[0].title}</h4>
          <p>{clothes[0].price}</p>
        </Col>
        <Col>
          {/* public/img 폴더에 그림이 있을 때 import 필요없음 */}
          <img src = "/img/img2.jpg" width="100%" />
          <h4>{clothes[1].title}</h4>
          <p>{clothes[1].price}</p>
        </Col>
        <Col>
          {/* public/img 폴더에 그림이 있고 배포할 때 url을 얻어와서 앞에 넣어준다 
              배포시 tjoeun.com/abc/~~~ 하위 경로일때는 그림을 못찾음
              <img src = {`${process.env.PUBLIC_URL} + /img/img3.jpg`} /> */}
          <img src = {process.env.PUBLIC_URL + '/img/img3.jpg'} width="100%" />
          <h4>{clothes[2].title}</h4>
          <p>{clothes[2].price}</p>
        </Col>
      </Row>
    </Container>

    </div>
  );
}

export default App;
