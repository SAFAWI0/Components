import React from "react";
import styles from "./productsTable.module.css"
export const Table = () => {
  return (
    <div  className={styles.table}>
    <table>
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td>B</td>
          <td>C</td>
          <td>D</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};
