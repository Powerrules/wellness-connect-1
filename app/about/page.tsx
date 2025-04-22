import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CrisisSupport } from "@/components/crisis-support"

export default function AboutPage() {
  return (
    <main className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About WellnessConnect</h1>
          <p className="text-muted-foreground md:text-xl">
            Our mission is to make mental health support accessible to everyone.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p>
            WellnessConnect was founded with a simple but powerful vision: to create a world where mental health support
            is accessible, stigma-free, and personalized. We believe that everyone deserves access to tools and
            resources that can help them navigate life's challenges and improve their mental wellbeing.
          </p>
          <p>
            Our team consists of mental health professionals, technologists, and advocates who are passionate about
            leveraging technology to make mental health support more accessible and effective.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <p>
            We combine evidence-based mental health practices with innovative technology to provide support that is:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Accessible</strong> - Available 24/7 from any device
            </li>
            <li>
              <strong>Personalized</strong> - Tailored to your unique needs and preferences
            </li>
            <li>
              <strong>Confidential</strong> - Your privacy is our priority
            </li>
            <li>
              <strong>Supportive</strong> - Designed to complement professional care
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our AI Assistant</h2>
          <p>
            Our AI-powered chatbot is designed to provide immediate support and guidance. While it's not a replacement
            for professional mental health care, it can:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide information about mental health conditions</li>
            <li>Suggest coping strategies for common challenges</li>
            <li>Guide you to appropriate resources</li>
            <li>Offer a listening ear when you need to express yourself</li>
          </ul>
          <p className="mt-4">
            We continuously improve our AI with input from mental health professionals to ensure it provides helpful,
            accurate, and supportive guidance.
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/resources">
            <Button size="lg" className="px-8">
              Explore Our Resources
            </Button>
          </Link>
        </div>
      </div>
      <CrisisSupport />
    </main>
  )
}

