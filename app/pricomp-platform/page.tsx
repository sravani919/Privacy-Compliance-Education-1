import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PRICOMPPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PRICOMP Platform</h1>
          <p className="text-lg text-gray-600 mb-12">
            An integrative, modular research platform for privacy compliance education and research
          </p>

          {/* Platform Overview */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Platform Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  PRICOMP (Privacy Compliance Research Platform) is a unified platform for conducting privacy compliance
                  research and education. Built on Streamlit and React, PRICOMP provides a modular architecture that
                  integrates multiple analysis tools and datasets.
                </p>
                <p>
                  The platform is designed with flexibility in mind, allowing for easy addition of new analysis tools,
                  datasets, and research methods. PRICOMP uses Docker containers for tool isolation and VM-based
                  deployment for scalability.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Architecture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Three-Layer Architecture</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">Libraries Layer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700">
                    Core analysis libraries and tools integrated into PRICOMP for privacy compliance analysis:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Static Code Analysis:</strong> FlowDroid, Soot for data flow analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Dynamic Analysis:</strong> Frida for runtime instrumentation and monitoring
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>NLP Tools:</strong> Stanford NLP, spaCy for policy analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Machine Learning:</strong> BERT, LSTM for compliance detection
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Data Processing:</strong> Python libraries for data collection and preprocessing
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">Dataset Layer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700">Access to diverse datasets for privacy compliance research:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Privacy Policy Datasets:</strong> Curated collections of privacy policies from various
                        companies
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>App Datasets:</strong> Source code and binaries of Android applications for analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Ground Truth Data:</strong> Labeled compliance violations for model training and
                        evaluation
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">Research Layer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700">Sample projects and experimental frameworks:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Pre-built Projects:</strong> Sample privacy compliance research projects ready to extend
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Custom Experiments:</strong> Framework for designing and running custom privacy
                        compliance studies
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Result Analysis:</strong> Built-in tools for analyzing and visualizing research results
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sample Projects */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Research Projects</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Sample Project 1</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>
                    This area will include short descriptions of sample research projects once they are finalized. Each
                    project will demonstrate how the PRICOMP platform can be used for privacy compliance analysis.
                  </p>
                  <p>
                    You can use this section as a template to add example projects later, such as studies on app
                    privacy, policy analysis, or compliance verification workflows.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Sample Project 2</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-gray-700">
                  <p>
                    Placeholder text for another example project. The title, description, and objectives of each project
                    can be added here in the future.
                  </p>
                  <p>
                    This serves as a template structure for upcoming content related to research experiments, platform
                    integrations, or student-led studies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
