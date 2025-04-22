import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Heart, Leaf, Moon, Sparkles, type LucideIcon } from "lucide-react"

interface ResourceCardProps {
  title: string
  description: string
  link: string
  icon: string
}

export function ResourceCard({ title, description, link, icon }: ResourceCardProps) {
  const IconMap: Record<string, LucideIcon> = {
    Brain,
    Heart,
    Leaf,
    Moon,
    Sparkles,
  }

  const IconComponent = IconMap[icon] || Brain

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <IconComponent className="h-8 w-8 text-primary" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

