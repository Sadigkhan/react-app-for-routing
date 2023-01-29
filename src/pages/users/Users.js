import { useLoaderData, Link } from "react-router-dom";

export const Users = () => {
    const users = useLoaderData();

    return (
        <div className="users">
            {
                users.map(user => (
                    <div className="card" key={ user.id }>
                        <h3>
                           <i className="fa-solid fa-caret-right"></i> { user.name }
                        </h3>
                        <Link to={ user.id.toString() }>
                            <i className="fa-regular fa-square-caret-right"></i>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export const usersLoader = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if(res.status === 404) {
        throw new Response("Kaynak bulunamadı", { status: 404 });
    }
    return res.json();
}