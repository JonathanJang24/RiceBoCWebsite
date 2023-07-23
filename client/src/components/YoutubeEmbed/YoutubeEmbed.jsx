import styles from './youtubeembed.module.css'

const YoutubeEmbed = ({embedId}) => {

    return (
        <div className={styles.videoResponsive}>
          <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded Home Page Video"
          />
      </div>
    )
}

export default YoutubeEmbed