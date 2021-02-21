import React from 'react';
import { Col, ListGroup, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import './HomeNotice.css';
import {Link} from 'react-router-dom';
const Notice = () => {
    return (
        <div style={{margin:'30px 100px', display:'flex', justifyContent:'center', flexDirection:'column'}} className="notice">
            <h3 style={{margin: '5px 0'}}>Latest News</h3>
            <Link to="/notice"><button>See more...</button></Link>
            <TabContainer id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                        Admission
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                        Vacation
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={8}>
                    <TabContent>
                        <TabPane eventKey="#link1">
                                <p>link 1 description... <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores.</p>
                        {/* <Sonnet/> */}
                        </TabPane>
                        <TabPane eventKey="#link2">
                            <p>link 2 description... <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores.</p>
                        {/* <Sonnet/> */}
                        </TabPane>
                    </TabContent>
                    </Col>

                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link3">
                        Job
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                        Scholarship
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={8}>
                    <TabContent>
                        <TabPane eventKey="#link3">
                                <p>link 3 description... <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores.</p>
                        {/* <Sonnet/> */}
                        </TabPane>
                        <TabPane eventKey="#link4">
                            <p>link 4 description ... <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores.</p>
                        {/* <Sonnet/> */}
                        </TabPane>
                    </TabContent>
                    </Col>
                </Row>
            </TabContainer>
        </div>
    );
};

export default Notice;

const Sonnet = ()=>{
    return (
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum labore exercitationem veritatis, velit impedit voluptatibus molestias. Sequi modi, quos fugiat tenetur dolorum qui vero magni sed, necessitatibus enim quis perferendis.</p>
    );
};
