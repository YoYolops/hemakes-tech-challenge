export default function UserDataRow({
    id, name, company, role, verified, status, onDelete
}) {
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {company}
            </td>
            <td>{role}</td>
            <td>{verified ? "Yes" : "No"}</td>
            <td>{status}</td>
            <th>
            <details className="dropdown">
            <summary className="m-1 btn">OOO</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a href={`/users/edit/${id}`}>Edit</a></li>
                    <li onClick={onDelete}><a>Delete</a></li>
                </ul>
            </details>
            </th>
        </tr>
    )
}