export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-6 mt-auto">
      <div className="container mx-auto h-auto flex flex-col md:flex-row justify-between items-center px-6">

        <p className="text-sm">&copy; 2025 My Website. All rights reserved.</p>

        <ul className="flex gap-8 mt-2 md:mt-0">
          <li><a href="#privacy" className="hover:text-gray-300">Home</a></li>
          <li><a href="#privacy" className="hover:text-gray-300">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-gray-300">Security Policy</a></li>
        </ul>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-300">ASETT Helpdesk at (240) 800-6003</a>

        </div>
      </div>
    </footer>
  );
}
