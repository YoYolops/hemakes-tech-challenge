"use client"
import UsersContext from "@/contexts/users"
import { useContext, useEffect, useState } from "react"
import UserDataForm from "@/components/UserDataForm";
import { useRouter } from 'next/navigation';

export default function EditPage({ params }) {
    const router = useRouter();
    const Users = useContext(UsersContext)
    const [ updateData, setUpdateData ] = useState({
        id: params.slug,
        name: "",
        image: "",
        company: "",
        role: "",
        verified: false,
        status: ""
    })

    function handleSetUpdateData(key, value) {
        setUpdateData(prev => {
            prev[key] = value;
            return {...prev};
        })
    }

    function toggleVerified() {
        setUpdateData(prev => ({ ...prev, verified: !prev.verified }))
    }

    function handleDelete(e) {
        e.preventDefault();
        Users.deleteById(params.slug)
        router.push("/users/list")
    }

    function handleUpdate(e) {
        e.preventDefault();
        Users.updateUser(updateData);
        router.push("/users/list");
    }

    useEffect(() => {
        const currentData = Users.findById(params.slug);
        if(currentData) setUpdateData({...currentData});
    }, [params.slug, Users])

    return (
        <UserDataForm 
            toggleVerified={toggleVerified}
            updateData={updateData}
            handleSetUpdateData={handleSetUpdateData}
        >
            <a href="/users/list" className="btn btn-outline btn-warning w-[100px]">Cancel</a>
            <button onClick={handleDelete} className="btn btn-outline btn-error w-[100px]">Delete</button>
            <button onClick={handleUpdate} className="btn btn-outline btn-success w-[100px]">Save</button>
        </UserDataForm>
    )
}