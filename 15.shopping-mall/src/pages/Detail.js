import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Detail(props) {
    let {pindex} = useParams();

    let findId = props.clothes.find(function(v) {
        return v.id == pindex;
    })

    let[alert, setAlert]= useState(true);

    useEffect(() => {
        setTimeout(() => { setAlert(false) }, 3000)
    })

    return(
        <div className='detail'>
            {
                alert ? <div>3초이내에 구매시 30% 할인</div> : null
            }
                <div className='detail_img'>
                    <img src = {`${process.env.PUBLIC_URL}/img/clothes${findId.id}.png`} />
                </div>
                <div className='detail_text'>
                    <h3>{findId.title}</h3> <br/>
                    <p>{findId.content}</p> <br/>
                    <p>{findId.price}원</p> <br/>
                    <Button variant="outline-secondary">주문하기</Button>
                </div>
        </div>
    )
}

export default Detail;