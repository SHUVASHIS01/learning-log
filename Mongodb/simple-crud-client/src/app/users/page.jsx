import { getUsers } from "../lib/data";
import { deleteUser } from "../lib/actions";
import UsersTable from "../components/UsersTable";
import AddUserModal from "../components/AddUserModal";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="">
      <div className="flex justify-between">
        <h2>User mangement: {users.length}</h2>
        <AddUserModal></AddUserModal>
        <UsersTable users={users} deleteUserAction={deleteUser} />
      </div>
    </div>
  );
}
