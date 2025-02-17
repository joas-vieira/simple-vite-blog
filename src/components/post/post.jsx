import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../avatar/avatar';
import { Comment } from '../comment/comment';

import PropTypes from 'prop-types';

import styles from './post.module.css';

Post.propTypes = {
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['paragraph', 'link']).isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  })).isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
};

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Muito bom Devon, parabéns!! 👏👏']);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment (event) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.name}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>Publicado {publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>
          }

          if (line.type === 'link') {
            return <p key={index}>{line.content}</p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          onChange={(event) => setNewComment(event.target.value)}
          value={newComment}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment key={index} content={comment}/>
        ))}
      </div>
    </article>
  )
}