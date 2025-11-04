import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users } from "lucide-react"

const researchProjects = [
  {
    title: "Machine Learning in Genomic Analysis",
    description:
      "Developing advanced algorithms to identify patterns in large-scale genomic datasets, with applications in personalized medicine and disease prediction.",
    status: "Active",
    duration: "2023 - 2025",
    team: ["Dr. Sarah Johnson", "James Wilson", "Alex Thompson"],
    tags: ["Machine Learning", "Genomics", "Healthcare"],
    funding: "NIH Grant R01-GM123456",
  },
  {
    title: "Statistical Models for Climate Data",
    description:
      "Creating robust statistical frameworks to analyze climate change patterns and predict future environmental conditions.",
    status: "Active",
    duration: "2022 - 2024",
    team: ["Dr. Michael Chen", "Dr. Emily Rodriguez"],
    tags: ["Statistics", "Climate Science", "Modeling"],
    funding: "NSF Grant DMS-789012",
  },
  {
    title: "Molecular Mechanisms of Cell Division",
    description:
      "Investigating the fundamental processes that control cellular reproduction and their implications for cancer research.",
    status: "Completed",
    duration: "2021 - 2023",
    team: ["Dr. Emily Rodriguez", "Dr. Lisa Park"],
    tags: ["Molecular Biology", "Cell Biology", "Cancer Research"],
    funding: "University Internal Grant",
  },
  {
    title: "AI-Driven Drug Discovery Platform",
    description:
      "Building an integrated platform that uses artificial intelligence to accelerate the identification of potential therapeutic compounds.",
    status: "Active",
    duration: "2024 - 2026",
    team: ["Dr. Sarah Johnson", "James Wilson", "Dr. Michael Chen"],
    tags: ["AI", "Drug Discovery", "Bioinformatics"],
    funding: "Industry Partnership",
  },
  {
    title: "Data Integration in Multi-Omics Studies",
    description:
      "Developing methods to combine and analyze diverse biological data types for comprehensive understanding of biological systems.",
    status: "Planning",
    duration: "2024 - 2027",
    team: ["Dr. Lisa Park", "Alex Thompson"],
    tags: ["Data Integration", "Multi-Omics", "Systems Biology"],
    funding: "Pending NIH Application",
  },
]

export default function ResearchPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200"
      case "Completed":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Planning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Our Research</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our current and completed research projects that advance scientific knowledge and contribute to
              solving real-world challenges.
            </p>
          </div>

          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                    </div>
                    <Badge className={`${getStatusColor(project.status)} self-start`}>{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{project.team.length} team members</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Research Team:</p>
                    <p className="text-sm text-muted-foreground">{project.team.join(", ")}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Funding:</p>
                    <p className="text-sm text-muted-foreground">{project.funding}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" size="sm">
                      Learn More <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
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
