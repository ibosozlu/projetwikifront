import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import {Component} from "react";

class NavBar extends Component {
    render() {
        return (
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Accueil - ホーム</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example"/>
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Kanji - 漢字"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="/kanji-appris">Kanji appris</NavDropdown.Item>
                                <NavDropdown.Item href="/kanji-en-cours">Kanji en cours d'apprentissage</NavDropdown.Item>
                                <NavDropdown.Item href="/kanji-a-apprendre">Kanji à apprendre</NavDropdown.Item>
                                <NavDropdown.Item href="/kanji-niveau">Kanji par niveau</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Vocabulaire - 単語"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="/vocabulaire-appris">Vocabulaire appris</NavDropdown.Item>
                                <NavDropdown.Item href="/vocabulaire-en-cours">Vocabulaire en cours d'apprentissage</NavDropdown.Item>
                                <NavDropdown.Item href="/vocabulaire-a-apprendre">Vocabulaire à apprendre</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;
