import { Link } from "react-router-dom";

const Friend = (props) => {

    const { friend } = props;

    return (
        <div>
            <Link to={`/friends/${friend.id}`}>
            -{friend.name} -{friend.email}
            </Link>
        </div>
    )
}

export default Friend;