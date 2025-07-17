import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Solutions() {
  const location = useLocation();
  const [showAllIndoor, setShowAllIndoor] = useState(false);
  const [showAllOutdoor, setShowAllOutdoor] = useState(false);

  const smartSignage = [
    {
      id: 1,
      title: 'Digital Posters',
      category: 'Indoor',
      shortDescription: 'High-resolution digital posters for dynamic indoor advertising.',
      detailedContent: {
        overview: 'Digital posters are sleek display screens that show dynamic advertisements and promotions in high-traffic indoor areas.',
        features: [
          '1080p or 4K resolution screens',
          'Remote content management',
          'Wall-mounted or stand-alone options',
        ],
        benefits: [
          'Eye-catching content that drives engagement',
          'Quick content updates without reprinting',
          'Energy-efficient LED screens',
        ],
        applications: [
          'Retail stores',
          'Shopping malls',
          'Hospitals & clinics',
        ],
      },
    },
    {
      id: 2,
      title: 'Touch Kiosks',
      category: 'Indoor',
      shortDescription: 'Interactive kiosks for customer engagement and self-service solutions.',
      detailedContent: {
        overview: 'Touch kiosks enable users to interact with content such as menus, directories, or service portals via a touchscreen interface.',
        features: [
          'Multi-touch screen',
          'Custom software integration',
          'Wi-Fi or Ethernet connectivity',
        ],
        benefits: [
          'Improves customer experience through self-service',
          'Reduces staff workload',
          'Enables 24/7 access to services',
        ],
        applications: [
          'Restaurants for self-ordering',
          'Government buildings',
          'Banks and ATMs',
        ],
      },
    },
    {
      id: 3,
      title: 'LED Billboards',
      category: 'Outdoor',
      shortDescription: 'Large-format LED billboards designed for high-impact outdoor advertising.',
      detailedContent: {
        overview: 'LED billboards are bright, weather-resistant displays used to show advertisements and announcements in outdoor environments.',
        features: [
          'High brightness for daylight visibility',
          'IP65 waterproof rating',
          'Modular panels for scalable sizes',
        ],
        benefits: [
          'Maximum exposure for campaigns',
          'Long-lasting and weatherproof',
          'Remote content scheduling',
        ],
        applications: [
          'Roadside advertising',
          'Sports arenas',
          'Building rooftops',
        ],
      },
    },
    {
      id: 4,
      title: 'Outdoor Digital Menu Boards',
      category: 'Outdoor',
      shortDescription: 'Weather-resistant digital menu boards ideal for drive-thrus and outdoor dining areas.',
      detailedContent: {
        overview: 'These menu boards are designed to withstand outdoor elements while clearly displaying dynamic menus and promotions.',
        features: [
          'Anti-glare screen',
          'Weather-sealed enclosure',
          'Brightness auto-adjustment',
        ],
        benefits: [
          'Increases sales through promotions',
          'Reduces menu printing costs',
          'Improves visibility in all conditions',
        ],
        applications: [
          'Fast food drive-thrus',
          'Cafes with outdoor seating',
          'Food trucks and mobile kitchens',
        ],
      },
    },
  ];

  useEffect(() => {
    const hash = location.hash;
    if (hash === '#indoor') {
      document.getElementById('indoor')?.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#outdoor') {
      document.getElementById('outdoor')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const renderSolutions = (category: string, showAll: boolean) => {
    const filtered = smartSignage.filter((s) => s.category === category);
    const toDisplay = showAll ? filtered : filtered.slice(0, 2);

    return toDisplay.map((solution) => (
      <motion.div
        key={solution.id}
        className="bg-white p-6 rounded-xl shadow-md transition hover:shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
        <p className="text-gray-600 mb-4">{solution.shortDescription}</p>

        <div className="mb-4">
          <h4 className="font-bold text-lg mb-2">Overview</h4>
          <p className="text-gray-700">{solution.detailedContent.overview}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-bold text-lg mb-2">Key Features</h4>
          <ul className="list-disc list-inside text-gray-700">
            {solution.detailedContent.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold text-lg mb-2">Benefits</h4>
          <ul className="list-disc list-inside text-gray-700">
            {solution.detailedContent.benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-2">Common Applications</h4>
          <ul className="list-disc list-inside text-gray-700">
            {solution.detailedContent.applications.map((app, idx) => (
              <li key={idx}>{app}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h1
        className="text-4xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Smart Signage Solutions
      </motion.h1>

      <section id="indoor" className="mb-20">
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">Indoor Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderSolutions('Indoor', showAllIndoor)}
        </div>
        {smartSignage.filter((s) => s.category === 'Indoor').length > 2 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAllIndoor(!showAllIndoor)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition"
            >
              {showAllIndoor ? 'Show Less' : 'Show More'}
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </section>

      <section id="outdoor">
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">Outdoor Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderSolutions('Outdoor', showAllOutdoor)}
        </div>
        {smartSignage.filter((s) => s.category === 'Outdoor').length > 2 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAllOutdoor(!showAllOutdoor)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition"
            >
              {showAllOutdoor ? 'Show Less' : 'Show More'}
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
