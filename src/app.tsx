import styles from './app.module.css';
import { Header } from "./components/header/header";
import { Post } from "./components/post/post";
import { Sidebar } from "./components/sidebar/sidebar";
import { PostType } from "./contracts/post";
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/joas-vieira.png",
      name: "Joás Vieira",
      role: "Software Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2025-02-16 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/RomuloCVieira.png",
      name: "Rômulo Vieira",
      role: "Software Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date('2025-02-10 20:00:00')
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </>
  )
}