import { useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";


const FriendDetails = () => {

    const { id } = useParams();
    const { authUser } = useContext(AuthContext);
    const [friend, setFriend] = useState({});

    useEffect(() => {
        axios
        .get(`http://localhost:9000/api/friends/${id}`, {
          headers: { authorization: authUser.token },
        })
        .then((res) => {
          setFriend(res.data);
        })
        .catch((err) => {
          console.error(err.response.message);
        });
    }, []);

    return (
        <>
        <h1>FRIENDS</h1>
        <p>
            Name: {friend.name}
        </p>
        <p>
            Age: {friend.age}
        </p>
        </>
    )
}

export default FriendDetails;