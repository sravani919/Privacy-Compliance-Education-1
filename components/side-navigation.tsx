"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/project-overview", label: "Project Overview" },
    { href: "/curriculum", label: "Curriculum Modules" },
    { href: "/labs", label: "Hands-on Labs" },
    { href: "/pricomp-platform", label: "PRICOMP Platform" },
    { href: "/broader-impacts", label: "Broader Impacts & Outreach" },
    { href: "/publications", label: "Publications" },
    { href: "/team", label: "Team" },
    { href: "/timeline", label: "Timeline & Evaluation" },
    { href: "/resources", label: "Resources / Downloads" },
  ]

  return (
    <>
      {/* Hamburger Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-blue-700 text-white hover:bg-blue-600 p-2"
        aria-label="Toggle navigation menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />}

      {/* Side Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-blue-700 to-blue-900 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:bg-blue-600 p-2"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Project Icon and Name */}
        <div className="p-6 border-b border-blue-600">
          <Link
            href="/"
            className="flex items-center text-white hover:text-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl font-bold">🔒</span>
            </div>
            <div>
              <h2 className="text-lg font-bold">PRICOMP</h2>
              <p className="text-xs text-blue-100">Privacy Compliance Project</p>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center text-blue-100 hover:text-white hover:bg-blue-600 px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6 text-center">
          <p className="text-blue-200 text-xs">© 2025 NSF SaTC:EDU Project</p>
          <p className="text-blue-100 text-xs mt-2">Clemson • PVAMU • NC A&T</p>
        </div>
      </div>
    </>
  )
}
