// import PropTypes from 'prop-types';

// Post.propTypes = {
//   author: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired
// };

import { Comment } from '../comment/comment';

import styles from './post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src="https://media.licdn.com/dms/image/v2/D4D03AQHKK-0oLFhn8g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678415489082?e=1744848000&v=beta&t=tUlOO1m2MstZrVbEGWRPxANVDbWMGXYZO8KQYCkbt9w"
          />
          <div className={styles.authorInfo}>
            <strong>Joás Vieira</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title='12 de Fevereiro ás 20:37h' dateTime="2025-02-12 19:37:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}