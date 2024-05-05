"use client"
import { createContext, useEffect, useState } from "react";
import { getLocalStorageData, setLocalStorageData } from "@/lib/localStorage";
import { mockUsersData } from "@/lib/factories";
import { v4 as uuidv4 } from 'uuid';

const UsersContext = createContext({});

export function UsersContextProvider({ children }) {
    const [ isLoadingData, setIsLoadingData ] = useState(true);
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const localStorageData = getLocalStorageData();
        setData(localStorageData.length ? localStorageData : mockUsersData())
        setIsLoadingData(false)
    }, [])

    useEffect(() => {
        if(!isLoadingData) setLocalStorageData(data);
    }, [data, isLoadingData])


    function getAll() {
        return data;
    }

    function deleteById(deletionId) {
        setData((prevUserData) => 
            prevUserData.filter((user) => user.id !== deletionId)
        )
    }

    function add(newUser) {
        setData((prevUserData) => [...prevUserData, {...newUser, id: uuidv4()}])
    }

    function updateUser(newUserData) {
        setData((prevUserData) => prevUserData.map((user) => {
            if(user.id === newUserData.id) return {
                ...user,
                ...newUserData
            }
            return user;
        }))
    }

    function findById(id) {
        for(const user of data) {
            if(user.id === id) return user;
        }
    }

    return (
        <UsersContext.Provider value={{
            getAll,
            deleteById,
            add,
            updateUser,
            findById
        }}>
            { children }
        </UsersContext.Provider>
    )
}

export default UsersContext;