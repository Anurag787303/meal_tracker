import { getUserDetails, isAuthenticated } from "@/lib/actions"
import { redirect } from "next/navigation"

const Dashboard = async () => {
    const isAuth = await isAuthenticated()

    if (!isAuth) redirect('/login')

    const data = await getUserDetails()

    if (data.error) {
        return <div>{data.error}</div>
    }

    return (
        <div>{data.username}</div>
    )
}

export default Dashboard