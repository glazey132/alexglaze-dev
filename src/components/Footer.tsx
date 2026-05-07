import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1c1c35] py-8 bg-[#07070f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-text-muted text-sm">
            © 2026 Alex Glaze. All rights reserved.
          </div>
          <div className="text-text-muted text-sm">
            <Link
              href="mailto:alglaze132@gmail.com"
              className="hover:text-text-primary transition-colors duration-200"
            >
              alglaze132@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
