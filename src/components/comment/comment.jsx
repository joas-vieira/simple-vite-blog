import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../avatar/avatar';

import PropTypes from 'prop-types';

import styles from './comment.module.css';

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/v2/D4D03AQHKK-0oLFhn8g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678415489082?e=1744848000&v=beta&t=tUlOO1m2MstZrVbEGWRPxANVDbWMGXYZO8KQYCkbt9w" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Joás Vieira</strong>
              <time title='12 de Fevereiro ás 20:37h' dateTime="2025-02-12 19:37:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
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