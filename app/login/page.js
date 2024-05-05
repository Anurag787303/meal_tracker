import styles from './style.module.css'
import Link from 'next/link'
import { loginUser, isAuthenticated } from '@/lib/actions'
import { redirect } from 'next/navigation'

const LoginForm = async () => {
    const isAuth = await isAuthenticated()

    if (isAuth) redirect('/dashboard')

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