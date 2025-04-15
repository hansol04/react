import { useEffect, useState } from 'react';
import { Button, Nav, Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { addItem } from '../store/store';
import { useDispatch } from 'react-redux';

function Detail(props) {

    useEffect (() => {
        let p = localStorage.getItem('recentProduct')   // localStorage 가져오기
        p = JSON.parse(p)   // 배열로 형변환
        
        if(!p.includes(findId.id))
            p.push(findId.id)  // 배열에 넣기
            localStorage.setItem('recentProduct', JSON.stringify(p))    // localStorage 넣기
    }, [])

    let dispatch = useDispatch()
    const nav = useNavigate()

    let {pid} = useParams();

    let findId = props.clothes.find((v) => v.id == pid)

    let[alert, setAlert]= useState(true);
    let[tab, setTab]= useState(0);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 3000)
        return () => {
            clearTimeout(timer);
        }
    },[])

    let [detailFade, setDetailFade] = useState('start');

    useEffect(() => {
        setDetailFade('end')
    },[])

    return(
        <div className={detailFade}>
            {
                alert ? <div>3초이내에 구매시 30%할인</div> : null
            }
            <div className='detail'>
                <img src = {`${process.env.PUBLIC_URL}/img/clothes${findId.id}.png`} /> 
                <div className='detail_text'>
                    <h4>{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}원</p>
                    <Button variant="outline-secondary" onClick={() => {
                        dispatch(addItem({id:findId.id, name:findId.title, count:1}))
                        nav('/cart')
                    }}>
                        주문하기</Button>
                </div>
            </div>

            <Nav fill variant="tabs" defaultActiveKey="link-0" className='deNav'>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(0)}} eventKey="link-0">패션에 대하여</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(1)}} eventKey="link-1">옷의 정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(2)}} eventKey="link-2">기타</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab = {tab} />
            <RecentViewed clothes={props.clothes} />
        </div>
    )
}

function RecentViewed ({clothes}) {
    const [recent, setRecent] = useState([]);

    useEffect (() => {
        let viewed = JSON.parse(localStorage.getItem('recentProduct')) || []

        let products = viewed.map(id => clothes.find(c => c.id == id))

        setRecent(products);

    }, [clothes])
    return (
        <div>
            <h4>👀최근 본 상품👀</h4>
            <Table striped bordered hover>
                <tr>
                    <th>이름</th>
                    <th>제품설명</th>
                    <th>가격</th>
                </tr>
                {
                    recent.map((item) => 
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>{item.price}</td>
                        </tr>
                    )
                }
            </Table>
        </div>
    )
}

function TabContent({tab}) {
    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => { setFade('end')}, 100);
        return () => {
            setFade('start ');
        }
    },[tab])

    return (
        <div className={fade}>
            {[<div>패션은 예술이다</div>, <div>퀄리티 좋은 재료</div>, <div>내용들</div>][tab]}
        </div>
    )
}

export default Detail;