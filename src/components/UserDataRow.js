export default function UserDataRow({
    name, company, role, verified, status
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
                <button className="btn btn-ghost btn-xs">OOO</button>
            </th>
        </tr>
    )
}