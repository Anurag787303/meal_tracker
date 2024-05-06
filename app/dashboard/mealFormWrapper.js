"use client"

import { useState } from 'react'
import MealForm from './meal'
import plusIcon from "@/assets/plus.svg"
import Image from 'next/image'

const MealFormWrapper = () => {
    const [formVisibility, setFormVisibility] = useState(false)

    return (
        <>
            <span onClick={() => setFormVisibility(!formVisibility)}>
                <div>
                    <Image src={plusIcon} />
                </div>
            </span>
            <MealForm visibility={formVisibility} setVisibility={setFormVisibility} />
        </>
    )
}

export default MealFormWrapper