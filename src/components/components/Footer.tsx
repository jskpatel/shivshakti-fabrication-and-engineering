export default function Footer() {
  return (
    <footer className="bg-[#03132E] border-t border-[#0b224b]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        {/* Copyright + Links */}
        <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-row md:flex-wrap">
          <p className="text-gray-400 text-sm md:text-base">
            since ©2008 Shivshakti Fabrication & Engineering. All rights reserved.
          </p>
        </div>

        {/* Secondary Text */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm md:text-base">
            Shivshakti Fabrication & Engineering is a registered trademark.
          </p>
        </div>
      </div>
    </footer>
  );
}