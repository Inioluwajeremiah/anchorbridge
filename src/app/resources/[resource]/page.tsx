// src/app/resources/[resource]/page.tsx
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

type PageProps = {
  params: {
    resource: string;
  };
};

export function generateStaticParams() {
  const slugs = ["resource-1", "resource-2"]; // replace with your actual slugs or fetch from API
  return slugs.map((slug) => ({
    resource: slug,
  }));
}

export const dynamicParams = false; // optional — use only if all params are known at build time

export const metadata: Metadata = {
  title: "Resource Details",
};

export default function ResourceDetails({ params }: PageProps) {
  const { resource } = params;

  return (
    <div>
      <PageHeader
        title="Resources"
        links={[
          { title: "Home", url: "/" },
          { title: "Resources", url: "/resources" },
        ]}
      />
      <p>Resource: {resource}</p>
    </div>
  );
}
