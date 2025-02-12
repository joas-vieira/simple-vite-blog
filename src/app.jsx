import { Header } from "./components/header/header";

import styles from './app.module.css'

import './global.css'
import { Sidebar } from "./components/sidebar/sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          Posts
        </main>
      </div>
    </>
  )
}