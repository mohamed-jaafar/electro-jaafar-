import React from 'react'
import { Container, Row, Col, Card, Button, Nav} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Card className="text-center">
  <Card.Header>
  <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Electro Jaafar</Col>
        </Row>
      </Container>
  </Card.Header>
  <Card.Body>
    <Card.Title>NOTRE PAGE FACEBOOK</Card.Title>
    <Card.Text>
      POUR PLUS D'INFO VOUS POUVEZ NOUS VISITER SUR NOTRE PAGE FACEBOOK .
    </Card.Text>
    <Button variant="warning" href="https://www.facebook.com/Electro-Jaafar-101147668485538" target="blank">Facebook</Button> 
  </Card.Body>
</Card>
    </footer>
  )
}

export default Footer
