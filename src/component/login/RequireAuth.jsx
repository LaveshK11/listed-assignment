import { Details } from "../login/DetailsProvider"
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
    const { userData } = Details();
    if (userData.email === '') {
        return <Navigate to="/" replace={true} />
    }

    return children
}
