import { use } from "react";

const UsersList = ({ usersPromise }) => {
  const users = use(usersPromise);

  return (
    <div>
      <h2>Inside users list: {users.length}</h2>
    </div>
  );
};

export default UsersList;