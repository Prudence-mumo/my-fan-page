// app/page.js
import { items } from "./data"; // Change to "./app/data" if you didn't move it earlier
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero 
        title="😋 My Favorite Food Choices"
        tagline="If given an ultimatum to eat only one thing for my entire lifetime, these are the foods I would choose."
      />
      <CardGrid items={items} />
    </main>
  );
}

