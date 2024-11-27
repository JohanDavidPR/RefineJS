import React from "react";
import { BaseRecord } from "@refinedev/core";
import { useTable } from "@refinedev/antd";
import { Table, TableColumnProps } from "antd";

export const AntTable = <T extends BaseRecord>({
  resource,
  columns,
}: AntTableProps<T>) => {
  const { tableProps } = useTable<T>({ resource });

  return (
    <div>
      <h2>{resource}</h2>
      <Table {...tableProps} rowKey="id">
        {columns.map((col, index) => {
          const { key, ...columnProps } = col;
          return <Table.Column key={key || index} {...columnProps} />;
        })}
      </Table>
    </div>
  );
};

type AntTableProps<T> = {
  resource: string;
  columns: TableColumnProps<T>[];
};
