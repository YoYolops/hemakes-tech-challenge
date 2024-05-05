import UsersContext from "@/contexts/users";
import { useContext, useRef, useEffect } from "react";
import { isKeyPressEventAlphaNumeric } from "@/lib/utils";

export default function SearchBar({ setParentFilteredData }) {
    const inputRef = useRef();
    const Users = useContext(UsersContext);

    useEffect(() => {
        // Focus on search bar when key is pressed
        function onAlphaNumericKeyPressEvent(event) {
            if(
                !(inputRef.current === document.activeElement)&&
                isKeyPressEventAlphaNumeric(event)
            ) {
                inputRef.current.focus()
            }
        }
        window.addEventListener("keydown", onAlphaNumericKeyPressEvent)
        return () => { window.removeEventListener("keydown", onAlphaNumericKeyPressEvent) }
    }, [])

    function handleSearch(e) {
        function searchUserForInput(user, input) {
            for(const key in user) {
                if(String(user[key]).toLowerCase().search(input.toLowerCase()) > -1) {
                    return true;
                }
            }
            return false;
        }

        const input = e.target.value;
        const filteredData = Users
            .getAll()
            .filter((user) => searchUserForInput(user, input));

        setParentFilteredData(filteredData);
    }

    return (
        <search>
            <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="input input-bordered input-primary w-full focus:outline-none"
                onChange={handleSearch}
            />
        </search>
    )
}