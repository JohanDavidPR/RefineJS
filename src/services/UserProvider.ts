import React from "react";
import { DataProvider } from "@refinedev/core";

export const UserProvider = (url: string): DataProvider => ({
    getOne: async ({ id, resource }) => {
        const response = await fetch(`${url}/${resource}/${id}`);
        const data = await response.json();
  
        return {
            data,
        };
    },

    update: async ({ resource, id, variables }) => {      
        console.log(variables, JSON.stringify(variables))
        const response = await fetch(`${url}/${resource}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(variables),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();

        return {
            data,
        };
    },

    create: async () => {
        throw new Error("Not implemented");
    },

    deleteOne: async () => {
        throw new Error("Not implemented");
    },
    getList: async () => {
        const response = await fetch(`${url}`);
        const data = await response.json();
  
        return {
            data,
        };
    },
    getApiUrl: () => url,
});