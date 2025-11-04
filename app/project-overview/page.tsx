import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectOverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Overview</h1>
          <p className="text-lg text-gray-600 mb-12">
            Comprehensive overview of the Privacy Compliance Education project
          </p>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This section will introduce the overall purpose of the Privacy Compliance Education project.
                It will describe the motivation behind integrating privacy compliance concepts into computer
                science education and the importance of preparing students to handle real-world privacy challenges.
              </p>
              <p>
                The introduction will also outline the project’s long-term vision of combining education,
                research, and outreach to strengthen awareness and practice of privacy compliance.
                Additional background details will be added here after team review.
              </p>
              <p>
                The project brings together multiple institutions working collaboratively to design
                impactful resources for privacy education. More information about partners and their
                specific roles will be added soon.
              </p>
            </div>
          </section>

          {/* Project Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Objectives</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">1. Curriculum Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Six educational modules will be developed to integrate privacy topics into computer
                    science courses. Each module will focus on specific areas such as privacy regulations,
                    analysis methods, and development practices. Detailed descriptions will be added soon.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">2. Hands-on Labs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    A set of practical labs will provide students with guided, interactive experiences
                    on analyzing privacy policies, detecting non-compliance, and exploring privacy-focused
                    software tools. Lab details and resources will be shared after the upcoming review.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">3. PRICOMP Research Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    The PRICOMP platform will serve as a collaborative research environment that brings
                    together tools, datasets, and sample experiments related to privacy compliance.
                    Example project descriptions and platform previews will be added here soon.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Intellectual Merit */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Merit</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This section will summarize the educational and research innovations of the project.
                It will describe how new learning modules, lab experiences, and research tools contribute
                to advancing privacy compliance education.
              </p>
              <p>
                Future updates will highlight how the project supports cutting-edge methods in privacy analysis
                and creates adaptable, modular educational materials that can evolve over time.
              </p>
            </div>
          </section>

          {/* Relevance */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Relevance to Privacy Compliance Education
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Privacy is a key component of secure and trustworthy software systems.
                This section will discuss how the project aligns with national goals
                for privacy and cybersecurity education.
              </p>
              <p>
                Additional content will highlight the project’s role in increasing participation
                from underrepresented communities and fostering awareness among K–12 and college students.
              </p>
              <p>
                Finalized details about dissemination plans and community engagement will be added after review.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
