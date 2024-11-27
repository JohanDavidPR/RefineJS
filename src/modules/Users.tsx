import React from "react";
import { Refine } from "@refinedev/core";
import { Space, TableColumnProps, } from "antd";

import { UserProvider } from "../services/UserProvider";
import { PATH_USER } from "../utils/Constans";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { AntTable } from "../components/ant-table/AntTable";
import { IUser } from "../models/IUser";

export const Users: React.FC = () => {
    const columns: TableColumnProps<IUser>[] = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            width: 100,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: 'Action',
            width: 150,
            fixed: 'right',
            render: () => (
              <Space>
                <EyeOutlined />
                <EditOutlined />
                <DeleteOutlined />
              </Space>
            ),
          },
    ]
    return (
        <Refine dataProvider={UserProvider(PATH_USER)}>
            <AntTable<IUser> resource="Usuarios" columns={columns} />
        </Refine>
    );
}