import { User, fetchUser } from "../api/user";

export async function filterUser (): Promise<User>  {
  const res = await fetchUser('1');
  console.log(res);
  
  return {
    ...res,
    id: res.id + 1
  };
};