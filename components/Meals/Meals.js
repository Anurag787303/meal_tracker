import { useState } from 'react'
import styles from './style.module.css'

const Meals = ({ visibility, setVisibility }) => {
    const [meals, setMeals] = useState([])

    return (
        <div className={styles.outerContainer_light} style={{ display: (visibility ? "flex" : "none") }}>
            <div className={styles.container_light}>
                <div className={styles.selectContainer_light}>
                    <div className={styles.selectContainerHeader_light}>
                        <h1>Select Meals</h1>
                    </div>
                    <div className={styles.selectContainerBody_light}>
                        <div className={styles.mealSearch_light}>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className={styles.meals_light}>

                        </div>
                    </div>
                </div>
                <div className={styles.selectedContainer_light}>
                    <div className={styles.selectedContainerHeader_light}>
                        <h1>Selected Meals</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meals