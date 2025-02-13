import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { Post } from "./components/post/post";

import styles from './app.module.css'

import './global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}