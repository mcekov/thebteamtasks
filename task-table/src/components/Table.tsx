import styles from "./Table.module.css";
import useTableDataList from "../hooks/useTableDataList";
import TableItem from "./TableItem";
import React from "react";

const Table: React.FC = () => {
  const [users] = useTableDataList("users");

  return (
    <table>
      <thead className={styles.thead}>
        <tr>
          <th>&nbsp;</th>
          <th>ID</th>
          <th className={styles.left_text}>Name</th>
          <th className={styles.left_text}>Username</th>
          <th className={styles.left_text}>Email</th>
          <th className={styles.left_text}>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: { id: string }) => (
          <TableItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
