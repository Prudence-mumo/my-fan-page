export default function Hero({ title, tagline }) {
  return (
    <header style={{
      textAlign: 'center',
      padding: '4rem 1.5rem 3rem 1.5rem',
      backgroundColor: '#fbfbfa', /* Matches your global cream background */
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Main Luxury Title */}
      <h1 style={{ 
        fontFamily: "'Playfair Display', Georgia, serif", 
        fontSize: '3.6rem', 
        fontWeight: '700',
        color: '#1a433e', /* Your gorgeous brand forest green */
        margin: '0 0 1rem 0',
        letterSpacing: '-0.5px'
      }}>
        {title}
      </h1>

      {/* Elegant Accent Divider Line */}
      <div style={{
        width: '50px',
        height: '2px',
        backgroundColor: '#d4be83', /* Your brand gold accent color */
        margin: '0 auto 1.5rem auto'
      }}></div>

      {/* Classy Subtitle Tagline */}
      <p style={{ 
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        fontSize: '1.15rem', 
        color: '#5a6b68', 
        margin: '0',
        letterSpacing: '0.5px',
        fontWeight: '400'
      }}>
        {tagline}
      </p>
    </header>
  );
}
