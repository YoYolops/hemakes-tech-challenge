"use client"
import UserDataRow from "@/components/UserDataRow"
import UsersContext from "@/contexts/users";
import { useContext, useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";

export default function ListPage() {
    const [ displayData, setDisplayData ] = useState([]);
    const Users = useContext(UsersContext);
    
    useEffect(() => {
        setDisplayData(Users.getAll())
    }, [Users, setDisplayData])

    return (
        <div className="overflow-x-auto pb-8">
            <SearchBar setParentFilteredData={setDisplayData}/>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Verified</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className="">{
                    displayData.map((user) => 
                        <UserDataRow key={user.id} {...user} onDelete={() => Users.deleteById(user.id)}/>
                    ) 
                }</tbody>
            </table>
        </div>
    )
}