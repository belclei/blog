import styles from './styles.module.scss'

interface VideoProps {
  video: string
  title: string
}
export function Video(props: VideoProps) {
  return (
    <div className={styles.container}>
      <iframe
        src={`https://www.youtube.com/embed/${props.video}`}
        title={props.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
