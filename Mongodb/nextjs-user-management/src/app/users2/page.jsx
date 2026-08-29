import UsersList from "@/components/UsersList";
import { Suspense } from "react";

const getUsers = async () => {
  const res = await fetch('http://localhost:8000/users', { cache: 'no-store' });
  return res.json();
};

const Users2page = () => {
  const usersPromise = getUsers();

  return (
    <div>
      <h2>Users2: with suspense </h2>
      <Suspense fallback={<div>loading...</div>}>
        <UsersList usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
};

export default Users2page;
