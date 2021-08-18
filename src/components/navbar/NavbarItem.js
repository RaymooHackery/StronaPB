import React, {useMemo} from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss"

const NavbarItem = (props) => {
    const location = useLocation();
    //location.pathname;
    //weź lokacje i porównaj ją z URLem do którego prowadzisz
    //jeżeli location.pathname i props.pathTo są takie same cosnole.log(label aktualnego przycisku)

    // useEffect - wywołaj wnętrze, jeżeli coś w tablicy dependencji się zmieni 
    // useMemo - zwróc nową wartość, obliczoną przy pomocy funkcji jeżeli coś w tablicy dependencji sie zmieni
    // useCallback - po prostu useMemo tylko że do funkcji
    
    const isActive = useMemo(() => location.pathname === props.pathTo, [location.pathname, props.pathTo]);

    return (
        <div className="navbar__item">
            <Link to={props.pathTo}>
                <div className={`navbar__item-text ${isActive && "navbar__item-text--active"}`}>
                    {props.children}
                </div>
            </Link>
        </div>
    )
}

export default NavbarItem;