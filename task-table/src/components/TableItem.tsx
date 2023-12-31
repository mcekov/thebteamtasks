import styles from "./Table.module.css";
import { useState } from "react";

type Props = {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
      city: string;
    };
  };
};

const TableItem = ({ user }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleColorChange = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <tr
      className={styles.tr}
      style={{
        backgroundColor: isActive ? "olivedrab" : "",
        color: isActive ? "#fff" : "",
      }}
    >
      <td className={styles.center_text}>
        <div>
          <input
            onChange={handleColorChange}
            type="checkbox"
            id={user.id}
            name="select"
            style={{ width: "15px", height: "15px" }}
          />
        </div>
      </td>
      <td className={styles.center_text}>{user.id}</td>
      <td className={styles.left_text}>{user.name}</td>
      <td className={styles.left_text}>{user.username}</td>
      <td className={styles.left_text}>{user.email}</td>
      <td className={styles.left_text}>{user.address?.city}</td>
    </tr>
  );
};

export default TableItem;
