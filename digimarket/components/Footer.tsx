import Link from 'next/link'
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Templates', 'UI Kits'],
  Resources: ['Documentation', 'Blog', 'Support', 'API'],
  Company: ['About', 'Careers', 'Contact', 'Legal'],
}

const socialIcons = [
  { Icon: FaInstagram as React.ComponentType<{ className?: string }>, href: '#' },
  { Icon: FaTwitter as React.ComponentType<{ className?: string }>, href: '#' },
  { Icon: FaLinkedin as React.ComponentType<{ className?: string }>, href: '#' },
  { Icon: FaGithub as React.ComponentType<{ className?: string }>, href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 pt-8 border-t border-gray-200">
          {socialIcons.map(({ Icon, href }, i) => (
            <a key={i} href={href} className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Icon className="w-5 h-5 text-gray-700" />
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          © 2026 DigiMarket. All rights reserved.
        </div>
      </div>
    </footer>
  )
}