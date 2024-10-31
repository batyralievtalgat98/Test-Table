"use client";
import { PrimaryButton } from "@/shared/PrimaryButton/PrimaryButton";
import styles from "./CustomTable.module.scss";
import { ActionProps, TableColumn } from "./types";
interface CustomTableProps<T> {
  data: T[];
  columns: TableColumn[];
  actionProps: ActionProps<T>;
}
export const CustomTable = <T,>({
    data,
    columns,
    actionProps,
  }: CustomTableProps<T>) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.customTable}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.dataIndex}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((dataRow,rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => {
                if (column.render) {
                    return  <td key={column.dataIndex}>{column.render(dataRow)}</td>
                }
                if (column.dataIndex === "actions") {
                  return (
                    <td key={column.dataIndex}>
                      {column?.methods?.map((method) => {
                        if (method.name === "editRow") {
                          return (
                            <div key={method.name}>
                              <PrimaryButton
                                onClick={() => actionProps.onEditRow(dataRow)}
                              >
                                {method.title}
                              </PrimaryButton>
                            </div>
                          );
                        }
                      })}
                    </td>
                  );
                }
                if (column.dataIndex.includes(".")) {
                const [firstKey, secondKey] = column.dataIndex.split(".") as (keyof T)[]
                const value = (dataRow[firstKey] as never)?.[secondKey];
                  return <td key={column.dataIndex}>{value}</td>;
                }


                const cellValue = dataRow[column.dataIndex as keyof T];
                return (
                  <td key={column.dataIndex}>
                   {String(cellValue)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

