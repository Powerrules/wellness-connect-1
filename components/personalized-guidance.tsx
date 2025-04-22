import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function PersonalizedGuidance() {
  const router = useRouter();
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="rounded-full border p-4 text-primary">
            <Heart className="h-12 w-12" />
          </div>
          <h1 className="text-4xl font-bold">Personalized Guidance</h1>
          <p className="max-w-3xl text-muted-foreground md:text-lg">
            Get tailored recommendations based on your unique mental health needs. Our system analyzes your inputs and provides personalized advice to help you on your journey.
          </p>
          <div className="w-full max-w-3xl space-y-6 text-left">
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">1. Self-Assessment</h3>
              <p className="text-muted-foreground">Take a short assessment to understand your current mental health status and receive personalized suggestions.</p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">2. Recommended Practices</h3>
              <p className="text-muted-foreground">Explore meditation, journaling, and relaxation exercises based on your needs.</p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">3. Connect with Experts</h3>
              <p className="text-muted-foreground">Find professional help tailored to your specific situation.</p>
            </div>
          </div>
          <Button onClick={() => router.push("/")}>Back to Home</Button>
        </div>
      </div>
    </section>
  );
}
