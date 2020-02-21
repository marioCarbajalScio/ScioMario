import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const Album = (props) =>{
    return(
       <div>
           <hr></hr>            
            <Row>
                {props.album.map((album,i) => (
                    <Col className="pt-1 pb-1" lg={4} md={6} sm={6} key={i}>
                        <Card className="bg-dark">
                            <Card.Img src={album.album.cover_medium} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title></Card.Title>
                                <Card.Subtitle></Card.Subtitle>
                                <Card.Text>
                                <Col>
                                    {album.title}
                                </Col>
                                <Col>
                                    Album: {album.album.title}
                                </Col>
                                <Col>
                                    Duration: {album.duration} seg
                                </Col>
                                </Card.Text>
                                <Card.Footer>
                                    <Row>
                                    <Col>
                                        <Button variant="success" href={album.link}>Play Song</Button>
                                        </Col>
                                    <Col>
                                        <Button variant="info" href={album.preview}>Preview</Button>
                                    </Col>
                                    </Row>
                                </Card.Footer>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
            
       </div>
    )
}


export default Album