export interface User {
  id: number;
  name: string;
  age: number;
}

export const fetchUser = async (id: string): Promise<User> => {
  const res = await fetch(`https://aaaa.com/users/${id}`)
    .catch((_) => {
      throw new Error("エラーが発生しました。");
    });

  return await res.json();
}
