import {getUsers} from '../lib/data'
import UsersTable from '../components/UsersTable';
export default async function UsersPage() {
    const users = await getUsers();
  return (
    <div className="">
      <h2>User mangement: {users.length}</h2>
      <UsersTable users = {users}></UsersTable>
    </div>
  );
}