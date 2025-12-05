import { useState } from 'react';

export default function ModernCard({ icon: Icon, title, description, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-80 transition-all duration-500 ease-out"
      style={{
        transform: isHovered ? 'translateY(-16px)' : 'translateY(0)',
      }}
    >
      {/* Layered background effect */}
      <div className="relative">
        {/* Back layer (rotates -8deg on hover) */}
        <div
          className="absolute inset-0 rounded-3xl transition-all duration-500 ease-out"
          style={{
            background: '#e7ecff',
            transform: isHovered ? 'rotate(8deg)' : 'rotate(0deg)',
            width: '80%',
            height: '80%',
            left: '10%',
            top: isHovered ? '0%' : '-8%',
          }}
        />
        
        {/* Middle layer (rotates 8deg on hover) */}
        <div
          className="absolute inset-0 rounded-3xl transition-all duration-500 ease-out"
          style={{
            background: '#ced8ff',
            transform: isHovered ? 'rotate(-8deg)' : 'rotate(0deg)',
            width: '90%',
            height: '90%',
            left: '5%',
            top: isHovered ? '0%' : '-4%',
          }}
        />

        {/* Main card content */}
        <div className="relative z-10 flex flex-col items-start gap-6 p-9 rounded-3xl text-white bg-[#05004f] transition-all duration-500 ease-out">
          {/* Icon */}
          {Icon && (
            <div className="w-12 h-12 text-white">
              <Icon size={48} />
            </div>
          )}

          {/* Description */}
          <p className="text-lg leading-relaxed opacity-90">
            {description}
          </p>

          {/* Link */}
          {link && (
            <a
              href={link.href}
              className="text-amber-400 text-base hover:underline transition-all duration-300 ease-out"
            >
              {link.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
