import styles from './style.module.css'
import Link from 'next/link'
import { loginUser } from '@/lib/actions'

const LoginForm = () => {
    return (
        <div className={styles.formOutDiv_light}>
            <div className={styles.formDiv_light}>
                <h1>Login</h1>
                <form className={styles.form_light} action={loginUser}>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" id="email" name="email" />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" name="password" />
                    </p>
                    <button type="submit">Login</button>
                    <div className={styles.bottomDiv_light}>
                        <p>Don't have an account? <Link href="/signup">Signup</Link></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginForm