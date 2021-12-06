import {Container, Navbar, } from "react-bootstrap";
import {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <Navbar variant="dark" bg="dark" expand="lg" className="text-center text-white fixed-bottom">
                <Container fluid>
                        © 2020 Copyright : MDBootstrap.com

                </Container>
            </Navbar>
        );
    }
}

export default Footer;
