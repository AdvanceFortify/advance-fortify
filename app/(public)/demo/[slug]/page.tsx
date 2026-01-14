import DemoCinematic from "@/components/DemoCinematic";

export const dynamicParams = false;

const VALID_DEMOS = ["luxury-landing", "business-website", "ecommerce", "local-service"] as const;

export function generateStaticParams() {
  return VALID_DEMOS.map((slug) => ({ slug }));
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DemoCinematic slug={slug} />;
}
