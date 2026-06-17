// app/components/Card.js
import Image from "next/image";
import styles from "./Card.module.css";
import LikeButton from "./LikeButton"; 

export default function Card({ name, blurb, rating, emoji, image }) {
  return (
    <article className={styles.card}>
      {image ? (
        <Image 
          src={image} 
          alt={name} 
          width={500} /* Higher base resolution for crisp rendering on large screens */
          height={300} /* Taller bounding box to balance out the wider layout */
          style={{ 
            width: "100%", /* Spans full width of your 320px+ grid column track */
            height: "220px", /* Custom taller crop ratio for a true catalog appearance */
            objectFit: "cover", 
            borderRadius: "12px" /* Smooth corner matching for your cards */
          }} 
        />
      ) : (
        <div className={styles.emoji}>{emoji}</div>
      )}
      <h2>{name}</h2>
      <p style={{ flexGrow: 1 }}>{blurb}</p> {/* Pushes the rating and button cleanly down */}
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
      
      <LikeButton /> 
    </article>
  );
}
