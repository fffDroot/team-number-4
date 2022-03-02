import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";


const DevicePage = () => {
    // const [device, setDevice] = useState({info: []})
    // const {id} = useParams()
    // useEffect(() => {
    //     fetchOneDevice(id).then(data => setDevice(data))
    // }, [])
    const device = {id: 1, name: 'Фирменная', price: 150, img: 'img/firm.jpg'}
    const info = [
        {id: 1, title: 'Лаваш', description: 'Пшеничный'},
        {id: 2, title: 'Начинка', description: 'Курица, Салат "Айсберг", Помидоры, Лук'},
        {id: 3, title: 'Cоус', description: 'Классический йогуртовый соус'},
        
    ]
    return (
        <Container className="mt-3">
            <h1>{device.name}</h1>
            <Row className="d-flex mt-3">
                <Col md={4}>
                    <Image width={300} height={300} src={'../img/firm.jpg'}/>
                </Col>
                
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>Цена: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Состав</h1>
                {info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
