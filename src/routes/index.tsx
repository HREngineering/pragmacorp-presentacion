import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/presentation";

export const Route = createFileRoute("/")({
  component: Presentation,
});
