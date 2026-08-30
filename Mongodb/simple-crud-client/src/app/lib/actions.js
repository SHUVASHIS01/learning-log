"use server";

import { revalidatePath } from "next/cache";

export const createUser = async(formData) => {
    'use server';
    const newUser = Object.fromEntries(formData.entries());
    console.log('New user data', newUser);
    const res = await fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {
            'Content-Type' : "application/json"

        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json();
    console.log('data after post', data);
    revalidatePath('/users');
    return data;
}

export const updateUser = async(userid, formData) =>{
  'use server'
  const updatedUser = Object.fromEntries(formData.entries());
  const res = await fetch(`http://127.0.0.1:5000/users/${userid}`,{
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    }, 
    body: JSON.stringify(updatedUser)
  })
  const data = await res.json();
  console.log('after Upadate', data);

  //revalidate
  if(data.modifiedCount > 0){
    revalidatePath('/users');
    redirect('/users');
  }
}

export const deleteUser = async (userid) => {
  const res = await fetch(`http://127.0.0.1:5000/users/${userid}`, {
    method: "DELETE",
  });

  const raw = await res.text();
  let data = null;

  try {
    data = raw ? JSON.parse(raw) : null;
  } catch {
    data = raw;
  }

  if (!res.ok) {
    throw new Error(
      `Delete failed with status ${res.status}${raw ? `: ${raw}` : ""}`
    );
  }

  if (data?.deletedCount > 0 || data?.deleted === true) {
    revalidatePath("/users");
  }

  return data;
};