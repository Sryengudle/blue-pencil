
import { Link } from "react-router-dom";
import { MENUBAR_ITEMS } from "../../utils/menu-bar";
import Button from "../button";
import './style.css';

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {
                        MENUBAR_ITEMS.map((menu, idx) => (
                            <li className="nav-item" key={idx}>
                                <Link className="nav-link" to={menu.redirectPath} >{menu.name}</Link> 
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-mid-text">Landing</div>
                <Button
                    onClick={() => { }}
                    label={'Buy Now'}
                    variant={'primary'}
                    classes={{
                        height: '26px',
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
            </div>
        </nav>
    );
}
export default NavBar;
