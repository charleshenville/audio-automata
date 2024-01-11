import styles from './assets/home.module.css';
import { RouterLink, RouterView } from 'vue-router';

function App() {

  return (
    <div class={styles.main}>
      <RouterView />
    </div>
  );

}

export default App;