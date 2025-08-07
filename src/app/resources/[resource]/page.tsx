import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

type Props = {
  params: {
    resource: string;
  };
};

export async function generateStaticParams() {
  const slugs = ["resource-1", "resource-2"];
  return slugs.map((slug) => ({ resource: slug }));
}

export const dynamicParams = false; // optional

export const metadata: Metadata = {
  title: "Resource Details",
};

export default function ResourceDetails({ params }: Props) {
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
      <p>{resource}</p>
    </div>
  );
}
