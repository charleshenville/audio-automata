import styles from '../assets/home.module.css'
import HomeTitle from '../components/HomeTitle.js'
import DynamicRiver from '../components/DynamicRiver.js'

function Home() {
  const rstr = '\t-'
  const lstr = '-\t'
  return (
    <div class={styles.homecontainer}>
      <div class={styles.title}>
        <HomeTitle />
        <HomeTitle />
        <HomeTitle />
      </div>
      <div class={styles.rivopt}>
        <div class={styles.options}>
          <div class={styles.option}>
            <div>{lstr}</div>
            <div class={styles.optionsuper}> visualiser </div>
            <div>{rstr}</div>
          </div>
          <div class={styles.option}>
            <div>{lstr}</div>
            <div class={styles.optionsuper}> synthesiser </div>
            <div>{rstr}</div>
          </div>
          <div class={styles.option}>
            <div>{lstr}</div>
            <div class={styles.optionsuper}> generative sampler </div>
            <div>{rstr}</div>
          </div>
        </div>
        <DynamicRiver />
      </div>
    </div>
  )
}

export default Home
