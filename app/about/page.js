import Link from 'next/link';

export default function AboutPage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1rem',
      position: 'relative',
     
      backgroundImage: 'url("/Karibu.png")', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '450px',
      backgroundBlendMode: 'multiply',
    }}>
      
      
      <div style={{
        maxWidth: '42rem',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(6px)',
        padding: '2.5rem',
        borderRadius: '1rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        border: '1px solid rgba(226, 232, 240, 0.8)',
        zIndex: 1
      }}>
        
        {/* Title */}
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          color: '#1e293b', 
          marginBottom: '1.5rem',
          letterSpacing: '-0.025em'
        }}>
          About Karibu Kitchen
        </h1>
        
        {/* Content Body */}
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#475569', 
          lineHeight: '1.75', 
          marginBottom: '2rem' 
        }}>
          <span style={{ fontWeight: '600', color: '#0d9488' }}>Karibu</span> means welcome, and 
          that is exactly how we want you to feel the moment you step into our kitchen. 
          Born out of a deep love for rich culinary traditions, Karibu Kitchen brings 
          the authentic taste of Kenyan flavours straight to your table. Every dish we 
          prepare is a celebration of community, heritage, and fresh, locally sourced 
          ingredients. Whether you are craving the comfort of classic staples or exploring 
          new tastes, we invite you to pull up a chair and share a meal with us.
        </p>

        {/* Navigation Action Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/" style={{
            padding: '0.75rem 1.75rem',
            backgroundColor: '#0d9488',
            color: '#ffffff',
            fontWeight: '600',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'all 0.2s'
          }}>
            Our Menu
          </Link>
          
          <Link href="/" style={{
            padding: '0.75rem 1.75rem',
            backgroundColor: '#1e293b',
            color: '#ffffff',
            fontWeight: '600',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'all 0.2s'
          }}>
            Back Home
          </Link>
        </div>

      </div>
    </main>
  );
}
