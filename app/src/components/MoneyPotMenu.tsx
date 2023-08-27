import { Link, Outlet } from "react-router-dom";

function MoneyPotMenu() {
    return (
        <div className="moneypotmenu">
            <Link to="/transaction/new">MAKE a New Transaction</Link>
            <br />
            <Link to="/history">See your History</Link>
            <br />
            <Link to="/boards">see your boards</Link>
            <Outlet context={{testMessage: "AAAAAAA"}} />

        </div>
    );
}
export default MoneyPotMenu;