import { industriesData } from "@/app/data/industries";
import IndustryDetailClient from "./IndustryDetailClient";

export function generateStaticParams() {
  return Object.keys(industriesData).map((id) => ({
    industryId: id,
  }));
}

export default function IndustryDetailPage() {
  return <IndustryDetailClient />;
}
