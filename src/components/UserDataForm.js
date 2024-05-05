import Config from "@/AppConfig"

export default function UserDataForm({
    data,
    handleSetData,
    toggleVerified,
    children,
    submitAction
}) {
    return (
        <form 
            className="flex flex-col items-center justify-center gap-25 p-8"
            onSubmit={submitAction}
        >
            <div className="flex md:flex-row flex-col items-start justify-between gap-8 py-5 md:max-w-[600px] w-[100%]">
                <label className="input input-bordered flex items-center gap-2 w-[100%]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input
                        type="text"
                        className="grow"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => handleSetData("name", e.target.value)}
                        required
                    />
                </label>

                <select className="select select-primary w-full md:max-w-xs w-[100%]" required>
                {data.role === "" && <option key="df-rol" disabled selected>Pick a role</option>}    
                {
                    Config.ROLES_AVAILABLE.map((role) => 
                        <option key={role} value={role} selected={role === data.role}>{role}</option>
                    )
                }</select>
            </div>

            <div className="flex items-center justify-between gap-6 py-5 md:max-w-[600px] w-[100%]">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={data.image} />
                    </div>
                </div>
                <input
                    type="url"
                    placeholder="Image URL"
                    className="input input-bordered w-full max-w-xs flex-grow"
                    value={data.image}
                    onChange={(e) => handleSetData("image", e.target.value)}
                    required
                />
            </div>

            <div className="flex items-center justify-between gap-6 py-5 md:max-w-[600px] w-[100%]">
                <div className="flex md:flex-row flex-col items-center justify-between gap-2 flex-grow">
                    <select 
                        className="select select-primary w-full max-w-xs flex-grow"
                        onChange={e => handleSetData("status", e.target.value)}
                        required
                    >
                    {data.status === "" && <option key="df-stat" disabled selected>Pick a status</option>}    
                    {
                        Config.STATUS_AVAILABLE.map((status) => 
                            <option
                                key={status}
                                value={status}
                                selected={status === data.status}
                            >{status}</option>
                        )
                    }</select>

                    <select 
                        className="select select-primary w-full max-w-xs flex-grow"
                        onChange={e => handleSetData("company", e.target.value)}
                        required
                    >
                    {data.company === "" && <option key="df-comp" disabled selected>Pick a company:</option>}    
                    {
                        Config.COMPANIES_AVAILABLE.map((company) => 
                            <option 
                                key={company}
                                value={company}
                                selected={company === data.company}
                            >{company}</option>
                        )
                    }</select>
                </div>

                <div className="form-control flex-grow">
                    <label className="cursor-pointer label">
                        <span className="label-text">Verified</span>
                        <input 
                            type="checkbox"
                            checked={data.verified}
                            value={data.verified}
                            className="checkbox checkbox-success"
                            onChange={toggleVerified}
                        />
                    </label>
                </div>
            </div>
            {/* Action buttons container */}  
            <div className="flex items-center justify-between w-full max-w-[600px]">
                {children}
            </div>
        </form>
    )
}