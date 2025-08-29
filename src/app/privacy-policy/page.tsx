import PageHeader from "@/components/PageHeader";
import React from "react";

const privacyData = [
  {
    id: 1,
    title: "Who We Are",
    content:
      "Anchor Bridge Consulting is a U.S.-based company operating globally, with a strong presence in Africa. We provide CRM solutions, technical consulting, talent sourcing, training, and placement services. Our mission is to empower organizations and individuals through People, Process, and Technology.",
  },
  {
    id: 2,
    title: "Information We Collect",
    content: "We may collect the following types of information:",
    subsections: [
      {
        subtitle: "A. Personal Information",
        items: [
          "Full name, email address, phone number",
          "Residential address or location",
          "Employment and educational background",
          "CVs, resumes, portfolios, and social profiles",
          "Identification documents (where applicable)",
        ],
      },
      {
        subtitle: "B. Technical Information",
        items: [
          "IP address, browser type, and device information",
          "Usage data (pages visited, time on site, interactions)",
          "Cookies and tracking data for analytics and improvement",
        ],
      },
      {
        subtitle: "C. Client & Candidate Information",
        items: [
          "Company name, job titles, and hiring requirements (from clients)",
          "Candidate skill assessments, interview results, and onboarding details",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "How We Use Your Information",
    content: "We use collected information to:",
    items: [
      "Provide and improve our services",
      "Match candidates with client job opportunities",
      "Conduct interviews and assessments",
      "Send notifications and updates",
      "Manage user accounts and communication",
      "Comply with legal obligations",
      "Analyze platform usage to enhance performance",
    ],
  },
  {
    id: 4,
    title: "Sharing of Information",
    content: "We may share your information with:",
    items: [
      "Clients seeking talent, strictly for hiring purposes",
      "Third-party service providers (HR platforms, background checks)",
      "Legal authorities if required by law or regulation",
      "Partner companies assisting with training and placement",
    ],
    note: "We do not sell your personal data to third parties.",
  },
  {
    id: 5,
    title: "Data Retention",
    content:
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, including for legal, regulatory, or business requirements. You may request deletion of your data at any time by contacting us.",
  },
  {
    id: 6,
    title: "Your Rights",
    content: "Depending on your location, you may have the following rights:",
    items: [
      "Right to access and correct your information",
      "Right to request deletion or restriction of data",
      "Right to object to processing",
      "Right to data portability",
      "Right to withdraw consent at any time",
    ],
    note: "To exercise these rights, contact us at: [Insert Email]",
  },
  {
    id: 7,
    title: "Data Security",
    content:
      "We use industry-standard security protocols and measures to protect your information. This includes encryption, access control, secure servers, and routine security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    id: 8,
    title: "International Data Transfers",
    content:
      "Given our global operations, your information may be processed in countries outside your own. We ensure appropriate safeguards are in place to protect your data in line with applicable data protection laws (e.g., GDPR, NDPR).",
  },
  {
    id: 9,
    title: "Cookies and Tracking Technologies",
    content: "We use cookies and similar technologies to:",
    items: [
      "Improve website functionality",
      "Understand usage behavior",
      "Deliver personalized content and advertisements",
    ],
    note: "You can adjust your browser settings to manage cookie preferences.",
  },
  {
    id: 10,
    title: "Children’s Privacy",
    content:
      "Our services are not intended for children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.",
  },
  {
    id: 11,
    title: "SMS Consent Disclosure",
    content:
      "When you provide us with your phone number through our website (e.g., via a contact form), we are required to obtain your consent to send you SMS messages.",
    disclosure:
      "▢ I agree to receive communications by text message regarding [Type of messaging] from Anchor Bridge Consulting. You may opt-out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply.",
  },
  {
    id: 12,
    title: "SMS Terms & Conditions",
    content: "Our SMS service includes the following terms and conditions:",
    items: [
      "Product Description: By providing your mobile phone number, you consent to receive SMS messages from Anchor Bridge Consulting related to [e.g., order updates, promotional offers, or account notifications].",
      "Message Frequency: Message frequency may vary. You may receive [X] SMS messages per [week/month].",
      "Message and Data Rates: Standard message and data rates may apply.",
      "Opting Out: You may opt-out at any time by replying “STOP” to any SMS message you receive from us. A confirmation message will follow, and we will stop sending further messages.",
      "Help and Support: For assistance, reply “HELP” to any SMS message or contact our support team at [support contact info].",
      "Privacy: Your phone number will be handled in accordance with our Privacy Policy. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.",
    ],
  },
  {
    id: 13,
    title: "Updates to this Policy",
    content:
      "We may update this Privacy Policy periodically. The updated version will be posted on our website with the “Last Updated” date. Continued use of our services after changes implies your consent to the revised terms.",
  },
  // {
  //   id: 14,
  //   title: "Contact Us",
  //   content:
  //     "If you have any questions or concerns regarding this policy or your personal data, please contact us:",
  //   items: [
  //     "Anchor Bridge Consulting",
  //     "Email: in**@********************ng.com",
  //     "Website: www.anchorbridgeconsulting.com",
  //     "Address: Fort Lauderdale, FL",
  //   ],
  // },
];

const agreementStatement =
  "I agree to receive communications by text message regarding [Type of messaging] from Anchor Bridge Consulting. You may opt-out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply. You may review our Privacy Policy to learn how your data is used.";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        links={[
          { title: "Home", url: "/" },
          { title: "Privacy Policy", url: "/privacy-policy" },
        ]}
      />
      <div className="w-[94%] lg:container mx-auto text-text-color-dark py-10 md:py-14 lg:py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-link-color-dark font-bold">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 lg:mt-8 font-bold">
          Effective Date: 5th/May/2025 <br /> Last Updated: 1th/June/2025
        </p>
        <p className="mt-2 text-base lg:text-lg">
          Anchor Bridge Consulting (“Company”, “we”, “our”, or “us”) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you
          interact with us through our website, applications, services,
          recruitment processes, and any other means.
        </p>
        <p className="mt-2 text-base lg:text-lg">
          By accessing or using our services, you agree to the practices
          described in this policy. If you do not agree with the terms, please
          do not use our services.
        </p>

        {privacyData.map((item, index) => (
          <div key={item.id}>
            <h1 className="text-primary-color-two text-xl md:text-2xl lg:text-3xl font-semibold mt-4">
              {`${index + 1}. ${item.title}`}
            </h1>
            {item?.content && (
              <p className="text-text-color-dark text-base md:text-lg mt-1">
                {item?.content}
              </p>
            )}
            {/* terms and conditons */}

            {item.title === "SMS Consent Disclosure" && (
              <div className="flex flex-row items-start justify-start gap-4 mt-4">
                <input type="checkbox" className="mt-1" />
                <p className="text-base lg:text-lg font-semibold">
                  {agreementStatement}{" "}
                </p>
              </div>
            )}
            {/* if item has subsections */}
            {item?.subsections &&
              item?.subsections.length > 0 &&
              item.subsections.map((subsection, subsectionIndex) => (
                <div key={subsectionIndex}>
                  <h2 className="mt-4 text-base lg:text-lg text-text-color-dark font-semibold  ">
                    {subsection?.subtitle}
                  </h2>
                  {subsection.items.map(
                    (subsectionItem, subsectionItemIndex) => (
                      <li
                        key={subsectionItemIndex}
                        className="mt-2 text-text-color-dark text-base lg:text-lg"
                      >
                        {subsectionItem}
                      </li>
                    )
                  )}
                </div>
              ))}

            {/* if item has list of items  */}
            {item?.items &&
              item?.items.length > 0 &&
              item.items.map((subsectionItem, subsectionItemKey) => {
                // for SMS Terms & Conditions and Contact us
                // condtionally check contact to display font in italics and remove list style
                // i moved contact us out of here
                const [title, content] = subsectionItem.includes(":")
                  ? subsectionItem.split(":")
                  : "";
                if (title && content) {
                  return (
                    <li
                      key={subsectionItemKey}
                      className={`${
                        index === privacyData.length - 1 && "list-none italic"
                      } mt-2 text-text-color-dark text-base lg:text-lg`}
                    >
                      <span
                        className={`${
                          index === privacyData.length - 1
                            ? "font-normal"
                            : "font-semibold"
                        }`}
                      >
                        {title}:
                      </span>{" "}
                      {content}
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={subsectionItemKey}
                      className={`${
                        index === privacyData.length - 1 && "italic list-none"
                      } mt-2 text-text-color-dark text-base lg:text-lg`}
                    >
                      {subsectionItem}
                    </li>
                  );
                }
              })}
          </div>
        ))}

        {/* contact us */}

        <h1 className="text-primary-color-two text-xl md:text-2xl lg:text-3xl font-semibold mt-4">
          14. Contact Us
        </h1>
        <p className="text-text-color-dark text-base md:text-lg mt-1">
          If you have any questions or concerns regarding this policy or your
          personal data, please contact us:
        </p>

        <ul className="list-none italic">
          <li className="mt-2 text-base lg:text-lg">
            Anchor Bridge Consulting
          </li>
          <li className="mt-2 text-base lg:text-lg">
            Email: in<span className="blur-xs bg-blue-700/40">**</span>@
            <span className="blur-xs bg-blue-700/40">********************</span>
            ng.com
          </li>
          <li className="mt-2 text-base lg:text-lg">
            Website:{" "}
            <span className="text-blue-700">
              www.anchorbridgeconsulting.com{" "}
            </span>
          </li>
          <li className="mt-2 text-base lg:text-lg">
            Address: <span>Fort Lauderdale, FL</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
