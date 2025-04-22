import { Brain, Heart, MessageCircle, Shield } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Support You</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              WellnessConnect provides multiple ways to support your mental health journey.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
            <div className="rounded-full border p-4 text-primary">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">AI-Powered Support</h3>
            <p className="text-center text-muted-foreground">
              Our AI assistant provides immediate support and guidance whenever you need it.
            </p>
          </div>
          <a href="#resources" className="no-underline">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <div className="rounded-full border p-4 text-primary">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Evidence-Based Resources</h3>
              <p className="text-center text-muted-foreground">
                Access a library of resources developed by mental health professionals.
              </p>
            </div>
          </a>
          <a className="no-underline">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105" >
            <div className="rounded-full border p-4 text-primary">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Crisis Support</h3>
            <p className="text-center text-muted-foreground">
              Immediate access to crisis resources when you need urgent help.
            </p>
          </div>
          </a>
          <a href="#personal" className="no-underline">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
            <div className="rounded-full border p-4 text-primary">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Personalized Guidance</h3>
            <p className="text-center text-muted-foreground">
              Tailored recommendations based on your unique needs and preferences.
            </p>
          </div>
          </a>
        </div>
      </div>
    </section>
  )
}

