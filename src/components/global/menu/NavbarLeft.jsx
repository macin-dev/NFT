import {Link} from "react-router-dom";
import {List} from "./List.jsx";

const NavbarLeft = () => {
    return (
        <div className="flex items-center gap-6 flex-grow shrink-0">
            <Link to="/">
                <img src="/assets/Union.svg" alt="Ultrarare Logo"/>
            </Link>
            <div className="w-[0.063rem] h-4 bg-light-border"></div>
            <List/>
        </div>
    )
}

export default NavbarLeft;