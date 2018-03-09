import React {Component} from 'react';
import {ListGroup, ListGroupItem, Row, Col} from 'react-bootstrap';
import {List, Card, ListGroupItemHeader, ListGroupItemText} from 'react-bootcards';

class ListDetail extends Component {
  render () {
    return (
        <div>
        <h3>Campaigns</h3>
        <p>Ipsum</p>
          <List>
            <Card>
              <ListGroup fill>
                <ListGroupItem href="#">
                  <Row>
                    <Col sm={6}>
                    <img src="images/joinedhandwithheart.jpg" className="img-rounded pull-left" alt="placeholder"/>
                      <ListGroupItemHeader>Alparvis Ltd</ListGroupItemHeader>
                      <ListGroupItemText>London, UK</ListGroupItemText>
                    </Col>
                    <Col sm={6}>
                      <ListGroupItemText>Contractor</ListGroupItemText>
                      <ListGroupItemText>$12,000 Revenue YTD</ListGroupItemText>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem href="#">
                  <Row>
                    <Col sm={6}>
                      <i className="fa fa-3x fa-building-o pull-left" />
                      <ListGroupItemHeader>Camion Corp</ListGroupItemHeader>
                      <ListGroupItemText>Tokyo, Japan</ListGroupItemText>
                    </Col>
                    <Col sm={6}>
                      <ListGroupItemText>Customer</ListGroupItemText>
                      <ListGroupItemText>$75,000 Revenue YTD</ListGroupItemText>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem href="#">
                  <Row>
                    <Col sm={6}>
                      <i className="fa fa-3x fa-building-o pull-left" />
                      <ListGroupItemHeader>Derenden Systems</ListGroupItemHeader>
                      <ListGroupItemText>Albuquerque, USA</ListGroupItemText>
                    </Col>
                    <Col sm={6}>
                      <ListGroupItemText>Supplier</ListGroupItemText>
                      <ListGroupItemText>$1.3m Revenue YTD</ListGroupItemText>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </List>
        </div>
    );
  }
}

export default ListDetail;
