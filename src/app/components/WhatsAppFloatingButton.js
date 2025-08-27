"use client";

import {   FaWhatsapp,
} from "react-icons/fa";

export default function WhatsAppFloatingButton({
  phone,
  message = "Hi Heama Chemicals! I'd like to know more about your products.",
}) {
  const targetPhone = (phone || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "94773441501")
    .toString()
    .replace(/[^\d]/g, "");

  const href = targetPhone
    ? `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl px-4 py-3 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="hidden sm:block font-medium">WhatsApp</span>
      </a>
    </div>
  );
}