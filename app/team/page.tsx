import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Building2, GraduationCap } from "lucide-react"

const facultyMembers = [
  {
    name: "Dr. Long Cheng",
    role: "Principal Investigator",
    institution: "Clemson University",
    bio: "Expert in cybersecurity and privacy compliance. Leading the curriculum development and platform architecture design.",
    email: "lcheng@clemson.edu",
    focus: "Privacy Compliance, Curriculum Design",
  },
  {
    name: "Dr. Matthew Boyer",
    role: "Co-Principal Investigator",
    institution: "Clemson University",
    bio: "Specializes in cybersecurity education and hands-on lab development. Leading hands-on lab design and implementation.",
    email: "mboyer@clemson.edu",
    focus: "Cybersecurity Education, Lab Development",
  },
  {
    name: "Dr. Na Li",
    role: "Co-Principal Investigator",
    institution: "Prairie View A&M University",
    bio: "Privacy research expert. Leading HBCU engagement and broader impacts initiatives at PVAMU.",
    email: "nali@pvamu.edu",
    focus: "Privacy Research, HBCU Partnership",
  },
  {
    name: "Dr. Xiaohong Yuan",
    role: "Co-Principal Investigator",
    institution: "North Carolina A&T State University",
    bio: "Cybersecurity education pioneer. Coordinating curriculum integration at NC A&T and developing outreach programs.",
    email: "xyuan@ncat.edu",
    focus: "Cybersecurity Education, Outreach",
  },
]

const studentResearchers = [
  {
    name: "Sravani Pati",
    role: "PhD Student - 1st Year",
    institution: "Clemson University",
    email: "spati@clemson.edu",
  },
  {
    name: "Jingwen Yan",
    role: "PhD Student - 3rd Year",
    institution: "Clemson University",
    email: "jingwey@g.clemson.edu",
  },
  {
    name: "Pal Dave",
    role: "PhD Candidate - 3rd Year",
    institution: "North Carolina A&T State University",
    email: "pvdave@aggies.ncat.edu",
  },
]

const evaluator = {
  name: "Dr. Bugrahan Yalvac",
  role: "External Evaluator",
  institution: "Clemson University",
  bio: "Leading formative and summative evaluation of project outcomes, student learning, and broader impacts.",
  email: "byalvac@clemson.edu",
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Project Team
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the faculty researchers, student contributors, and collaborators
              leading the PRICOMP project in privacy compliance education and research.
            </p>
          </div>

          {/* Faculty Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Principal and Co-Principal Investigators
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {facultyMembers.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {member.name}
                    </CardTitle>

                    <p className="text-sm font-medium text-orange-600 mt-1">
                      {member.role}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building2 className="h-4 w-4" />
                      <span>{member.institution}</span>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {member.focus.split(", ").map((area, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs bg-blue-50"
                        >
                          {area}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm pt-2 border-t">
                      <Mail className="h-4 w-4 text-gray-500" />

                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {member.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Student Researchers */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Student Researchers
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {studentResearchers.map((student, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {student.name}
                    </CardTitle>

                    <p className="text-sm font-medium text-orange-600 mt-1">
                      {student.role}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building2 className="h-4 w-4" />
                      <span>{student.institution}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm pt-2 border-t">
                      <Mail className="h-4 w-4 text-gray-500" />

                      <a
                        href={`mailto:${student.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {student.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* External Evaluator */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              External Evaluator
            </h2>

            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle className="text-lg">
                  {evaluator.name}
                </CardTitle>

                <p className="text-sm font-medium text-orange-600 mt-1">
                  {evaluator.role}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="h-4 w-4" />
                  <span>{evaluator.institution}</span>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {evaluator.bio}
                </p>

                <div className="flex items-center gap-2 text-sm pt-2 border-t">
                  <Mail className="h-4 w-4 text-gray-500" />

                  <a
                    href={`mailto:${evaluator.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {evaluator.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  )
}
