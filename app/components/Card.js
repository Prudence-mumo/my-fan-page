import LikeButton from './LikeButton';
import styles from './Card.module.css';

export default function Card({ name, blurb, rating, emoji, image, price }) {
  return (
    <div className={styles.card}>
      {/* Aspect-ratio locked image box */}
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} />
      </div>

      {/* Styled text & spacing layout */}
      <div className={styles.content}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3 className={styles.title}>{emoji} {name}</h3>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', color: '#1a433e', fontSize: '1.05rem' }}>
            {price}
          </span>
        </div>
        
        <p className={styles.description}>{blurb}</p>
        
        <div className={styles.footer}>
          <div style={{ color: '#d4be83', fontSize: '1.1rem', letterSpacing: '2px' }}>
            {'★'.repeat(rating)}
          </div>
          <LikeButton />
        </div>
      </div>
    </div>
  );
}
