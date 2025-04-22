export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from people who have found support through WellnessConnect.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                "The AI assistant helped me find coping strategies for my anxiety that actually work. It's like having a
                supportive friend available whenever I need one."
              </p>
            </div>
            <div>
              <p className="font-medium">Sarah K.</p>
              <p className="text-sm text-muted-foreground">Student</p>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                "I appreciate having access to quality mental health resources all in one place. The crisis support
                feature was there for me during a really difficult time."
              </p>
            </div>
            <div>
              <p className="font-medium">Michael T.</p>
              <p className="text-sm text-muted-foreground">Healthcare Worker</p>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                "As someone living in a rural area, finding mental health support was challenging. WellnessConnect has
                been a lifeline for me when I needed guidance."
              </p>
            </div>
            <div>
              <p className="font-medium">Jamie L.</p>
              <p className="text-sm text-muted-foreground">Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

