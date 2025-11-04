import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const labs = [
  {
    id: 1,
    title: "Lab 1: NLP-based Privacy Policy Analysis",
    description:
      "Students use natural language processing tools to parse privacy policies and extract privacy-relevant information such as data types, purposes, and retention periods.",
    objectives: [
      "Apply NLP techniques to privacy policy documents",
      "Extract and structure privacy practices from unstructured text",
      "Identify policy obligations and commitments",
      "Analyze policy compliance requirements",
    ],
    tools: ["Stanford NLP", "spaCy", "Python NLTK"],
  },
  {
    id: 2,
    title: "Lab 2: Privacy Policy vs. Actual Practice Analysis",
    description:
      "Comparing extracted privacy policy statements with actual data handling practices in code using both static and dynamic analysis.",
    objectives: [
      "Compare stated vs. actual privacy practices",
      "Identify inconsistencies and violations",
      "Use multiple analysis techniques",
      "Document findings and recommendations",
    ],
    tools: ["FlowDroid", "spaCy", "Manual code review"],
  },
  {
    id: 3,
    title: "Lab 3: Static Code Analysis for Privacy Leaks",
    description:
      "Using static analysis tools to identify potential data flows and privacy violations in Android/mobile applications without execution.",
    objectives: [
      "Set up and configure static analysis tools",
      "Analyze data flow in source code",
      "Identify information leaks",
      "Create detailed vulnerability reports",
    ],
    tools: ["FlowDroid", "Soot", "IDA Pro"],
  },
  {
    id: 4,
    title: "Lab 4: Dynamic Analysis of Privacy Violations",
    description:
      "Instrumenting and running applications to monitor actual data practices at runtime, identifying violations not caught by static analysis.",
    objectives: [
      "Instrument applications for runtime monitoring",
      "Monitor data access and transmission",
      "Detect runtime privacy violations",
      "Compare results with static analysis findings",
    ],
    tools: ["Frida", "Android Debug Bridge", "Custom monitoring tools"],
  },
  {
    id: 5,
    title: "Lab 5: Machine Learning for Privacy Compliance Detection",
    description:
      "Training and using machine learning models (SVM, LSTM, BERT) to automatically detect privacy non-compliance patterns in code and policies.",
    objectives: [
      "Prepare training datasets for ML models",
      "Train models for privacy compliance detection",
      "Evaluate model accuracy and performance",
      "Apply models to new code samples",
    ],
    tools: ["BERT", "LSTM", "scikit-learn", "PyTorch", "TensorFlow"],
  },
  {
    id: 6,
    title: "Lab 6: Integrated Privacy Compliance Platform",
    description:
      "Using the PRICOMP platform to conduct comprehensive privacy compliance assessments combining multiple analysis techniques and tools.",
    objectives: [
      "Use multiple analysis tools through a unified interface",
      "Interpret results from different analysis methods",
      "Create comprehensive compliance reports",
      "Propose remediation strategies",
    ],
    tools: ["PRICOMP Platform", "All previous tools via integration"],
  },
]

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hands-on Labs</h1>
          <p className="text-lg text-gray-600 mb-12">Six practical labs for hands-on privacy compliance learning</p>

          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">Two-Step Privacy Non-Compliance Detection</h2>
            <div className="text-blue-800 space-y-2">
              <p>
                <strong>Step 1 - Extract Privacy Practices:</strong> Extract stated privacy practices from privacy
                policies using NLP techniques
              </p>
              <p>
                <strong>Step 2 - Detect Violations:</strong> Compare extracted practices against actual code behavior
                using static and dynamic analysis
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {labs.map((lab) => (
              <Card key={lab.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Badge className="bg-orange-500 text-lg px-3 py-1">{`Lab ${lab.id}`}</Badge>
                    <CardTitle className="text-2xl">{lab.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{lab.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Learning Objectives:</h4>
                    <ul className="space-y-1">
                      {lab.objectives.map((objective, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {lab.tools.map((tool, idx) => (
                        <Badge key={idx} variant="outline" className="bg-gray-100">
                          {tool}
                        </Badge>
                      ))}
                    </div>
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
