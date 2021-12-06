import {Component} from "react";
import NavBar from "./navBar/NavBar";

class Header extends Component {
    render() {
        return (
            <div className="fixed-top">
                <NavBar />
            </div>
        );
    }
}

export default Header;
