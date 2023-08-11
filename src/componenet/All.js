import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'


export const All = () => {
 
    const [data, setdata] = useState([]);
    const apiget = async () => {
        const dt = await fetch(" https://inshorts.me/news/all?offset=0&limit=21");
        const datas = await dt.json();
        setdata(datas.data.articles);

    };
    useEffect(() => {
        apiget();
    }, []);


    return (
        <Container fluid>
            <Row xs={1} md={3} className="g-4">
                {
                    data.map(
                        (value) => {
                            return (
                                <>
                                    <Col className="container-fluid mt-4">
                                        <Card style={{ height: '40rem',overflow: 'scroll' }}>
                                            <Card.Img variant="top" src={value.imageUrl} />
                                            <Card.Body>
                                                <Card.Title>{value.title}</Card.Title>
                                                <Card.Text>
                                                    {value.content}
                                                </Card.Text>
                                            </Card.Body>
                                           
                                        </Card>
                                    </Col>
                                </>
                            )
                        }
                    )

                }

            </Row>
        </Container>
    )
}
