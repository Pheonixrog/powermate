// app/privacy/page.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Introduction',
      content: `This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.`
    },
    {
      title: 'Interpretation and Definitions',
      content: `Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

Definitions
For the purposes of this Privacy Policy:
• Account means a unique account created for You to access our Service or parts of our Service.
• Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
• Application refers to Powermate, the software program provided by the Company.
• Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Power Insights Company, New Azadi (Atconz) S3/17.
• Country refers to: Iraq
• Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
• Personal Data is any information that relates to an identified or identifiable individual.
• Service refers to the Application.
• Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
• Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
• You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`
    },
    {
      title: 'Types of Data Collected',
      content: `Personal Data
While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
• Email address
• First name and last name
• Phone number
• Usage Data

Usage Data
Usage Data is collected automatically when using the Service. When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.

Information Collected while Using the Application
While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:
• Pictures and other information from your Device's camera and photo library

We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.

You can enable or disable access to this information at any time, through Your Device settings.`
    },
    {
      title: 'Use of Your Personal Data',
      content: `The Company may use Personal Data for the following purposes:
• To provide and maintain our Service, including to monitor the usage of our Service.
• To manage Your Account: to manage Your registration as a user of the Service.
• For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
• To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.
• To provide You with news, special offers and general information about other goods, services and events.
• To manage Your requests: To attend and manage Your requests to Us.
• For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.

We do not share your personal information with third parties and are required by contract not to use your personal information other than to provide the services requested by us.`
    },
    {
      title: 'Retention of Your Personal Data',
      content: `The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.

The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.`
    },
    {
      title: 'Delete Your Personal Data',
      content: `You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.

Our Service may give You the ability to delete certain information about You from within the Service.

You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.

Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.`
    },
    {
      title: 'Security of Your Personal Data',
      content: `The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.`
    },
    {
      title: 'Children\'s Privacy',
      content: `Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.

If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.`
    },
    {
      title: 'Links to Other Websites',
      content: `Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.

We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.`
    },
    {
      title: 'Changes to this Privacy Policy',
      content: `We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.

We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`
    },
    {
      title: 'Payment Data',
      content: `If you make any direct purchases from us (that is, purchases not made through an app store), your credit card or debit card information (such as card type and expiration date) and other financial data that we need to process your payment may be collected and stored by the payment processors with which we work. In addition, the payment processors generally provide us with some limited information related to you, such as a unique token that enables you to make additional purchases using the information they've stored, including recurring payments if you authorize automatic renewals, and your card's type, expiration date, and certain digits of your card number.`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [expandedSection, setExpandedSection] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">Privacy Policy</h1>
        <p className="text-gray-400 mb-12 text-center">Last updated: Jan 8, 2025</p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
              >
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <motion.div
                  animate={{ rotate: expandedSection === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: expandedSection === index ? 'auto' : 0,
                  opacity: expandedSection === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-300 whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gray-400"
        >
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">By email: info@powermate.app</p>
          <p>Visit us at: www.powermate.app</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;