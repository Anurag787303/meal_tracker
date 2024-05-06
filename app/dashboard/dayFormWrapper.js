"use client"

import { useState } from 'react'
import DayForm from './day'
import plusIcon from "@/assets/plus.svg"
import Image from 'next/image'

const DayFormWrapper = () => {
    const [formVisibility, setFormVisibility] = useState(false)

    return (
        <>
            <span onClick={() => setFormVisibility(!formVisibility)}>
                <div>
                    <Image src={plusIcon} />
                </div>
            </span>
            <DayForm visibility={formVisibility} setVisibility={setFormVisibility} />
        </>
    )
}

export default DayFormWrapper