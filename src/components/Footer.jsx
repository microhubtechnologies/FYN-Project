import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-white " style={{ backgroundColor: "#05004f" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FYN</h3>
            <p className="text-blue-100">Fast loans for Kiwis, from Kiwis</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-blue-300 transition-colors">
                About
              </Link>
              <Link to="/services" className="hover:text-blue-300 transition-colors">
                Services
              </Link>
              <Link to="/contact" className="hover:text-blue-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <div className="flex flex-col gap-2">
             <ul className="space-y-2 text-sm">
   <li>
  <Link to="/services/0" className="hover:text-white transition-colors">
    Car Loans
  </Link>
</li>

<li>
  <Link to="/services/1" className="hover:text-white transition-colors">
    Motorbike Loans
  </Link>
</li>

<li>
  <Link to="/services/2" className="hover:text-white transition-colors">
    Personal Loans
  </Link>
</li>

<li>
  <Link to="/services/3" className="hover:text-white transition-colors">
    Business Loans
  </Link>
</li>

<li>
  <Link to="/services/4" className="hover:text-white transition-colors">
    Debt Consolidation Loans
  </Link>
</li>

<li>
  <Link to="/services/5" className="hover:text-white transition-colors">
    Caravan Loans
  </Link>
</li>

<li>
  <Link to="/services/6" className="hover:text-white transition-colors">
    Boat & Marine Loans
  </Link>
</li>

<li>
  <Link to="/services/7" className="hover:text-white transition-colors">
    Equipment Finance
  </Link>
</li>

<li>
  <Link to="/services/8" className="hover:text-white transition-colors">
    Insurance Solutions
  </Link>
</li>

  </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+64123456789" className="hover:text-blue-300 transition-colors">
                  +64 (0) 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@fyn.co.nz" className="hover:text-blue-300 transition-colors">
                  info@fyn.co.nz
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Auckland, NZ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100">© 2025 FYN. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-blue-300 transition-colors">
              Privacy Policy
            </Link>
           <Link to="/terms" className="hover:text-blue-300 transition-colors">
              Terms of Service
            </Link>
             {/* <Link to="/privacy" className="hover:text-blue-300 transition-colors">
              Cookies
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
