import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Timeline & Evaluation</h1>
          <p className="text-lg text-gray-600 mb-12">Three-year project timeline and external evaluation plan</p>

          {/* Project Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Timeline</h2>
            <div className="space-y-6">
              {/* Year 1 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Year 1: Foundation & Development</CardTitle>
                    <Badge className="bg-orange-500">Months 1-12</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Draft and refine 6 curriculum modules covering privacy regulations through LLM-based analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Design and develop Labs 1-4 focusing on policy analysis and static code analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Establish PRICOMP platform initial architecture and deploy proof-of-concept</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Conduct first faculty workshop at all three institutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Initiate K-12 outreach planning and partnerships</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Year 2 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Year 2: Expansion & Integration</CardTitle>
                    <Badge className="bg-orange-500">Months 13-24</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Complete Labs 5-6 on machine learning and integrated platform approaches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Pilot test curriculum modules and labs at partner institutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Expand PRICOMP platform with additional modules and sample projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Execute K-12 summer camps and teacher professional development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Collect formative evaluation data on student learning and engagement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Year 3 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Year 3: Refinement & Dissemination</CardTitle>
                    <Badge className="bg-orange-500">Months 25-36</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Complete PRICOMP platform with all features and datasets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Refine curriculum and labs based on pilot feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Deploy PRICOMP publicly for national community access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Publish curriculum and lab materials as open educational resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Conduct summative evaluation and disseminate results</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* External Evaluation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">External Evaluation Plan</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluator: Dr. Bugrahan Yalvac</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Formative Evaluation</h4>
                    <p className="text-gray-700 mb-3">
                      Ongoing assessment throughout project implementation to provide feedback for improvement:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Student learning outcomes in curriculum modules and labs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Faculty satisfaction and adoption of curriculum materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>PRICOMP platform usability and effectiveness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Outreach program reach and engagement metrics</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Summative Evaluation</h4>
                    <p className="text-gray-700 mb-3">
                      Comprehensive assessment at project completion measuring achievement of objectives:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Student competency gains in privacy compliance knowledge and skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Adoption rates of curriculum at partner and other institutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>PRICOMP platform impact on research and education</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>Broader impacts on HBCU cybersecurity education and workforce</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>National dissemination and reach of project resources</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
