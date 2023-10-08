export interface QueryKey {
  queryKey: string;
}

const fetchTableDataList = async ({ queryKey }: QueryKey) => {
  const users = queryKey[1];

  if (!users) {
    return [];
  }

  const apiRes = await fetch(`https://jsonplaceholder.typicode.com/${users}`);

  if (!apiRes.ok) {
    throw new Error(`Table/${users} fetch not ok`);
  }

  return apiRes.json();
};
export default fetchTableDataList;
