import { Outlet, NavLink } from "react-router-dom";

export const UsersLayout = () => {
    return (
        <div className="users-layout">
            <h2>Users</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque optio ipsam, exercitationem et explicabo voluptatibus eveniet animi ratione incidunt ab nihil facilis possimus rerum sed vero suscipit corrupti placeat quidem!</p>

            <Outlet />
        </div>
    );
}