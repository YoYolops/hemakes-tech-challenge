"use client"
import UserDataRow from "@/components/UserDataRow"
import UsersContext from "@/contexts/users";
import { useContext } from "react";

export default function ListPage() {
    const Users = useContext(UsersContext);

    return (
        <div className="overflow-x-auto">
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
                <tbody>
                    { Users.getAll().map((user) => <UserDataRow key={user.id} {...user}/>) }
                </tbody>
            </table>
        </div>
    )
}