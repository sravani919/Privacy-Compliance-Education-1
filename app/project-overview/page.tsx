import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Project Overview
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive overview of the Privacy Compliance Education project
              and the privacy policy analysis work behind it.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Privacy policy analysis focuses on understanding how websites,
                  apps, and online services describe the way they collect, use,
                  store, and share user data. In practice, privacy policies are
                  often long, complex, and difficult for regular users to read.
                  As a result, people frequently agree to policies without fully
                  understanding what they contain.
                </p>
                <p>
                  This project explores how Natural Language Processing, machine
                  learning, and related analysis methods can help identify
                  important privacy statements in policy text and make privacy
                  compliance easier to study. The goal is to support privacy
                  education, research, and awareness by turning complex policy
                  language into something more structured and understandable.
                </p>
                <p>
                  The project also brings together multiple institutions working
                  collaboratively to design resources for privacy education,
                  including curriculum modules, hands-on labs, and research
                  activities that help students learn how privacy compliance
                  works in real-world systems.
                </p>

                <div className="pt-2">
                  <a
                    href="/slides/Privacy-Policy-Analysis-Using-NLP-Techniques.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      View Presentation Slides
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Why Privacy Policy Analysis Matters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Privacy policies are important because they explain how
                  personal data is handled, but they are often written in dense
                  and technical language. Most users do not read them carefully,
                  and even when they do, the meaning is not always obvious.
                  This can lead to people agreeing to data collection or sharing
                  practices they may not fully realize.
                </p>
                <p>
                  Privacy matters because user data can be collected, shared, or
                  misused without clear visibility. When companies are not
                  transparent, trust erodes, and users may be harmed. For this
                  reason, privacy is both a legal and ethical responsibility.
                </p>
                <p>
                  Regulations such as GDPR, COPPA, and HIPAA were created to
                  protect user data and ensure that organizations handle
                  information responsibly. Privacy policy analysis helps us
                  better understand whether those commitments are actually being
                  communicated clearly.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">What is Privacy Compliance?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Privacy compliance means making sure organizations follow data
                  protection laws and privacy requirements when handling user
                  information. This includes how data is collected, used,
                  stored, and shared.
                </p>
                <p>
                  For example, when a user signs up for an app, the service
                  should clearly say what data it collects and how that data
                  will be used. Good privacy compliance ensures that user data
                  is handled responsibly, transparently, and legally.
                </p>
                <p>
                  Compliance is important not only because violations can lead
                  to fines and legal consequences, but also because it helps
                  build user trust and improves accountability.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">Project Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border bg-white p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      1. Curriculum Modules
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Six educational modules will be developed to integrate
                      privacy topics into computer science courses. These modules
                      are intended to help students learn privacy concepts in a
                      practical and structured way.
                    </p>
                  </div>

                  <div className="rounded-lg border bg-white p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2. Hands-on Labs
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      A set of practical labs will provide students with guided,
                      interactive experiences on analyzing privacy policies,
                      detecting non-compliance, and exploring privacy-focused
                      software tools.
                    </p>
                  </div>

                  <div className="rounded-lg border bg-white p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      3. PRICOMP Research Platform
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      The PRICOMP platform will serve as a collaborative research
                      environment that brings together tools, datasets, and
                      sample experiments related to privacy compliance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Privacy Compliance Analysis Framework
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Privacy compliance analysis combines multiple techniques to
                  compare what a policy says with what an application actually
                  does. The process begins with input documents such as privacy
                  policies and regulations. These texts are then analyzed using
                  NLP, machine learning, and large language models to identify
                  disclosed data practices.
                </p>
                <p>
                  At the same time, applications such as Android apps, browser
                  extensions, or voice apps can be analyzed using static,
                  dynamic, and network analysis to observe real behavior. The
                  key goal is to compare declared behavior with actual behavior
                  and detect possible non-compliance.
                </p>
                <p>
                  In simple terms, the framework reads the policy, analyzes the
                  app behavior, and then compares both sides to find mismatches
                  and violations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Role of Privacy Policy Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Privacy policies explain how user data is handled in three
                  main ways: data collection, data usage, and data sharing. A
                  policy may describe what information is collected, how that
                  information is used, and whether it is shared with third
                  parties such as advertisers or analytics providers.
                </p>
                <p>
                  By analyzing these policies, we can better understand what
                  companies are doing with user data. This makes privacy policy
                  analysis the first step in checking compliance and identifying
                  whether an organization is being transparent.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">
                  What is a Data Practice Sentence?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A data practice sentence clearly explains how user data is
                  handled. It usually includes what data is involved, what
                  action is taken, and why the action happens.
                </p>
                <p>
                  For example, the sentence{" "}
                  <span className="font-medium">
                    “We collect your email and share it with advertisers for
                    personalized ads.”
                  </span>{" "}
                  contains the data item, action, and purpose. In contrast, a
                  sentence like “This policy may be updated” is not a data
                  practice sentence because it does not describe user data
                  handling.
                </p>
                <p>
                  A simple rule for identifying these sentences is:
                  <span className="font-medium">
                    {" "}
                    Action + (Data or Purpose or Recipient)
                  </span>
                  .
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">Our Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The approach starts by collecting a dataset of real-world
                  privacy policies. The text is broken into sentences and then
                  cleaned through preprocessing steps such as lowercasing,
                  removing punctuation, and normalizing spacing.
                </p>
                <p>
                  After preprocessing, keyword-based detection is used to find
                  important data practice sentences. The method looks for
                  patterns involving data types, actions, recipients, and
                  purposes. This helps turn complex privacy policies into
                  structured and analyzable data.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Dataset, Preprocessing, and Detection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The study uses a real-world privacy policy dataset collected
                  from different applications and services. It contains
                  thousands of sentences that describe how user data is
                  handled, including data types, actions, purposes, and
                  recipients.
                </p>
                <p>
                  Text preprocessing is used to clean the data before analysis.
                  For example, the sentence “We Collect your Email!!!” is
                  normalized to “we collect your email.” This kind of cleaning
                  improves consistency and supports more accurate analysis.
                </p>
                <p>
                  Keyword-based detection then identifies sentences that contain
                  privacy-relevant information. This works well for clear policy
                  statements, but it can miss vague or implicit language.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Learning-Based and Multi-Class Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  To go beyond simple keyword matching, the project also
                  explores learning-based approaches. In this method, raw
                  sentences are converted into numerical features using
                  techniques such as TF-IDF, and models like Logistic
                  Regression, Naive Bayes, or SVM can be trained to classify
                  whether a sentence is a data practice sentence.
                </p>
                <p>
                  The project also supports multi-class classification, where
                  the goal is not just to detect whether a sentence is
                  privacy-related but also to determine the type of action
                  involved, such as collect, share, store, or use. This
                  provides a deeper understanding of how data is handled in
                  privacy policies.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Challenges and Limitations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Privacy policies often use vague, complex, and highly varied
                  language, which makes automated analysis difficult. Some
                  sentences contain implicit meanings or do not clearly mention a
                  data item or action, so simple rules may fail to recognize
                  them.
                </p>
                <p>
                  Another challenge is that automatically generated labels can
                  reduce accuracy, and some categories overlap in meaning. For
                  example, collect and store may sometimes look similar to a
                  model. These issues show why privacy policy analysis benefits
                  from smarter NLP and machine learning methods.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">Intellectual Merit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  This project contributes educational and research innovations
                  by connecting privacy policy analysis with practical classroom
                  learning. It gives students experience with real privacy
                  problems and shows how NLP and machine learning can be used to
                  study policy language.
                </p>
                <p>
                  The project supports adaptable learning materials that can
                  grow over time and helps prepare students to think critically
                  about privacy, transparency, and compliance in modern software
                  systems.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Relevance to Privacy Compliance Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Privacy is a key component of secure and trustworthy software
                  systems. This project aligns with the broader goal of
                  improving privacy and cybersecurity education by helping
                  students understand how policies, laws, and technical systems
                  interact.
                </p>
                <p>
                  The project also helps increase awareness among students and
                  supports the development of educational resources that can be
                  shared with a wider academic community.
                </p>
              </CardContent>
            </Card>

            <div className="mt-4 flex justify-center">
              <a
                href="/slides/Privacy-Policy-Analysis-Using-NLP-Techniques.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="px-6">
                  Open Presentation PDF Again
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}