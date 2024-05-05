import Link from 'next/link'
import styles from './style.module.css'
import { signupUser } from '@/lib/actions'

const SignupForm = () => {
    return (
        <div className={styles.formOutDiv_light}>
            <div className={styles.formDiv_light}>
                <h1>Signup</h1>
                <form className={styles.form_light} action={signupUser}>
                    <p>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" id="username" name="username" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label >
                        <input type="email" placeholder="Email" id="email" name="email" />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" name="password" />
                    </p>
                    <button type="submit">Signup</button>
                    <div className={styles.bottomDiv_light}>
                        <p>Already have an account? <Link href="/login">Login</Link></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignupForm