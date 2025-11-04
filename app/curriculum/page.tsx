import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const modules = [
  {
    id: 1,
    title: "Module Title Placeholder",
    description: "Module description will be added here once finalized.",
    learning: [
      "Learning objectives will be added soon.",
      "Details about concepts and topics covered.",
      "More information will be updated later.",
    ],
    integration: "Course integration details will be provided here.",
  },
  {
    id: 2,
    title: "Module Title Placeholder",
    description: "Content for this module is under preparation.",
    learning: [
      "Upcoming module content.",
      "Example objectives will appear here.",
      "Details will be added after review.",
    ],
    integration: "Integration details coming soon.",
  },
  {
    id: 3,
    title: "Module Title Placeholder",
    description: "This section will include finalized module information.",
    learning: [
      "Placeholder for learning outcomes.",
      "Additional notes will be added.",
      "Awaiting confirmation from PIs.",
    ],
    integration: "To be determined.",
  },
  {
    id: 4,
    title: "Module Title Placeholder",
    description: "Information will be added as module structure is confirmed.",
    learning: [
      "Pending content.",
      "Learning topics will be inserted here.",
      "Module details coming soon.",
    ],
    integration: "Course references will be updated later.",
  },
  {
    id: 5,
    title: "Module Title Placeholder",
    description: "Example module placeholder text for layout reference.",
    learning: [
      "Example placeholder learning point.",
      "Text to be replaced after final review.",
      "Updated content will appear here.",
    ],
    integration: "Integration details coming soon.",
  },
  {
    id: 6,
    title: "Module Title Placeholder",
    description: "Final module details will be updated after project review.",
    learning: [
      "Placeholder text for module learning objective.",
      "This content will be finalized later.",
      "Pending updates from the research team.",
    ],
    integration: "Course mapping to be determined.",
  },
]

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Modules</h1>
          <p className="text-lg text-gray-600 mb-12">
            This page will showcase six curriculum modules that integrate privacy compliance education into computer science courses. Module details and learning objectives will be added as they are finalized.
          </p>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Module Overview</h2>
            <p className="text-blue-800">
              Placeholder text for the curriculum overview. Detailed descriptions about each module will appear here once confirmed by the project team. This page serves as a layout template for upcoming module content.
            </p>
          </div>

          <div className="space-y-6">
            {modules.map((module) => (
              <Card key={module.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge className="mb-3 bg-orange-500">{`Module ${module.id}`}</Badge>
                      <CardTitle className="text-2xl">{module.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{module.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Learning Objectives:</h4>
                    <ul className="space-y-1">
                      {module.learning.map((objective, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Course Integration:</h4>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded">{module.integration}</p>
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
