import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Wifi, Car, Coffee, Utensils, Droplets, Sparkles, Users, Bed, Home, ChevronDown, Menu, X, Star, ExternalLink, Instagram, Map, TreePine, Landmark, Waves } from 'lucide-react';

// Language translations
const translations = {
  tr: {
    nav: { rooms: 'Odalar', services: 'Hizmetler', gallery: 'Galeri', location: 'Konum', reviews: 'Yorumlar', contact: 'İletişim' },
    hero: {
      slogans: [
        "Ege'nin kalbinde huzurlu konaklama",
        "Doğayla iç içe, konforla baş başa",
        "Tarihin ve doğanın buluştuğu nokta"
      ],
      cta: 'Rezervasyon İçin Arayın'
    },
    rooms: {
      title: 'Odalarımız',
      subtitle: '44 konforlu oda ile hizmetinizdeyiz',
      types: [
        { name: 'Standart Oda', desc: 'Queen yatak, 1-2 kişilik', count: '30 Oda' },
        { name: 'Twin Oda', desc: '2 ayrı tek kişilik yatak', count: '3 Oda' },
        { name: 'Triple Oda', desc: '1 büyük + 1 tek yatak, 3 kişilik', count: '7 Oda' },
        { name: 'Aile Odası', desc: 'Geniş alan, 4-5 kişilik', count: '4 Oda' }
      ]
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Konforunuz için her şey düşünüldü',
      items: [
        { title: 'Ücretsiz Kahvaltı', desc: '07:30 - 11:00 arası açık büfe' },
        { title: 'Restaurant', desc: 'Lezzetli yöresel yemekler' },
        { title: 'Güvenli Otopark', desc: 'Ücretsiz kapalı otopark' },
        { title: 'Engelli Erişimi', desc: 'Engelli rampası mevcut' },
        { title: 'Sınırsız WiFi', desc: 'Tüm alanlarda ücretsiz internet' },
        { title: 'Günlük Temizlik', desc: 'Her gün oda ve çarşaf değişimi' },
        { title: 'Lobi Servisi', desc: 'Çay ve içecek ikramı' },
        { title: 'Oda Servisi', desc: 'Odalarda su ikramı' }
      ]
    },
    location: {
      title: 'Keşfedilecek Yerler',
      subtitle: 'Tarihi ve doğal güzelliklere yakın konum',
      places: [
        { name: 'Bozüyük Köyü', distance: '5 km', type: 'nature' },
        { name: 'Osman Hamdi Bey Konağı', distance: '6 km', type: 'history' },
        { name: 'Stratoneika Antik Kenti', distance: '10 km', type: 'history' },
        { name: 'Belen Kahvesi', distance: '12 km', type: 'nature' },
        { name: 'Lagina Hekate Kutsal Alanı', distance: '15 km', type: 'history' },
        { name: 'Küldağı Göleti', distance: '15 km', type: 'nature' },
        { name: 'Akyaka', distance: '50 km', type: 'coast' },
        { name: 'Bodrum', distance: '80 km', type: 'coast' },
        { name: 'Marmaris', distance: '85 km', type: 'coast' }
      ]
    },
    reviews: {
      title: 'Misafir Yorumları',
      subtitle: 'Google değerlendirmelerimiz'
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Rezervasyon ve bilgi için bizi arayın',
      address: 'Adres',
      phone: 'Telefon',
      email: 'E-posta',
      hours: 'Giriş / Çıkış Saatleri',
      checkin: 'Giriş: 13:00 - 14:00',
      checkout: 'Çıkış: 11:00 - 12:00',
      callNow: 'Hemen Arayın'
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      phone: 'Rezervasyon Hattı'
    },
    gallery: {
      title: 'Galeri',
      subtitle: 'Otelimizden kareler'
    }
  },
  en: {
    nav: { rooms: 'Rooms', services: 'Services', gallery: 'Gallery', location: 'Location', reviews: 'Reviews', contact: 'Contact' },
    hero: {
      slogans: [
        "Peaceful accommodation in the heart of Aegean",
        "In harmony with nature, in comfort",
        "Where history meets nature"
      ],
      cta: 'Call for Reservation'
    },
    rooms: {
      title: 'Our Rooms',
      subtitle: '44 comfortable rooms at your service',
      types: [
        { name: 'Standard Room', desc: 'Queen bed, 1-2 persons', count: '30 Rooms' },
        { name: 'Twin Room', desc: '2 separate single beds', count: '3 Rooms' },
        { name: 'Triple Room', desc: '1 double + 1 single bed, 3 persons', count: '7 Rooms' },
        { name: 'Family Room', desc: 'Spacious, 4-5 persons', count: '4 Rooms' }
      ]
    },
    services: {
      title: 'Our Services',
      subtitle: 'Everything for your comfort',
      items: [
        { title: 'Free Breakfast', desc: 'Open buffet 07:30 - 11:00' },
        { title: 'Restaurant', desc: 'Delicious local cuisine' },
        { title: 'Secure Parking', desc: 'Free covered parking' },
        { title: 'Accessibility', desc: 'Wheelchair ramp available' },
        { title: 'Unlimited WiFi', desc: 'Free internet in all areas' },
        { title: 'Daily Cleaning', desc: 'Daily room & linen change' },
        { title: 'Lobby Service', desc: 'Tea and beverage service' },
        { title: 'Room Service', desc: 'Complimentary water in rooms' }
      ]
    },
    location: {
      title: 'Places to Explore',
      subtitle: 'Close to historical and natural beauties',
      places: [
        { name: 'Bozüyük Village', distance: '5 km', type: 'nature' },
        { name: 'Osman Hamdi Bey Mansion', distance: '6 km', type: 'history' },
        { name: 'Stratonicea Ancient City', distance: '10 km', type: 'history' },
        { name: 'Belen Coffeehouse', distance: '12 km', type: 'nature' },
        { name: 'Lagina Hekate Sanctuary', distance: '15 km', type: 'history' },
        { name: 'Küldağı Lake', distance: '15 km', type: 'nature' },
        { name: 'Akyaka', distance: '50 km', type: 'coast' },
        { name: 'Bodrum', distance: '80 km', type: 'coast' },
        { name: 'Marmaris', distance: '85 km', type: 'coast' }
      ]
    },
    reviews: {
      title: 'Guest Reviews',
      subtitle: 'Our Google reviews'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Call us for reservation and information',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Check-in / Check-out',
      checkin: 'Check-in: 13:00 - 14:00',
      checkout: 'Check-out: 11:00 - 12:00',
      callNow: 'Call Now'
    },
    footer: {
      rights: 'All rights reserved.',
      phone: 'Reservation Line'
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Snapshots from our hotel'
    }
  }
};

const reviewsData = [
  { name: 'Mehmet Y.', rating: 5, text: 'Temiz ve konforlu odalar. Personel çok ilgili. Kahvaltı harikaydı!', date: '2 hafta önce' },
  { name: 'Ayşe K.', rating: 4, text: 'Fiyat/performans açısından çok iyi. Antik kentlere yakınlığı büyük avantaj.', date: '1 ay önce' },
  { name: 'John D.', rating: 5, text: 'Great location for exploring ancient ruins. Clean rooms and friendly staff.', date: '3 weeks ago' },
  { name: 'Fatma S.', rating: 4, text: 'Aile olarak kaldık, çocuklar için güvenli bir ortam. Tekrar geleceğiz.', date: '2 ay önce' }
];

// Service icons mapping
const serviceIcons = [Coffee, Utensils, Car, Users, Wifi, Sparkles, Coffee, Droplets];
const roomIcons = [Bed, Bed, Users, Home];

export default function HurturOtel() {
  const [lang, setLang] = useState('tr');
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePlace, setActivePlace] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  const t = translations[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const getTypeIcon = (type) => {
    if (type === 'history') return <Landmark size={20} />;
    if (type === 'coast') return <Waves size={20} />;
    return <TreePine size={20} />;
  };

  const getTypeColor = (type) => {
    if (type === 'history') return '#c9a227';
    if (type === 'coast') return '#2980b9';
    return '#27ae60';
  };

  return (
    <div className="hurtur-container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="logo-container">
            <img 
              src="/images/logo.png" 
              alt="Hürtur Otel" 
              className="logo-image"
            />
          </div>
          
          <div className="nav-links">
            {Object.entries(t.nav).map(([key, value]) => (
              <button key={key} onClick={() => scrollToSection(key)} className="nav-link">
                {value}
              </button>
            ))}
          </div>

          <div className="nav-right">
            <div className="lang-switch">
              <button 
                onClick={() => setLang('tr')} 
                className={`lang-btn ${lang === 'tr' ? 'active' : ''}`}
              >
                TR
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              >
                EN
              </button>
            </div>
            
            <a href="tel:+905331350103" className="nav-phone">
              <Phone size={16} />
              <span>0533 135 01 03</span>
            </a>

            <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {Object.entries(t.nav).map(([key, value]) => (
              <button key={key} onClick={() => scrollToSection(key)} className="mobile-nav-link">
                {value}
              </button>
            ))}
            <a href="tel:+905331350103" className="mobile-phone">
              <Phone size={18} />
              <span>0533 135 01 03</span>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-title-container">
            <h1 className="hero-title">HÜRTUR</h1>
            <span className="hero-subtitle">OTEL</span>
            <div className="hero-location">Yatağan, Muğla</div>
          </div>
          <div className="slogan-container">
            {t.hero.slogans.map((slogan, index) => (
              <p 
                key={index} 
                className={`slogan ${currentSlogan === index ? 'active' : ''}`}
              >
                {slogan}
              </p>
            ))}
          </div>
          <div className="slogan-dots">
            {[0, 1, 2].map((i) => (
              <span key={i} className={`dot ${currentSlogan === i ? 'active' : ''}`} />
            ))}
          </div>
          <a href="tel:+905331350103" className="cta-button">
            <Phone size={20} />
            <span>{t.hero.cta}</span>
          </a>
          <p className="hero-phone">0533 135 01 03</p>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={32} className="scroll-icon" />
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="section rooms-section">
        <div className="section-content">
          <h2 className="section-title">{t.rooms.title}</h2>
          <p className="section-subtitle">{t.rooms.subtitle}</p>
          <div className="rooms-grid">
            {t.rooms.types.map((room, index) => {
              const IconComponent = roomIcons[index];
              const roomImages = [
                '/images/rooms/standard.jpg',
                '/images/rooms/twin.jpg', 
                '/images/rooms/triple.jpg',
                '/images/rooms/family.jpg'
              ];
              return (
                <div 
                  key={index} 
                  className={`room-card ${visibleSections.rooms ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="room-image-container">
                    <img 
                      src={roomImages[index]}
                      alt={room.name}
                      className="room-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="room-image-placeholder">
                      <IconComponent size={48} />
                    </div>
                  </div>
                  <div className="room-info">
                    <h3 className="room-name">{room.name}</h3>
                    <p className="room-desc">{room.desc}</p>
                    <span className="room-count">{room.count}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="section-content">
          <h2 className="section-title light">{t.services.title}</h2>
          <p className="section-subtitle light">{t.services.subtitle}</p>
          <div className="services-grid">
            {t.services.items.map((service, index) => {
              const IconComponent = serviceIcons[index];
              return (
                <div 
                  key={index} 
                  className={`service-card ${visibleSections.services ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="service-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery-section">
        <div className="section-content">
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-subtitle">{t.gallery.subtitle}</p>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className={`gallery-item ${visibleSections.gallery ? 'visible' : ''}`}>
                <img 
                  src={`/images/gallery/gallery-${num}.jpg`}
                  alt={`Hürtur Otel - ${num}`}
                  className="gallery-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="gallery-placeholder">
                  <span>{lang === 'tr' ? 'Fotoğraf Yüklenecek' : 'Photo Coming Soon'}</span>
                </div>
              </div>
            ))}
          </div>
          <a 
            href="https://www.instagram.com/hurturotel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <Instagram size={20} />
            <span>@hurturotel</span>
          </a>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section location-section">
        <div className="section-content">
          <h2 className="section-title light">{t.location.title}</h2>
          <p className="section-subtitle light">{t.location.subtitle}</p>
          
          <div className="location-container">
            <div className="map-visual">
              <div className="hotel-center">
                <div className="hotel-marker">
                  <MapPin size={24} />
                </div>
                <span className="hotel-label">Hürtur Otel</span>
              </div>
              
              {t.location.places.map((place, index) => {
                const angle = (index * 40) - 160;
                const distance = parseInt(place.distance);
                const radius = Math.min(distance * 2.2, 130);
                return (
                  <div
                    key={index}
                    className={`place-line ${activePlace === index ? 'active' : ''}`}
                    style={{
                      transform: `rotate(${angle}deg)`,
                      width: `${radius}px`,
                      backgroundColor: getTypeColor(place.type),
                    }}
                    onMouseEnter={() => setActivePlace(index)}
                    onMouseLeave={() => setActivePlace(null)}
                  >
                    <span 
                      className="place-point"
                      style={{ borderColor: getTypeColor(place.type) }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="places-list">
              {t.location.places.map((place, index) => (
                <div 
                  key={index}
                  className={`place-item ${activePlace === index ? 'active' : ''}`}
                  style={{ borderLeftColor: getTypeColor(place.type) }}
                  onMouseEnter={() => setActivePlace(index)}
                  onMouseLeave={() => setActivePlace(null)}
                >
                  <span className="place-type-icon" style={{ color: getTypeColor(place.type) }}>
                    {getTypeIcon(place.type)}
                  </span>
                  <div className="place-info">
                    <span className="place-name">{place.name}</span>
                    <span className="place-distance">{place.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="legend">
            <span className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#27ae60' }} />
              {lang === 'tr' ? 'Doğa' : 'Nature'}
            </span>
            <span className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#c9a227' }} />
              {lang === 'tr' ? 'Tarih' : 'History'}
            </span>
            <span className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#2980b9' }} />
              {lang === 'tr' ? 'Sahil' : 'Coast'}
            </span>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section reviews-section">
        <div className="section-content">
          <h2 className="section-title">{t.reviews.title}</h2>
          <p className="section-subtitle">{t.reviews.subtitle}</p>
          
          <div className="google-rating">
            <div className="rating-stars">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={24} fill="#f4b400" color="#f4b400" />
              ))}
              <Star size={24} fill="none" color="#f4b400" style={{ opacity: 0.5 }} />
            </div>
            <span className="rating-score">3.9 / 5</span>
            <span className="rating-count">(460 {lang === 'tr' ? 'yorum' : 'reviews'})</span>
          </div>

          <div className="reviews-grid">
            {reviewsData.map((review, index) => (
              <div 
                key={index} 
                className={`review-card ${visibleSections.reviews ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="review-header">
                  <div className="review-avatar">{review.name[0]}</div>
                  <div className="review-meta">
                    <span className="review-name">{review.name}</span>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#f4b400" color="#f4b400" />
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>

          <a 
            href="https://www.google.com/maps/place/H%C3%BCrtur+Otel/@37.3293288,28.1628047"
            target="_blank"
            rel="noopener noreferrer"
            className="google-link"
          >
            {lang === 'tr' ? 'Google\'da tüm yorumları gör' : 'See all reviews on Google'}
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-content">
          <h2 className="section-title light">{t.contact.title}</h2>
          <p className="section-subtitle light">{t.contact.subtitle}</p>
          
          <a href="tel:+905331350103" className="call-button">
            <Phone size={24} />
            <div>
              <span className="call-label">{t.contact.callNow}</span>
              <span className="call-number">0533 135 01 03</span>
            </div>
          </a>

          <div className="contact-grid">
            <div className="contact-card">
              <MapPin size={28} className="contact-icon" />
              <h3 className="contact-label">{t.contact.address}</h3>
              <p className="contact-value">Bozyaka Mevkii No:44</p>
              <p className="contact-value">48500 Yatağan/Muğla</p>
            </div>
            
            <div className="contact-card">
              <Phone size={28} className="contact-icon" />
              <h3 className="contact-label">{t.contact.phone}</h3>
              <a href="tel:+905331350103" className="contact-link">0533 135 01 03</a>
            </div>
            
            <div className="contact-card">
              <Mail size={28} className="contact-icon" />
              <h3 className="contact-label">{t.contact.email}</h3>
              <a href="mailto:otelhurtur@gmail.com" className="contact-link">otelhurtur@gmail.com</a>
            </div>
            
            <div className="contact-card">
              <Clock size={28} className="contact-icon" />
              <h3 className="contact-label">{t.contact.hours}</h3>
              <p className="contact-value">{t.contact.checkin}</p>
              <p className="contact-value">{t.contact.checkout}</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.instagram.com/hurturotel" target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a href="https://www.google.com/maps/place/H%C3%BCrtur+Otel/@37.3293288,28.1628047" target="_blank" rel="noopener noreferrer" className="social-link">
              <Map size={20} />
              <span>Google Maps</span>
            </a>
          </div>

          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.5!2d28.1628047!3d37.3293288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf1120cb314ebd%3A0xeb486d91f905c4a4!2sH%C3%BCrtur%20Otel!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hürtur Otel Konum"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img src="/images/logo.png" alt="Hürtur Otel" className="footer-logo" />
          <div className="footer-info">
            <p className="footer-phone">
              <span>{t.footer.phone}:</span>
              <a href="tel:+905331350103">0533 135 01 03</a>
            </p>
            <p className="footer-rights">© 2025 Hürtur Otel. {t.footer.rights}</p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .hurtur-container {
          font-family: 'Montserrat', sans-serif;
          background: #fafafa;
          color: #1a1a1a;
          overflow-x: hidden;
        }
        
        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(26, 37, 26, 0.97);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0.6rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
        }
        
        .logo-image {
          height: 50px;
          width: auto;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
        }
        
        .nav-link {
          background: none;
          border: none;
          color: rgba(255,255,255,0.85);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.5px;
        }
        
        .nav-link:hover {
          color: #fff;
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .lang-switch {
          display: flex;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .lang-btn {
          padding: 0.4rem 0.8rem;
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s;
          font-family: 'Montserrat', sans-serif;
        }
        
        .lang-btn.active {
          background: #fff;
          color: #1a251a;
        }
        
        .nav-phone {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(201, 162, 39, 0.9);
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: background 0.3s;
        }
        
        .nav-phone:hover {
          background: rgba(201, 162, 39, 1);
        }
        
        @media (max-width: 768px) {
          .nav-phone {
            display: none;
          }
        }
        
        .menu-btn {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }
        
        @media (max-width: 1024px) {
          .menu-btn {
            display: block;
          }
        }
        
        .mobile-menu {
          display: flex;
          flex-direction: column;
          padding: 1rem 2rem 1.5rem;
          background: rgba(26, 37, 26, 0.98);
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        
        .mobile-nav-link {
          background: none;
          border: none;
          color: rgba(255,255,255,0.9);
          padding: 0.8rem 0;
          font-size: 1rem;
          text-align: left;
          cursor: pointer;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          font-family: 'Montserrat', sans-serif;
        }
        
        .mobile-phone {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
          padding: 0.8rem;
          background: #c9a227;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
        }
        
        /* Hero */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg, #1a251a 0%, #0d130d 100%);
          overflow: hidden;
        }
        
        .hero-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 40%, rgba(39, 174, 96, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 60%, rgba(201, 162, 39, 0.1) 0%, transparent 40%);
        }
        
        .hero-content {
          position: relative;
          text-align: center;
          padding: 2rem;
          z-index: 10;
        }
        
        .hero-title-container {
          margin-bottom: 2rem;
        }
        
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(4rem, 12vw, 8rem);
          font-weight: 700;
          color: #c9a227;
          letter-spacing: 8px;
          margin: 0;
          line-height: 1;
          text-shadow: 0 4px 30px rgba(0,0,0,0.5);
        }
        
        .hero-subtitle {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.2rem, 3vw, 2rem);
          font-weight: 300;
          color: #fff;
          letter-spacing: 12px;
          margin-top: 0.5rem;
          text-transform: uppercase;
        }
        
        .hero-location {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          margin-top: 1rem;
          letter-spacing: 2px;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            letter-spacing: 4px;
          }
          .hero-subtitle {
            letter-spacing: 6px;
          }
        }
        
        .slogan-container {
          position: relative;
          height: 50px;
          margin-bottom: 1.5rem;
        }
        
        .slogan {
          position: absolute;
          width: 100%;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          color: rgba(255,255,255,0.9);
          font-style: italic;
          font-weight: 500;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-in-out;
        }
        
        .slogan.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .slogan-dots {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transition: all 0.3s;
        }
        
        .dot.active {
          background: #c9a227;
          transform: scale(1.2);
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #27ae60 0%, #1e8449 100%);
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(39, 174, 96, 0.3);
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.5px;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(39, 174, 96, 0.4);
        }
        
        .hero-phone {
          margin-top: 1rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: #c9a227;
          letter-spacing: 2px;
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.5);
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        
        /* Sections */
        .section {
          padding: 6rem 2rem;
        }
        
        .section-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 600;
          text-align: center;
          margin-bottom: 0.5rem;
          color: #1a251a;
        }
        
        .section-title.light {
          color: #fff;
        }
        
        .section-subtitle {
          text-align: center;
          font-size: 1rem;
          color: #666;
          margin-bottom: 3rem;
          font-weight: 400;
        }
        
        .section-subtitle.light {
          color: rgba(255,255,255,0.7);
        }
        
        /* Rooms */
        .rooms-section {
          background: #fafafa;
        }
        
        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .room-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          border: 1px solid #eee;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .room-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .room-card:hover {
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          transform: translateY(-4px);
        }
        
        .room-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #1a251a 0%, #2d3a2d 100%);
        }
        
        .room-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .room-image-placeholder {
          display: none;
          position: absolute;
          inset: 0;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a251a 0%, #2d3a2d 100%);
          color: #c9a227;
        }
        
        .room-info {
          padding: 1.5rem;
          text-align: center;
        }
        
        .room-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: #1a251a;
          margin-bottom: 0.5rem;
        }
        
        .room-desc {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .room-count {
          display: inline-block;
          padding: 0.4rem 1.2rem;
          background: #1a251a;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }
        
        /* Services */
        .services-section {
          background: linear-gradient(160deg, #1a251a 0%, #2d3a2d 100%);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.2rem;
        }
        
        .service-card {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.08);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }
        
        .service-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .service-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(201, 162, 39, 0.3);
        }
        
        .service-icon {
          color: #c9a227;
          margin-bottom: 1rem;
        }
        
        .service-title {
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }
        
        .service-desc {
          color: rgba(255,255,255,0.6);
          font-size: 0.85rem;
        }
        
        /* Gallery */
        .gallery-section {
          background: #f5f5f5;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.2rem;
          margin-bottom: 2rem;
        }
        
        .gallery-item {
          aspect-ratio: 4/3;
          border-radius: 8px;
          overflow: hidden;
          background: #e0e0e0;
          opacity: 0;
          transition: opacity 0.5s;
        }
        
        .gallery-item.visible {
          opacity: 1;
        }
        
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        
        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }
        
        .gallery-placeholder {
          display: none;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%);
          color: #888;
          font-size: 0.9rem;
        }
        
        .instagram-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #1a251a;
          text-decoration: none;
          font-weight: 600;
          padding: 0.8rem 1.5rem;
          border: 2px solid #1a251a;
          border-radius: 4px;
          transition: all 0.3s;
        }
        
        .instagram-link:hover {
          background: #1a251a;
          color: #fff;
        }
        
        /* Location */
        .location-section {
          background: linear-gradient(180deg, #1a251a 0%, #263126 100%);
        }
        
        .location-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        @media (max-width: 900px) {
          .location-container {
            grid-template-columns: 1fr;
          }
        }
        
        .map-visual {
          position: relative;
          width: 280px;
          height: 280px;
          margin: 0 auto;
        }
        
        .hotel-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
        }
        
        .hotel-marker {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #c9a227;
          color: #fff;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(201, 162, 39, 0.4);
        }
        
        .hotel-label {
          font-size: 0.75rem;
          color: #fff;
          font-weight: 600;
          margin-top: 0.5rem;
          white-space: nowrap;
        }
        
        .place-line {
          position: absolute;
          top: 50%;
          left: 50%;
          height: 2px;
          transform-origin: left center;
          opacity: 0.4;
          transition: all 0.3s;
          cursor: pointer;
        }
        
        .place-line.active {
          opacity: 1;
          height: 3px;
        }
        
        .place-point {
          position: absolute;
          right: -5px;
          top: -4px;
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 50%;
          border: 2px solid;
        }
        
        .places-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        
        .place-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.7rem 1rem;
          background: rgba(255,255,255,0.03);
          border-radius: 6px;
          border-left: 3px solid;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .place-item.active,
        .place-item:hover {
          background: rgba(255,255,255,0.08);
        }
        
        .place-type-icon {
          display: flex;
        }
        
        .place-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
        }
        
        .place-name {
          color: #fff;
          font-size: 0.9rem;
        }
        
        .place-distance {
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .legend {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255,255,255,0.7);
          font-size: 0.85rem;
        }
        
        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        /* Reviews */
        .reviews-section {
          background: #fafafa;
        }
        
        .google-rating {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        
        .rating-stars {
          display: flex;
          gap: 0.2rem;
        }
        
        .rating-score {
          font-size: 1.6rem;
          font-weight: 700;
          color: #1a251a;
        }
        
        .rating-count {
          color: #888;
          font-size: 0.95rem;
        }
        
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
          margin-bottom: 2rem;
        }
        
        .review-card {
          background: #fff;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.04);
          border: 1px solid #eee;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }
        
        .review-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .review-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
        }
        
        .review-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #1a251a;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 1rem;
        }
        
        .review-meta {
          display: flex;
          flex-direction: column;
        }
        
        .review-name {
          font-weight: 600;
          color: #1a251a;
          font-size: 0.95rem;
        }
        
        .review-date {
          font-size: 0.8rem;
          color: #888;
        }
        
        .review-rating {
          display: flex;
          gap: 0.15rem;
          margin-bottom: 0.8rem;
        }
        
        .review-text {
          color: #555;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        
        .google-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #27ae60;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.95rem;
        }
        
        .google-link:hover {
          text-decoration: underline;
        }
        
        /* Contact */
        .contact-section {
          background: linear-gradient(160deg, #263126 0%, #1a251a 100%);
        }
        
        .call-button {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 2.5rem;
          background: linear-gradient(135deg, #c9a227 0%, #a68520 100%);
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          margin-bottom: 3rem;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(201, 162, 39, 0.3);
        }
        
        .call-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(201, 162, 39, 0.4);
        }
        
        .call-label {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.9;
        }
        
        .call-number {
          display: block;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.2rem;
          margin-bottom: 2rem;
        }
        
        .contact-card {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.08);
        }
        
        .contact-icon {
          color: #c9a227;
          margin-bottom: 0.8rem;
        }
        
        .contact-label {
          color: rgba(255,255,255,0.6);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        
        .contact-value {
          color: #fff;
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
        }
        
        .contact-link {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
        }
        
        .contact-link:hover {
          color: #c9a227;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.2rem;
          background: rgba(255,255,255,0.08);
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.3s;
        }
        
        .social-link:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(201, 162, 39, 0.5);
        }
        
        .map-embed {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0,0,0,0.2);
        }
        
        /* Footer */
        .footer {
          background: #0d130d;
          padding: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
        
        .footer-logo {
          height: 40px;
          width: auto;
          opacity: 0.9;
        }
        
        .footer-info {
          text-align: right;
        }
        
        @media (max-width: 600px) {
          .footer-info {
            text-align: center;
          }
        }
        
        .footer-phone {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }
        
        .footer-phone a {
          color: #c9a227;
          text-decoration: none;
          font-weight: 600;
          margin-left: 0.5rem;
        }
        
        .footer-rights {
          color: rgba(255,255,255,0.4);
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  );
}
