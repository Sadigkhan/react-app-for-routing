import { Outlet, NavLink } from "react-router-dom";

export const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h2>Help</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque optio ipsam, exercitationem et explicabo voluptatibus eveniet animi ratione incidunt ab nihil facilis possimus rerum sed vero suscipit corrupti placeat quidem!</p>


            <nav>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="faq">Faq</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}