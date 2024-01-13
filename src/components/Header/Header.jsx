import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="img">
                    <a href="/home"><img src={logo} alt="" /></a>

                </div>
                <div className="nav-item">
                    <a href="/order">Order</a>
                    <a href="order-review">Order Review</a>
                    <a href="/manage-inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </div>
            
        </div>
    );
};

export default Header;