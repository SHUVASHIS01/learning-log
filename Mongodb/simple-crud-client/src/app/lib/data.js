const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';

export const getUsers = async () => {
  const res = await fetch(`${API_URL}/users`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.status}`);
  }

  return res.json();
};

export const getUserByID = async (userid) => {
  const res = await fetch(`${API_URL}/users/${userid}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch user ${userid}: ${res.status}`);
  }

  return res.json();
};