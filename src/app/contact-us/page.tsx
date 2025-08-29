import PageHeader from "@/components/PageHeader";
import Contact from "@/components/contactus/Contact";
import ContactForm from "@/components/contactus/ContactForm";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        links={[
          { title: "Home", url: "/" },
          { title: "Contact Us", url: "/contact-us" },
        ]}
      />
      <div className="w-[94%] lg:container mx-auto px-5 flex flex-col lg:flex-row items-start py-20 gap-10">
        <ContactForm />
        <Contact />
      </div>
    </div>
  );
};

export default ContactUsPage;
