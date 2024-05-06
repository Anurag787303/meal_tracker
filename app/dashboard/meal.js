"use client"
import styles from './day.module.css'
import "react-datepicker/dist/react-datepicker.css";
import { createDay } from '@/lib/actions';

const MealForm = ({ visibility, setVisibility }) => {
    return (
        <div className={styles.formContainer_light} style={{ display: (visibility ? "flex" : "none") }}>
            <div className={styles.formWrapper_light}>
                <form className={styles.form_light} action={createDay}>
                    <h1>Schedule a Meal Plan</h1>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Name" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input type="text" placeholder="Time" id="time" name="time" />
                    </div>
                    <div>
                        <label htmlFor="time">Meals</label>
                        <span className={styles.addMealButton_light}>
                            <button>Add Meals</button>
                        </span>
                    </div>
                    <div className={styles.formButtons_light}>
                        <button type="button" onClick={() => setVisibility(false)}>Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default MealForm