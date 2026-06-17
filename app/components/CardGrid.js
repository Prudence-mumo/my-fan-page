// app/components/CardGrid.js
import Link from "next/link";
import Card from "./Card";
import styles from "./CardGrid.module.css";

export default function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Link href={"/faves/" + item.id} key={item.id} style={{ textDecoration: "none", color: "inherit" }}>
          <Card
            name={item.name}
            blurb={item.blurb}
            rating={item.rating}
            emoji={item.emoji}
            image={item.image}
          />
        </Link>
      ))}
    </div>
  );
}
