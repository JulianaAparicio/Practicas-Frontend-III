import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUser } from "../users";

const User = () => {

    const params = useParams();
    const navigate = useNavigate();

    const user = getUser(parseInt(params.userId));

    const handleDelete = () => {
        deleteUser(user.id)
        navigate("/users", {replace: true})
    }

    if(!user) {
        return <div>That user doesn't exists.</div>
    }

    return(
        <div>
            <h2>{user.name}</h2>
            <div>
                <strong>Teléfono: </strong>{user.phone}
            </div>
            <div>
                <strong>Email: </strong>{user.email}
            </div>
            <br/>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default User;