import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <span className="font-mono text-8xl text-text-muted">404</span>
        <h1 className="font-display text-2xl text-text-primary mt-4">
          Page not found
        </h1>
        <p className="text-text-secondary mt-2">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <Button href="/" size="md">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
