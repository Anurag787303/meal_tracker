import styles from './style.module.css'
import Image from 'next/image';
import heroImage from '@/assets/hero.png'
import sideImage from '@/assets/logo.png'

export default function Home() {
  return (
    <div className={styles.homepageDiv_light}>
      <div className={styles.heroimageDiv_light}>
        <Image src={heroImage} />
      </div>
      <div className={styles.infoDiv_light}>
        <div className={styles.sideImageDiv_light}>
          <Image src={sideImage} />
        </div>
        <div className={styles.infoContent_light}>
          <h1>Fuel Your Journey: Your Personalized Food Tracker</h1>
          <span>
            <p>Elevate Your Health with Every Bite. Seamlessly log your daily meals to master your nutrition, while effortlessly planning your future feasts. Take control of your wellness journey with precision and ease.</p>
            <button>
              Get Started
            </button>
          </span>

        </div>
      </div>
    </div>
  );
}
