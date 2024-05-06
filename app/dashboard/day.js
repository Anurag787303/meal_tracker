"use client"
import { useState } from 'react'
import styles from './day.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createDay } from '@/lib/actions';

const DayForm = ({ visibility, setVisibility }) => {
    const [startDate, setStartDate] = useState(new Date())

    return (
        <div className={styles.formContainer_light} style={{ display: (visibility ? "flex" : "none") }}>
            <div className={styles.formWrapper_light}>
                <form className={styles.form_light} action={createDay}>
                    <h1>Schedule a Meal Plan</h1>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Name" id="name" name="name" />
                    </div>
                    <div style={{ display: "none" }}>
                        <label htmlFor="date">Name</label>
                        <input type="text" placeholder="Date" id="date" name="date" value={startDate} />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className={styles.datePicker} />
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

export default DayForm