import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = ["resource-1", "resource-2"];

  return slugs.map((slug) => ({ resource: slug }));
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Resource Details",
};

export default function ResourceDetails({
  params,
}: {
  params: { resource: string };
}) {
  return (
    <div>
      <PageHeader
        title="Resources"
        links={[
          { title: "Home", url: "/" },
          { title: "Resources", url: "/resources" },
        ]}
      />
      <p>{params.resource}</p>
    </div>
  );
}
