import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem max(2vw, 20px)',
      maxWidth: '1200px',
      margin: '0 auto',
      borderBottom: '1px solid #e9eceb',
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }}>
      {/* Interactive Brand Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Image 
          src="/Karibu.png" 
          alt="Karibu Kitchen Logo" 
          width={70} 
          height={70} 
          style={{ borderRadius: '8px', objectFit: 'cover' }}
        />
      </Link>

      {/* Button Style Navigation Links */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{

          fontSize: '0.9rem',
          fontWeight: '600',
          color: '#1a433e',
          textDecoration: 'none',
          padding: '0.6rem 1.3rem',
          borderRadius: '8px',
          backgroundColor: '#e9eceb',
          transition: 'all 0.2s ease',
          letterSpacing: '0.5px'
        }}>
          Our Menu
        </Link>
        <Link href="/about" style={{
          fontSize: '0.9rem',
          fontWeight: '600',
          color: '#ffffff',
          textDecoration: 'none',
          padding: '0.6rem 1.3rem',
          borderRadius: '8px',
          backgroundColor: '#1a433e', /* Matches your beautiful brand green */
          transition: 'all 0.2s ease',
          letterSpacing: '0.5px'
        }}>
          Our Story
        </Link>
      </div>
    </nav>
  );
}
