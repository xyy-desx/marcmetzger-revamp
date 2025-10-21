import { useEffect, useRef } from 'react';
import ridgeLogo from '../assets/images/ridge.webp';
import housingLogo from '../assets/images/housing.webp';
import realtorLogo from '../assets/images/realtors.webp';
import chamberLogo from '../assets/images/chamber.webp';

const LogosRow = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const logoCards = sectionRef.current?.querySelectorAll('.logo-card');
    logoCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-linear-to-b from-gray-50 via-gray-100 to-gray-50 py-14 border-t border-gray-200"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-4 min-h-[110px]">
          {[ridgeLogo, housingLogo, realtorLogo, chamberLogo].map((logo, i) => (
            <div
              key={i}
              className="logo-card opacity-0 translate-y-7 scale-90 bg-white rounded-xl shadow border border-gray-100 h-24 w-32 flex items-center justify-center transition-all duration-500 ease-out"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={logo}
                alt={`Partner Logo ${i + 1}`}
                className="max-h-16 md:max-h-20 w-auto object-contain opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
      `}</style>
    </section>
  );
};

export default LogosRow;
