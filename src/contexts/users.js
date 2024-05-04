"use client"
import { createContext, useEffect, useState } from "react";
import { getLocalStorageData, setLocalStorageData } from "@/lib/localStorage";
import { mockUsersData } from "@/lib/factories";

const UsersContext = createContext({ });

export function UsersContextProvider({ children }) {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        setData([...mockUsersData(), ...getLocalStorageData()])
    }, [])

    useEffect(() => {
        setLocalStorageData(data)
    }, [data])

    function getAll() {
        return data;
    }

    function deleteById(deletionId) {
        setData((prevUserData) => 
            prevUserData.filter((user) => user.id !== deletionId)
        )
    }

    function add(newUser) {
        setData((prevUserData) => [...prevUserData, newUser])
    }

    return (
        <UsersContext.Provider value={{
            getAll,
            deleteById,
            add
        }}>
            { children }
        </UsersContext.Provider>
    )
}

export default UsersContext;