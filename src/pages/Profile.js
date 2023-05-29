import { useContext } from "react"
import { ChangeProfile } from "../components/ChangeProfile"
import { AppContext } from "../App"

export const Profile = (props) => {
    const {username} = useContext(AppContext);
    return (
        <div> 
            Profile : {username} 
            <ChangeProfile />
        </div>
    )
}