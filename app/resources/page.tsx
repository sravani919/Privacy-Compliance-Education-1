import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Curriculum Module Slides",
      description: "PowerPoint slides and teaching materials for all 6 curriculum modules",
      status: "coming-soon",
      icon: "📊",
    },
    {
      title: "Hands-on Lab Notebooks",
      description: "Jupyter notebooks and lab instructions for all 6 hands-on labs",
      status: "coming-soon",
      icon: "📓",
    },
    {
      title: "Faculty Workshop Materials",
      description: "Training materials for faculty workshops on privacy compliance education",
      status: "coming-soon",
      icon: "📚",
    },
    {
      title: "Student Assessment Tools",
      description: "Pre/post-assessment rubrics and evaluation instruments for measuring learning",
      status: "coming-soon",
      icon: "✓",
    },
    {
      title: "PRICOMP Platform Documentation",
      description: "User guides and technical documentation for the PRICOMP research platform",
      status: "coming-soon",
      icon: "📖",
    },
    {
      title: "K-12 Outreach Materials",
      description: "Age-appropriate resources and lesson plans for K-12 educators and students",
      status: "coming-soon",
      icon: "🎓",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Downloads</h1>
          <p className="text-lg text-gray-600 mb-12">Educational materials, slides, labs, and platform documentation</p>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Coming Soon</h2>
            <p className="text-blue-800">
              Project resources will be made available as they are finalized. All materials will be released as open
              educational resources for use by educators and researchers nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    </div>
                    <span className="text-3xl">{resource.icon}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <Badge className="bg-gray-500">
                      {resource.status === "coming-soon" ? "Coming Soon" : "Available"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
