import { NavLink } from "react-router-dom";

export const Home = () =>  {
    return (
      <div className="home">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
        <h2>Hoş geldiniz</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio reprehenderit dicta, beatae assumenda doloremque, animi nobis vero vel natus perspiciatis corporis. Rem, voluptate perspiciatis. Dolore ab culpa modi quos.
        </p>
      </div>
    );
  }