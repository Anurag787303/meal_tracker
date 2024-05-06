import { getUserDetails, isAuthenticated, createDay } from "@/lib/actions"
import { redirect } from "next/navigation"
import style from './style.module.css'
import Image from "next/image"
import dustbinIcon from "@/assets/dustbin.svg"
import plusIcon from "@/assets/plus.svg"
import DayFormWrapper from './dayFormWrapper.js'

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
                        <span>
                            <h1>Schedule</h1>
                            <DayFormWrapper />
                        </span>
                    </div>
                    <div className={style.leftBody_light}>

                    </div>
                </div>
                <div className={style.dashboardRight_light}>
                    <div className={style.rightHeader_light}>
                        <span>
                            <h1>Content</h1>
                            <span>
                                <div>
                                    <Image src={plusIcon} />
                                </div>
                            </span>
                        </span>
                    </div>
                    <div className={style.rightBody_light}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard