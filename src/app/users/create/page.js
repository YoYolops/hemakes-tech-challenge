"use client"
import { useState } from "react";
import UserDataForm from "@/components/UserDataForm";


export default function CreatePage() {
    const [ newUserData, setNewUserData ] = useState({
        name: "",
        image: "",
        company: "",
        role: "",
        verified: false,
        status: ""
    })

    function handleSetUpdateData(key, value) {
        setNewUserData(prev => {
            prev[key] = value;
            return {...prev};
        })
    }

    function toggleVerified() {
        setUpdateData(prev => ({ ...prev, verified: !prev.verified }))
    }

    function handleUserCreation(e) {
        e.preventDefault();

    }

    return (
        <UserDataForm
            data={newUserData}
            handleSetData={handleSetUpdateData}
            toggleVerified={toggleVerified}
        >
            <a href="/users/list" className="btn btn-outline btn-warning w-[100px]">Cancel</a>
            <input type="submit" className="btn btn-outline btn-success w-[100px]" value="Save"/>
        </UserDataForm>
    )
}