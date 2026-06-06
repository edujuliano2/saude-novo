import React from 'react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '5511999998888',
  message = 'Olá TRYGG! Gostaria de receber uma análise gratuita de custos do plano de saúde da minha empresa.',
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-fade-in-up">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3.5 sm:px-5 sm:py-4 rounded-full shadow-[0_18px_45px_rgba(16,185,129,0.28)] hover:shadow-[0_18px_55px_rgba(16,185,129,0.38)] transition-all duration-300 transform hover:-translate-y-1 relative"
      >
        {/* Pulsing Outer Rings */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-400 opacity-40 animate-ping group-hover:opacity-0 transition-opacity duration-300"></span>
        
        {/* SVG WhatsApp Logo */}
        <svg
          className="w-6 h-6 fill-current text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.86-9.778.001-2.614-1.015-5.07-2.861-6.92C16.615 2.056 14.159 1.037 11.55 1.037 6.114 1.037 1.692 5.423 1.69 10.817c-.001 1.679.452 3.3 1.309 4.729L2.03 21.03l5.617-1.876zM17.67 14.87c-.29-.145-1.713-.846-1.977-.941-.264-.096-.456-.145-.648.145-.191.29-.741.94-.908 1.132-.167.19-.333.21-.623.067-.29-.145-1.226-.452-2.335-1.442-.864-.77-1.447-1.721-1.616-2.011-.17-.29-.018-.447.127-.592.13-.13.29-.339.435-.508.145-.17.19-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.648-1.56-.888-2.138-.233-.56-.47-.482-.648-.492-.167-.008-.36-.01-.552-.01s-.504.072-.768.362c-.264.29-1.008.986-1.008 2.406 0 1.42 1.032 2.788 1.176 2.98.145.193 2.03 3.1 4.919 4.348.687.297 1.224.475 1.642.608.69.22 1.319.189 1.815.115.553-.083 1.714-.7 1.956-1.378.24-.678.24-1.258.17-1.378-.072-.12-.264-.193-.554-.339z" />
        </svg>

        {/* Text */}
        <span className="hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-semibold text-sm whitespace-nowrap">
          Falar no WhatsApp
        </span>

        {/* Notification indicator */}
        <span className="flex h-2.5 w-2.5 absolute top-0.5 right-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
        </span>
      </a>
    </div>
  );
};
