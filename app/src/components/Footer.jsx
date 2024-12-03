import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Footer( props ) {
    return(
        <Container fluid>
            <Row>
                <Col className="container text-center">
                    <h4>&copy; 2024 Christian Alvarez. All rights reserved.</h4>
                </Col>
            </Row>
        </Container>
    )
}