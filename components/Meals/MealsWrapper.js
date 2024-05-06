"use client"

import { useState } from 'react'
import Meals from './Meals'

const MealsWrapper = () => {
    const [formVisibility, setFormVisibility] = useState(false)

    return (
        <>
            <span>
                <p onClick={() => setFormVisibility(!formVisibility)}>Items</p>
                <p>Stats</p>
                <p>Profile</p>
            </span>
            <Meals visibility={formVisibility} setVisibility={setFormVisibility} />
        </>
    )
}

export default MealsWrapper