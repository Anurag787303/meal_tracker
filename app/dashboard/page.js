import { getUserDetails, isAuthenticated } from "@/lib/actions"
import { redirect } from "next/navigation"
import style from './style.module.css'

const Dashboard = async () => {
    const isAuth = await isAuthenticated()

    if (!isAuth) redirect('/login')

    const data = await getUserDetails()

    if (data.error) {
        return <div>{data.error}</div>
    }

    return (
        <div className={style.dashboardContainer_light}>
            <div className={style.header_light}>
                <h1>DishDiary</h1>
                <span>
                    <p>Items</p>
                    <p>Stats</p>
                    <p>Profile</p>
                </span>
            </div>
            <div className={style.dashboardBody_light}>
                <div className={style.dashboardLeft_light}>
                    <div className={style.leftHeader_light}>
                        <h1>Schedule</h1>
                    </div>
                    <div className={style.leftBody_light}>

                    </div>
                </div>
                <div className={style.dashboardRight_light}>
                    <div className={style.rightHeader_light}>
                        <h1>Content</h1>
                    </div>
                    <div className={style.rightBody_light}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard