import { Container, Row} from "react-bootstrap";


export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
            <p>&copy;Copyright { currentYear } All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  )
}
