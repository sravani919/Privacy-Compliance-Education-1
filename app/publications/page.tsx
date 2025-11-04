import { CardDescription } from "@/components/ui/card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const publicationCategories = [
  {
    category: "Privacy Compliance Tools & Analysis",
    publications: [
      {
        title: "Sample Publication Title Placeholder",
        authors: ["Author 1", "Author 2", "Author 3"],
        journal: "Journal Name Placeholder",
        year: "Year",
        type: "Research Article",
        abstract:
          "Abstract or short description will be added here. This placeholder demonstrates how each publication entry will appear once finalized.",
      },
      {
        title: "Another Sample Publication Title",
        authors: ["Author A", "Author B"],
        journal: "Conference or Journal Placeholder",
        year: "Year",
        type: "Conference Paper",
        abstract:
          "This section will later include key points or summaries of the publication. Use this as a template for adding new references.",
      },
    ],
  },
  {
    category: "Cybersecurity & Privacy Education",
    publications: [
      {
        title: "Educational Research Placeholder",
        authors: ["Author Name 1", "Author Name 2"],
        journal: "Publication Source Placeholder",
        year: "Year",
        type: "Educational Article",
        abstract:
          "This entry serves as an example format for educational publications related to cybersecurity and privacy awareness.",
      },
      {
        title: "Template for Future Publication",
        authors: ["Researcher 1", "Researcher 2", "Researcher 3"],
        journal: "Publisher or Journal Placeholder",
        year: "Year",
        type: "Review Article",
        abstract:
          "This placeholder represents a review or summary-style article that can be replaced with finalized content later.",
      },
    ],
  },
]

export default function PublicationsPage() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research Article":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Review Article":
        return "bg-green-100 text-green-800 border-green-200"
      case "Conference Paper":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Perspective":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Educational Article":
        return "bg-pink-100 text-pink-800 border-pink-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications & References</h1>
            <p className="text-lg text-gray-600">
              This page serves as a template for listing publications and references related to privacy compliance, cybersecurity, and education.
              Content will be added once official papers and resources are finalized.
            </p>
          </div>

          {publicationCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-6">
                {category.publications.map((publication, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 leading-tight">{publication.title}</CardTitle>
                          <CardDescription className="text-base">
                            <span className="font-medium text-gray-700">{publication.authors.join(", ")}</span>
                          </CardDescription>
                        </div>
                        <Badge className={`${getTypeColor(publication.type)} self-start`}>{publication.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-900">Journal: </span>
                          <span className="text-gray-700">{publication.journal}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Year: </span>
                          <span className="text-gray-700">{publication.year}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">Abstract:</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{publication.abstract}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
