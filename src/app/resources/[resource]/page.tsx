"use client";
import PageHeader from "@/components/PageHeader";
import React, { use } from "react";

const ResourceDetails = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);

  return (
    <div>
      <PageHeader
        title="Resources"
        links={[
          { title: "Home", url: "/" },
          { title: "Resources", url: "/resources" },
        ]}
      />
      <p>{slug}</p>
    </div>
  );
};

export default ResourceDetails;
