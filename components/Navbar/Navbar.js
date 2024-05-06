import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from '@/assets/logo_op.png'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={styles.navDiv_light}>
            <h1>
                DishDiary
            </h1>

            {/* <span className={styles.navLinks_light}>
                <button>
                    Items
                </button>
                <button>
                    Stats
                </button>
            </span> */}

            <span className={styles.navButtons_light}>
                <Link href='/login'>
                    <button>
                        Login
                    </button>
                </Link>
                <Link href='/signup'>
                    <button>
                        Signup
                    </button>
                </Link>
            </span>
        </div>
    )
}

export default Navbar