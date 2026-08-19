import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook, ChevronDown } from 'lucide-react';

export default function SafariWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: '',
    dates: '',
    groupSize: '',
    message: ''
  });

  const tours = {
    citySightseeing: [
      {
        id: 1,
        name: 'Hargeisa City Tour',
        description: 'Explore Somaliland\'s vibrant capital city, markets, monuments, and local culture',
        duration: '6-8 hours',
        price: '$120-150',
        highlights: ['Local markets', 'Monuments', 'Museums', 'Street food']
      },
      {
        id: 2,
        name: 'Berbera Coastal Experience',
        description: 'Visit Somaliland\'s main port city with beautiful beaches and historic architecture',
        duration: '1-2 days',
        price: '$200-300',
        highlights: ['Beach', 'Port history', 'Local markets', 'Fresh seafood']
      },
      {
        id: 3,
        name: 'Borama & Amoud Heritage',
        description: 'Explore the historic city of Borama and the ancient Amoud ruins',
        duration: '2-3 days',
        price: '$400-600',
        highlights: ['Amoud ruins', 'Historical sites', 'Local culture', 'Traditional crafts']
      },
      {
        id: 4,
        name: 'Burao Historical Tour',
        description: 'Discover Burao\'s rich history and cultural heritage in Somaliland\'s east',
        duration: '1-2 days',
        price: '$200-300',
        highlights: ['Historical monuments', 'Local markets', 'Cultural sites']
      },
      {
        id: 5,
        name: 'Erigavo Mountain Town',
        description: 'Visit the scenic mountain town and explore northeastern Somaliland',
        duration: '2-3 days',
        price: '$400-600',
        highlights: ['Mountain scenery', 'Local villages', 'Traditional culture']
      }
    ],
    specialCultural: [
      {
        id: 6,
        name: 'Laas Geel Rock Art Tour',
        description: 'Ancient cave paintings dating back 9,000 years - UNESCO potential site',
        duration: '1 day',
        price: '$150-200',
        highlights: ['Ancient rock art', 'Historical significance', 'Photography', 'Expert guide']
      },
      {
        id: 7,
        name: 'Arabsiyo Historical Sites',
        description: 'Visit important historical and cultural monuments in the Arabsiyo region',
        duration: '1-2 days',
        price: '$250-350',
        highlights: ['Historical ruins', 'Cultural heritage', 'Local guides']
      },
      {
        id: 8,
        name: 'Sheikh Fardus Ruins Expedition',
        description: 'Explore ancient ruins and the spiritual significance of Sheikh Fardus',
        duration: '1 day',
        price: '$130-180',
        highlights: ['Ancient ruins', 'Spiritual site', 'Photography', 'History lesson']
      },
      {
        id: 9,
        name: 'Gabilay Sacred Monuments',
        description: 'Visit Dhagah Khoure and Dhagah Maroodi - sacred cultural sites',
        duration: '1 day',
        price: '$140-190',
        highlights: ['Sacred stones', 'Cultural significance', 'Photography']
      },
      {
        id: 10,
        name: 'Complete Historical Circuit',
        description: 'Multi-day tour covering all major historical sites across Somaliland',
        duration: '5-7 days',
        price: '$1,500-2,500',
        highlights: ['All major ruins', 'Expert historians', 'Cultural immersion', 'Premium experience']
      }
    ],
    adventures: [
      {
        id: 11,
        name: 'Daallo Mountain Trek',
        description: 'Challenge yourself on Somaliland\'s highest mountain with stunning views',
        duration: '2-3 days',
        price: '$500-700',
        highlights: ['High altitude', 'Panoramic views', 'Wildlife spotting', 'Camping']
      },
      {
        id: 12,
        name: 'Gacan Libah Mountain Adventure',
        description: 'Thrilling mountain climbing experience with expert guides',
        duration: '2 days',
        price: '$400-600',
        highlights: ['Rock climbing', 'Scenic vistas', 'Adventure guide', 'Photography']
      },
      {
        id: 13,
        name: 'Sheikh Mountain Expedition',
        description: 'Explore the spiritual and scenic Sheikh Mountain region',
        duration: '1-2 days',
        price: '$350-500',
        highlights: ['Mountain trekking', 'Spiritual site', 'Local villages', 'Natural beauty']
      },
      {
        id: 14,
        name: 'Wagar Mountain Challenge',
        description: 'Conquer Wagar Mountain with experienced mountaineers',
        duration: '2 days',
        price: '$400-600',
        highlights: ['Mountain climb', 'Rock formations', 'Expert guides']
      },
      {
        id: 15,
        name: 'Shimbibiris Surad Mountain',
        description: 'Adventure trek through stunning mountain landscape',
        duration: '2-3 days',
        price: '$500-750',
        highlights: ['Trekking', 'Camping', 'Natural scenery', 'Wildlife']
      },
      {
        id: 16,
        name: 'Almis Mountain Expedition',
        description: 'Explore the rugged beauty of Almis Mountain',
        duration: '2 days',
        price: '$400-600',
        highlights: ['Mountain exploration', 'Photography', 'Local culture']
      },
      {
        id: 17,
        name: 'Multi-Mountain Adventure',
        description: 'Epic 5-7 day tour visiting multiple mountain peaks',
        duration: '5-7 days',
        price: '$1,800-2,800',
        highlights: ['Multiple peaks', 'Expert mountaineers', 'Camping', 'All meals']
      }
    ]
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm interested in booking a safari tour:\n\nName: ${bookingForm.name}\nEmail: ${bookingForm.email}\nPhone: ${bookingForm.phone}\nTour Type: ${bookingForm.tourType}\nDates: ${bookingForm.dates}\nGroup Size: ${bookingForm.groupSize}\nMessage: ${bookingForm.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/252XXXXXXXXX?text=${encodedMessage}`, '_blank');
    setBookingForm({ name: '', email: '', phone: '', tourType: '', dates: '', groupSize: '', message: '' });
  };

  const renderTours = (category) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.map(tour => (
          <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center">
              <MapPin size={64} className="text-white opacity-30" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
              <div className="flex justify-between items-center mb-4 text-sm text-gray-700">
                <span className="font-semibold">Duration: {tour.duration}</span>
                <span className="font-bold text-orange-600">{tour.price}</span>
              </div>
              <ul className="mb-4 space-y-1">
                {tour.highlights.map((highlight, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-center">
                    <span className="text-orange-500 mr-2">‚úì</span> {highlight}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setSelectedTour(tour.name);
                  setBookingForm(prev => ({ ...prev, tourType: tour.name }));
                  document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">üê™</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-orange-600">Safari</h1>
              <p className="text-xs text-gray-600">Travel Tour & Culture</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition">Home</a>
            <a href="#city" className="text-gray-700 hover:text-orange-600 font-medium transition">City Tours</a>
            <a href="#cultural" className="text-gray-700 hover:text-orange-600 font-medium transition">Cultural</a>
            <a href="#adventure" className="text-gray-700 hover:text-orange-600 font-medium transition">Adventures</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 space-y-2">
            <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-orange-100">Home</a>
            <a href="#city" className="block px-4 py-2 text-gray-700 hover:bg-orange-100">City Tours</a>
            <a href="#cultural" className="block px-4 py-2 text-gray-700 hover:bg-orange-100">Cultural</a>
            <a href="#adventure" className="block px-4 py-2 text-gray-700 hover:bg-orange-100">Adventures</a>
            <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-orange-100">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Experience Somaliland's Hidden Treasures</h2>
          <p className="text-xl mb-8 opacity-90">Authentic safari adventures, cultural tours, and mountain expeditions across Somaliland</p>
          <p className="text-lg font-semibold mb-8">Revived & Recommitted to Excellence</p>
          <a href="#city" className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition inline-block">
            Explore Tours ‚Üì
          </a>
        </div>
      </section>

      {/* City Sightseeing Tours */}
      <section id="city" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">City Sightseeing Tours</h2>
          <p className="text-center text-gray-600 mb-12">Explore Somaliland's vibrant cities and urban attractions</p>
          {renderTours(tours.citySightseeing)}
        </div>
      </section>

      {/* Cultural & Historical */}
      <section id="cultural" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Cultural & Historical Tours</h2>
          <p className="text-center text-gray-600 mb-12">Discover ancient sites, sacred monuments, and Somaliland's rich heritage</p>
          {renderTours(tours.specialCultural)}
        </div>
      </section>

      {/* Adventure Tours */}
      <section id="adventure" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Mountain & Adventure Tours</h2>
          <p className="text-center text-gray-600 mb-12">Challenge yourself on Somaliland's majestic peaks</p>
          {renderTours(tours.adventures)}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Safari Travel?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'üèÜ', title: 'Expert Guides', desc: 'Experienced, knowledgeable local guides' },
              { icon: 'üõ°Ô∏è', title: 'Safety First', desc: 'Fully insured & certified operations' },
              { icon: 'üí∞', title: 'Best Prices', desc: 'Competitive rates & flexible packages' },
              { icon: 'üåç', title: 'Community Focus', desc: 'Supporting local economy & conservation' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John Smith', country: 'UK', text: 'Incredible experience! The guides were knowledgeable and the tours were well-organized.' },
              { name: 'Sarah Ahmed', country: 'USA', text: 'Best safari adventure of my life. Somaliland is a hidden gem!' },
              { name: 'Ali Hassan', country: 'UAE', text: 'Professional service, authentic experiences, and amazing value for money.' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-bold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Book Your Adventure</h2>
          <form onSubmit={handleBookingSubmit} className="bg-white p-8 rounded-lg shadow-2xl space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={bookingForm.name}
              onChange={handleBookingChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={bookingForm.email}
              onChange={handleBookingChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={bookingForm.phone}
              onChange={handleBookingChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <select
              name="tourType"
              value={bookingForm.tourType}
              onChange={handleBookingChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            >
              <option value="">Select Tour Type</option>
              {[...tours.citySightseeing, ...tours.specialCultural, ...tours.adventures].map(tour => (
                <option key={tour.id} value={tour.name}>{tour.name}</option>
              ))}
            </select>
            <input
              type="text"
              name="dates"
              placeholder="Preferred Dates"
              value={bookingForm.dates}
              onChange={handleBookingChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <input
              type="number"
              name="groupSize"
              placeholder="Group Size"
              value={bookingForm.groupSize}
              onChange={handleBookingChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <textarea
              name="message"
              placeholder="Additional Message or Special Requests"
              value={bookingForm.message}
              onChange={handleBookingChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
            >
              Send Booking Request via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-lg text-center">
              <Phone size={40} className="text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-700">+252 (0) XX XXX XXXX</p>
              <p className="text-gray-600 text-sm mt-2">Available 7 days a week</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-lg text-center">
              <Mail size={40} className="text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-700">info@safaritravel-somaliland.com</p>
              <p className="text-gray-600 text-sm mt-2">Response within 24 hours</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-lg text-center">
              <MapPin size={40} className="text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-700">Hargeisa, Somaliland</p>
              <p className="text-gray-600 text-sm mt-2">Serving all of Somaliland</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="bg-orange-500 text-white p-4 rounded-full hover:bg-orange-600 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition">
                <Facebook size={24} />
              </a>
              <a href="https://wa.me/" className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition">
                <span className="text-xl">üí¨ WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Safari Travel Tour & Culture</h2>
          <p className="text-gray-400 mb-4">Authentic Somaliland Safari Experiences ‚Ä¢ Revived After COVID-19</p>
          <div className="border-t border-gray-700 pt-6 mt-6">
            <p className="text-gray-500">¬© 2024 Safari Travel Tour & Culture. All rights reserved. | <a href="#" className="hover:text-orange-500">Privacy Policy</a> | <a href="#" className="hover:text-orange-500">Terms & Conditions</a></p>
          </div>
          <p className="text-gray-600 mt-4 text-sm">Based in Hargeisa, Somaliland | Serving Tourism Across All Regions</p>
        </div>
      </footer>
    </div>
  );
}
