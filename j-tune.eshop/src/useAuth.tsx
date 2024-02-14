import { useAuth } from "./auth/Auth";

const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

export default useAuth;