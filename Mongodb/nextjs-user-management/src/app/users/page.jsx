const UsersPage = async () => {
    const res = await fetch('http://localhost:8000/users');
    const users = await res.json();
  return (
    <div>
      <h2>Users: {users.length}</h2>
      <div>
        {
            users.map(user => <div key={user.id}
                className="border-2 p-4">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
           
        
      </div> )}
    </div>
    </div>
  );
};

export default UsersPage;