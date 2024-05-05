"use client"
import UserDataRow from "@/components/UserDataRow"
import UsersContext from "@/contexts/users";
import { useContext } from "react";

export default function ListPage() {
    const Users = useContext(UsersContext);
    
    return (
        <div className="overflow-x-auto pb-8">
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
                    Users.getAll().map((user) => 
                        <UserDataRow key={user.id} {...user} onDelete={() => Users.deleteById(user.id)}/>
                    ) 
                }</tbody>
            </table>
        </div>
    )
}