import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Moon } from "lucide-react"

export function ResourcesSection() {
  return (
    <section id="resources" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mental Health Resources</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our curated collection of resources to support your mental wellbeing.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Brain className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Anxiety Management</CardTitle>
                <CardDescription>Techniques to manage anxiety</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn effective strategies to recognize and manage anxiety symptoms in your daily life.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/resources/anxiety" className="w-full">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Heart className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Self-Care Practices</CardTitle>
                <CardDescription>Prioritize your wellbeing</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Discover practical self-care routines that can help improve your mental health and resilience.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/resources/self-care" className="w-full">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Moon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>Sleep Improvement</CardTitle>
                <CardDescription>Better sleep for better health</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore techniques to improve your sleep quality and establish healthy sleep patterns.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/resources/sleep" className="w-full">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <Link href="/resources">
            <Button size="lg">View All Resources</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

