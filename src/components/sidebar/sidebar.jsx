import { PencilLine } from 'phosphor-react'

import styles from './sidebar.module.css'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src="https://media.licdn.com/dms/image/v2/D4D03AQHKK-0oLFhn8g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678415489082?e=1744848000&v=beta&t=tUlOO1m2MstZrVbEGWRPxANVDbWMGXYZO8KQYCkbt9w" 
        />

        <strong>Joás Vieira</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}