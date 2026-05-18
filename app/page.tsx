import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Bell, BookOpen, Zap, ArrowRight, Calendar } from "lucide-react"

export default function HomePage() {
  const projectNews = [
  {
    id: 1,
    date: "April 2026",
    title: "Privacy Policy Analysis Presentation",
    description:
      "A presentation was conducted explaining why privacy policy analysis is important and how organizations must evaluate compliance with privacy regulations.",
    type: "presentation",
  },
  {
    id: 2,
    date: "April 2026",
    title: "Hands-on Lab Session",
    description:
      "Students participated in interactive hands-on labs using Google Colab to follow along step by step.",
    type: "lab",
  },
]

  const highlights = [
  {
    title: "Privacy Policy Analysis",
    description:
      "Presentation on why privacy policy analysis is needed and why organizations must evaluate privacy compliance regularly.",
    icon: BookOpen,
    href: "/curriculum",
  },
  {
    title: "Hands-on Labs",
    description:
      "Students completed guided hands-on lab exercises using Google Colab during the session.",
    icon: Zap,
    href: "/labs",
  },
]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Privacy Compliance Education and Research
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              The PRICOMP project included a presentation on privacy policy analysis and guided hands-on lab activities for students.
            </p>
            <div className="text-sm text-blue-100 mb-8">
              <div className="font-semibold mb-3">Partner Institutions:</div>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-3 py-1 bg-white/10 rounded">Clemson University</span>
                <span className="px-3 py-1 bg-white/10 rounded">PVAMU</span>
                <span className="px-3 py-1 bg-white/10 rounded">NC A&T</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-orange-500 text-white hover:bg-orange-600 font-semibold text-lg px-8 py-6">
                <Link href="/project-overview" className="flex items-center gap-2">
                  Learn about the Project <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                className="bg-white/20 border border-white/30 text-white hover:bg-white/30 font-semibold text-lg px-8 py-6"
              >
                <Link href="/labs">View Hands-on Labs</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Project Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Link key={index} href={highlight.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-100 rounded-lg">
                          <Icon className="w-6 h-6 text-orange-600" />
                        </div>
                        <CardTitle className="text-xl">{highlight.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project News Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Project News and Updates</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {projectNews.map((item) => (
                <div key={item.id} className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Bell className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">{item.date}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
