import React from 'react';
import { UserGroupIcon, BuildingOfficeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AdvancedHero from '../components/AdvancedHero';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/carousel.css';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ogbu Solomon Amuche',
      role: 'Founder',
      image: '/images/team/founder.jpg',
      bio: 'As the founder of Jeff Realty, Solomon brings visionary leadership and extensive experience in Nigerian real estate.'
    },
    {
      name: 'Okoye Valentine Chinedu',
      role: 'Managing Director',
      image: '/images/team/managing-director.jpg',
      bio: 'Valentine leads our operations with strategic insight and ensures excellence in service delivery across all our projects.'
    },
    {
      name: 'Michael Johnson',
      role: 'Lead Property Consultant',
      image: '/images/team/michael-johnson.jpg',
      bio: 'Michael brings deep market insights and personalized property solutions to our clients.'
    },
    {
      name: 'Sarah Wilson',
      role: 'Marketing Director',
      image: '/images/team/sarah-wilson.jpg',
      bio: 'Sarah drives our digital presence and ensures our properties reach the right audience.'
    }
  ];

  const values = [
    {
      icon: <UserGroupIcon className="h-8 w-8 text-primary" />,
      title: 'Client-Focused',
      description: 'We put our clients first, ensuring their needs and preferences guide our services.'
    },
    {
      icon: <BuildingOfficeIcon className="h-8 w-8 text-primary" />,
      title: 'Market Expertise',
      description: 'Deep understanding of local markets enables us to provide valuable insights.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all dealings.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AdvancedHero
        title="About Jeff Realty"
        subtitle="Leading the way in Nigerian real estate with innovation, integrity, and exceptional service. Discover our story and meet the team behind our success."
        backgroundImage="/images/about-hero.jpg"
        showBuilding={true}
        theme="dark"
        ctaText="Meet Our Team"
        ctaLink="#team-section"
      />
      
      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Founded with a vision to transform the Nigerian real estate landscape, Jeff Realty has grown 
            from a small local agency to a leading property consultant in Enugu and Calabar. Our journey 
            is marked by continuous innovation and an unwavering commitment to client satisfaction.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Carousel */}
      <section id="team-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Team
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
            }}
            className="team-carousel"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.name}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full hover:translate-y-[-4px] transition-transform duration-300 ease-in-out">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let our team of experts guide you through your real estate journey.
          </p>
          <button
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
