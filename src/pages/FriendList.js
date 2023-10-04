import { useContext, useEffect, useState } from "react";
import Friend from "../components/Friend";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";


const FriendList = (props) => {

    const [friends, setFriends] = useState([]);
    const { authUser } = useContext(AuthContext);

    useEffect(() => {
      axios
        .get(`http://localhost:9000/api/friends`, {
          headers: { authorization: authUser.token },
        })
        .then((res) => {
          setFriends(res.data);
        })
        .catch((err) => {
          console.error(err.response.message);
        });
    }, []);

    return (
      <>
        <h1>FRIENDS LIST</h1>
        {friends.map(friend => (
            <Friend key={friend.id} friend={friend}/>
        ))}
      </>
    );
}


export default FriendList;