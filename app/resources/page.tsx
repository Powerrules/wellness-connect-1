import { ResourceCard } from "@/components/resource-card"
import { CrisisSupport } from "@/components/crisis-support"

export default function ResourcesPage() {
  return (
    <main className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mental Health Resources</h1>
          <p className="text-muted-foreground md:text-xl">
            Access our curated collection of mental health resources and support materials.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ResourceCard
            title="Anxiety Management"
            description="Learn techniques to manage anxiety and reduce stress in your daily life."
            link="/resources/anxiety"
            icon="Brain"
          />
          <ResourceCard
            title="Depression Support"
            description="Resources and guidance for understanding and managing depression."
            link="/resources/depression"
            icon="Heart"
          />
          <ResourceCard
            title="Mindfulness Practices"
            description="Discover mindfulness exercises to improve mental clarity and wellbeing."
            link="/resources/mindfulness"
            icon="Sparkles"
          />
          <ResourceCard
            title="Sleep Improvement"
            description="Tips and techniques for better sleep and improved mental health."
            link="/resources/sleep"
            icon="Moon"
          />
          <ResourceCard
            title="Stress Reduction"
            description="Effective strategies to reduce stress and improve your quality of life."
            link="/resources/stress"
            icon="Leaf"
          />
          <ResourceCard
            title="Self-Care Practices"
            description="Guidance on developing healthy self-care routines and habits."
            link="/resources/self-care"
            icon="Heart"
          />
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Professional Support</h2>
          <p className="mb-4">
            While our resources can be helpful, sometimes professional support is needed. Consider reaching out to
            mental health professionals if you're experiencing persistent or severe symptoms.
          </p>
          <p>Our AI chatbot can also help guide you to appropriate resources based on your needs.</p>
        </div>
      </div>
      <CrisisSupport />
    </main>
  )
}

