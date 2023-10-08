import { useQuery } from "react-query";
import fetchTableDataList from "../services/fetchTableData";

export default function useTableDataList(users: string) {
  const results = useQuery(["users", users], fetchTableDataList);

  return [results?.data ?? [], results.status];
}
