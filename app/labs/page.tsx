import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Download,
  FileText,
  Layers3,
  Brain,
  Code2,
} from "lucide-react"

const GITHUB_REPO = "sravani919/Privacy-Compliance-Education-1"
const GITHUB_BRANCH = "main"
const GITHUB_LABS_PATH = "public/labs"

function makeColabUrl(fileName: string) {
  const encodedFileName = fileName
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")

  return `https://colab.research.google.com/github/${GITHUB_REPO}/blob/${GITHUB_BRANCH}/${GITHUB_LABS_PATH}/${encodedFileName}`
}

const labs = [
  {
    id: 1,
    title: "Lab 1: Privacy Policy Analysis Using NLP",
    subtitle: "Keyword-based privacy policy sentence detection",
    description:
      "Students use natural language processing tools to parse privacy policies and identify privacy-relevant sentences such as data types, actions, purposes, and third-party recipients.",
    details: [
      "Understand what a data practice sentence is",
      "Work with a real-world privacy policy dataset",
      "Clean and preprocess text",
      "Build a keyword-based detection system",
      "Evaluate predictions with precision, recall, and F1-score",
    ],
    tools: ["Python", "pandas", "NLTK", "scikit-learn"],
    fileName: "LAB_1_Privacy_Policy_Analysis_Using_NLP_&_Keyword_Based_Detection.ipynb",
    fileLabel: "Notebook",
  },
  {
    id: 2,
    title: "Lab 2: Learning-Based Privacy Policy Analysis",
    subtitle: "Binary classification with TF-IDF and ML models",
    description:
      "Students train machine learning models to classify whether a sentence describes a data practice. This lab compares Logistic Regression, Naive Bayes, and SVM models.",
    details: [
      "Download and clean privacy policy text",
      "Split policies into sentences",
      "Generate weak labels using keyword rules",
      "Extract TF-IDF features",
      "Train and compare machine learning models",
    ],
    tools: ["Python", "pandas", "TF-IDF", "scikit-learn"],
    fileName: "Lab_2_Learning_Based_Privacy_Policy_Analysis.ipynb",
    fileLabel: "Notebook",
  },
  {
    id: 3,
    title: "Lab 3: Multi-Class Classification of Data Practices",
    subtitle: "Collect, Share, Store, and Use classification",
    description:
      "Students extend binary classification into multi-class prediction to identify the specific type of data practice described in privacy policy sentences.",
    details: [
      "Understand multi-class classification",
      "Create labels for collect, share, store, and use",
      "Train Logistic Regression and SVM models",
      "Evaluate class-wise precision and recall",
      "Compare binary vs multi-class analysis",
    ],
    tools: ["Python", "pandas", "TF-IDF", "scikit-learn"],
    fileName: "Lab_3_Multi_Class_Classification_of_Data_Practices.ipynb",
    fileLabel: "Notebook",
  },
]

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hands-on Labs
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical hands-on labs for privacy policy analysis, machine
              learning, and privacy compliance education.
            </p>
          </div>

          <Card className="mb-10 shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Layers3 className="w-6 h-6 text-blue-600" />
                Two-Step Privacy Non-Compliance Detection
              </CardTitle>
            </CardHeader>

            <CardContent className="grid gap-4 md:grid-cols-2 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Step 1 - Extract Privacy Practices
                </h3>
                <p>
                  Extract stated privacy practices from privacy policies using
                  NLP techniques.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Step 2 - Detect Violations
                </h3>
                <p>
                  Compare extracted practices against actual code behavior using
                  machine learning and analysis techniques.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {labs.map((lab) => {
              const colabUrl = makeColabUrl(lab.fileName)
              const downloadUrl = `/labs/${lab.fileName}`

              return (
                <Card
                  key={lab.id}
                  className="shadow-sm border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-col sm:flex-row sm:items-center">
                      <div>
                        <div className="flex items-center gap-3">
                          <Badge className="bg-orange-500 text-white px-3 py-1">
                            Lab {lab.id}
                          </Badge>
                          <CardTitle className="text-2xl">
                            {lab.title}
                          </CardTitle>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          {lab.subtitle}
                        </p>
                      </div>

                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {lab.fileLabel}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      {lab.description}
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          Learning Objectives
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          {lab.details.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-blue-600" />
                          Tools & Technologies
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {lab.tools.map((tool) => (
                            <Badge
                              key={tool}
                              variant="outline"
                              className="bg-gray-100"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <a
                            href={colabUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                              <FileText className="w-4 h-4 mr-2" />
                              Open in Colab
                            </Button>
                          </a>

                          <a href={downloadUrl} download>
                            <Button variant="outline">
                              <Download className="w-4 h-4 mr-2" />
                              Download Notebook
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="mt-10 shadow-sm border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Brain className="w-6 h-6 text-green-600" />
                Why These Labs Matter
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Lab 1 introduces privacy policy analysis using NLP and
                keyword-based detection. Lab 2 extends this approach with machine
                learning models such as Logistic Regression, Naive Bayes, and
                SVM.
              </p>
              <p>
                Lab 3 moves from binary classification to multi-class
                classification, allowing students to identify whether privacy
                policies describe collecting, sharing, storing, or using data.
              </p>
              <p>
                Together, these labs demonstrate how privacy compliance analysis
                evolves from simple rule-based approaches to more advanced
                learning-based methods.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}