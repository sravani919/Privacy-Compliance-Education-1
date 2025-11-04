import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BroaderImpactsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Broader Impacts & Outreach</h1>
          <p className="text-lg text-gray-600 mb-12">
            NSF SATE:EDU commitments to strengthen cybersecurity education and broaden participation
          </p>

          <div className="space-y-8">
            {/* HBCU Impact */}
            <section>
              <div className="mb-4 p-4 bg-orange-100 border-l-4 border-orange-500 rounded">
                <h2 className="text-2xl font-bold text-orange-900">HBCU Impact</h2>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Strengthening Cybersecurity Education at HBCUs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    This project prioritizes strengthening cybersecurity education at two Historically Black Colleges
                    and Universities: Prairie View A&M University (PVAMU) and North Carolina A&T University (NC A&T).
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Faculty Training:</strong> Workshops to equip faculty with privacy compliance teaching
                        expertise
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Curriculum Integration:</strong> Seamless integration of privacy compliance into
                        existing courses
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Student Engagement:</strong> Direct mentoring and involvement of HBCU students in
                        research
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Resource Support:</strong> Provision of tools, datasets, and infrastructure for research
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* K-12 Outreach */}
            <section>
              <div className="mb-4 p-4 bg-orange-100 border-l-4 border-orange-500 rounded">
                <h2 className="text-2xl font-bold text-orange-900">K–12 Outreach</h2>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Engaging Pre-College Students and Educators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Building awareness and interest in cybersecurity and privacy among K–12 students and educators
                    through targeted outreach initiatives.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Teacher Workshops:</strong> Professional development for K–12 educators on privacy and
                        cybersecurity
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Summer Camps:</strong> Interactive programs for high school students interested in
                        cybersecurity
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Educational Materials:</strong> Age-appropriate resources explaining privacy concepts
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>School Partnerships:</strong> Collaborations with school districts for curriculum
                        infusion
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Workforce Development */}
            <section>
              <div className="mb-4 p-4 bg-orange-100 border-l-4 border-orange-500 rounded">
                <h2 className="text-2xl font-bold text-orange-900">Workforce Development</h2>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Building the Cybersecurity Workforce</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Creating pathways for students to enter the cybersecurity workforce through comprehensive privacy
                    compliance education.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Student Seminars:</strong> Guest speakers from industry discussing real-world privacy
                        challenges
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Industry Internships:</strong> Connections with companies for student internship
                        opportunities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Certification Preparation:</strong> Resources to prepare students for cybersecurity
                        certifications
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Underrepresented Minorities */}
            <section>
              <div className="mb-4 p-4 bg-orange-100 border-l-4 border-orange-500 rounded">
                <h2 className="text-2xl font-bold text-orange-900">Broadening Participation</h2>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Supporting Underrepresented Groups in Cybersecurity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Committed to increasing diversity in the cybersecurity workforce by actively engaging
                    underrepresented groups at all educational levels.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Mentorship Programs:</strong> Connecting underrepresented students with experienced
                        cybersecurity professionals
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Inclusive Curriculum:</strong> Ensuring teaching materials reflect diverse perspectives
                        and contexts
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Community Engagement:</strong> Partnerships with organizations serving underrepresented
                        communities
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* National Dissemination */}
            <section>
              <div className="mb-4 p-4 bg-orange-100 border-l-4 border-orange-500 rounded">
                <h2 className="text-2xl font-bold text-orange-900">National Dissemination</h2>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Sharing Resources with the Nation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Ensuring that the project&apos;s resources and impact extend beyond partner institutions to universities
                    and colleges across the country.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Open Educational Resources:</strong> Free curriculum modules and labs available to all
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>PRICOMP Platform:</strong> Public deployment for national academic community
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Publications & Workshops:</strong> Peer-reviewed papers and conference presentations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>
                        <strong>Webinars & Webinars:</strong> Online training for educators and practitioners
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
