import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img 
        className={styles.avatar}
        src="https://media.licdn.com/dms/image/v2/D4D03AQHKK-0oLFhn8g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678415489082?e=1744848000&v=beta&t=tUlOO1m2MstZrVbEGWRPxANVDbWMGXYZO8KQYCkbt9w"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Joás Vieira</strong>
              <time title='12 de Fevereiro ás 20:37h' dateTime="2025-02-12 19:37:00">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}