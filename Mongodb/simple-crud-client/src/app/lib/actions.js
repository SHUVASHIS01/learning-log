"use server";

import { revalidatePath } from "next/cache";

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