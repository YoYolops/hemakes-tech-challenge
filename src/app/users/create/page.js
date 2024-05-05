"use client"
import { useRouter } from 'next/navigation';
import UsersContext from "@/contexts/users";
import { useContext, useState } from "react";
import UserDataForm from "@/components/UserDataForm";

export default function CreatePage() {
    const router = useRouter();
    const Users = useContext(UsersContext);
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
        setNewUserData(prev => ({ ...prev, verified: !prev.verified }))
    }

    function handleUserCreation(e) {
        e.preventDefault();
        Users.add(newUserData);
        router.push("/users/list");
    }

    return (
        <UserDataForm
            data={newUserData}
            handleSetData={handleSetUpdateData}
            toggleVerified={toggleVerified}
            submitAction={handleUserCreation}
        >
            <a href="/users/list" className="btn btn-outline btn-warning w-[100px]">Cancel</a>
            <input type="submit" className="btn btn-outline btn-success w-[100px]" value="Save"/>
        </UserDataForm>
    )
}