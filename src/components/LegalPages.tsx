import Breadcrumb from '@/components/Breadcrumb';
import { siteConfig } from '@/data/siteConfig';

interface LegalPageProps {
  title: string;
  description: string;
  slug: string;
  content: { heading: string; paragraphs: string[] }[];
}

function LegalPage({ title, description: _description, slug: _slug, content }: LegalPageProps) {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: title }]} />

      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container-luxury max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 border border-gold-500/30 rounded-full text-gold-600 text-xs font-semibold tracking-wider uppercase mb-4 bg-gold-50">
              Official Documentation
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a2e] font-serif mb-4">{title}</h1>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="prose-luxury bg-[#faf6f2] p-8 md:p-12 rounded-3xl border border-gold-200/60 shadow-sm space-y-8">
            {content.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-[#1a1a2e] font-serif mb-3">{section.heading}</h2>
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-gray-700 text-base leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Read the ALINA VIP privacy policy. Learn how we collect, use, and protect your personal information."
      slug="privacy-policy"
      content={[
        {
          heading: 'Introduction',
          paragraphs: [
            'At ALINA VIP, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website and services. By accessing our website or using our services, you consent to the practices described in this policy.',
            'We are committed to maintaining the highest standards of confidentiality and discretion in all our interactions with clients. This policy is designed to be transparent and comprehensive, so you can understand exactly how your information is handled.',
          ],
        },
        {
          heading: 'Information We Collect',
          paragraphs: [
            'When you contact us to make a booking or inquiry, we may collect the following types of information: your name, phone number, email address (if provided), preferred location, and any preferences or requirements you share with our booking team.',
            'We do not collect any information that you do not voluntarily provide. We do not use tracking cookies for advertising purposes, and we do not sell or share your information with any third parties.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          paragraphs: [
            'The information you provide is used solely for the purpose of arranging your booking and providing our service. Specifically, we use your contact information to communicate with you about your booking, confirm details, and provide any necessary updates.',
            'We may also use your information to improve our service and to respond to any inquiries or feedback you provide. We do not use your information for marketing purposes without your explicit consent.',
          ],
        },
        {
          heading: 'Information Storage and Security',
          paragraphs: [
            'All client information is stored securely and is accessible only to authorized members of our booking team. We employ industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.',
            'Booking records are retained only as long as necessary for the purpose of providing our service and are then securely deleted. We do not maintain long-term databases of client information beyond what is necessary for the proper functioning of our service.',
          ],
        },
        {
          heading: 'Discretion and Confidentiality',
          paragraphs: [
            'Discretion is a core value of ALINA VIP. We understand that our clients value their privacy, and we are committed to maintaining complete confidentiality in all our interactions. Your personal information is never shared with our call girls, other clients, or any third parties.',
            'Our call girls are trained to maintain the highest standards of discretion. They do not store or share client information and conduct themselves with professionalism and confidentiality at all times.',
          ],
        },
        {
          heading: 'Your Rights',
          paragraphs: [
            'You have the right to request access to any personal information we hold about you, to request that we correct any inaccuracies, and to request that we delete your information from our records. To exercise any of these rights, please contact us.',
            'You also have the right to withdraw your consent to our use of your information at any time. If you withdraw your consent, we will stop using your information for the purposes described in this policy, subject to any legal obligations to retain certain records.',
          ],
        },
        {
          heading: 'Changes to This Policy',
          paragraphs: [
            'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.',
          ],
        },
        {
          heading: 'Contact Us',
          paragraphs: [
            `If you have any questions about this Privacy Policy or our data practices, please contact us at ${siteConfig.phoneDisplay} or via our contact page.`,
          ],
        },
      ]}
    />
  );
}

export function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      description="Read the ALINA VIP disclaimer. Understand the terms and conditions of using our website and services."
      slug="disclaimer"
      content={[
        {
          heading: 'General Disclaimer',
          paragraphs: [
            'The information provided by ALINA VIP on this website is for general informational purposes only. All information on this website is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on this site.',
            'Under no circumstances shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of this website or reliance on any information provided. Your use of this website and your reliance on any information is solely at your own risk.',
          ],
        },
        {
          heading: 'Age Restriction',
          paragraphs: [
            'This website is intended exclusively for adults who are at least 18 years of age (or the age of majority in their jurisdiction). By accessing this website, you confirm that you are of legal age and that it is legal for you to view such content in your jurisdiction.',
            'If you are under 18 years of age (or the age of majority in your jurisdiction), you must not access this website. We do not knowingly collect information from minors, and we do not allow minors to use our services.',
          ],
        },
        {
          heading: 'Service Disclaimer',
          paragraphs: [
            'ALINA VIP provides escort services only. The call girls listed on this website are independent individuals who provide social escort service. Any activities that may occur during or after an engagement are matters of personal choice between consenting adults.',
            'We do not control, direct, or influence the personal interactions between our clients and call girls. Our role is limited to facilitating introductions and arranging bookings. We are not responsible for the conduct of our call girls or clients during or after an engagement.',
          ],
        },
        {
          heading: 'External Links Disclaimer',
          paragraphs: [
            'This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.',
          ],
        },
        {
          heading: 'Professional Advice Disclaimer',
          paragraphs: [
            'The content on this website, including blog posts and articles, is for informational and entertainment purposes only. It does not constitute professional advice of any kind, including legal, medical, or relationship advice.',
          ],
        },
        {
          heading: 'Jurisdiction',
          paragraphs: [
            'This website is operated from India. The laws of India govern the use of this website and the services provided. If you access this website from outside India, you are responsible for compliance with applicable local laws.',
          ],
        },
      ]}
    />
  );
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Read the ALINA VIP terms and conditions. Understand the terms governing the use of our website and services."
      slug="terms"
      content={[
        {
          heading: 'Introduction',
          paragraphs: [
            'These Terms and Conditions govern your use of the ALINA VIP website and our services. By accessing this website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.',
          ],
        },
        {
          heading: 'Eligibility',
          paragraphs: [
            'To use our services, you must be at least 18 years of age (or the age of majority in your jurisdiction) and legally capable of entering into a binding contract. By using our services, you confirm that you meet these eligibility requirements.',
            'You must also ensure that the use of our services is legal in your jurisdiction. We do not accept responsibility for any legal consequences that may arise from the use of our services in jurisdictions where such services are prohibited.',
          ],
        },
        {
          heading: 'Service Description',
          paragraphs: [
            'ALINA VIP provides a platform for booking luxury escort services. Our role is to facilitate introductions between clients and call girls and to arrange bookings. The call girls listed on our website are independent individuals who provide social escort service.',
            'We do not guarantee the availability of any specific call girl at any given time. Call Girl availability is subject to change, and we reserve the right to substitute a call girl if the originally requested call girl is unavailable.',
          ],
        },
        {
          heading: 'Booking and Payment',
          paragraphs: [
            'Bookings are made by contacting our booking team via phone or our website. All bookings are subject to availability and confirmation by our team. We reserve the right to decline any booking request at our discretion.',
            'Payment terms, including rates and accepted payment methods, will be communicated by our booking team at the time of booking. All payments must be made as agreed before or at the time of the engagement.',
          ],
        },
        {
          heading: 'Conduct',
          paragraphs: [
            'Clients are expected to treat our call girls with respect and courtesy at all times. Any form of harassment, abuse, or disrespectful behavior will result in the immediate termination of the engagement and may result in a ban from using our services.',
            'Our call girls reserve the right to decline or terminate an engagement if they feel uncomfortable or unsafe. We support our call girls in exercising this right and will not penalize them for doing so.',
          ],
        },
        {
          heading: 'Cancellation Policy',
          paragraphs: [
            'If you need to cancel a booking, please inform us as early as possible. Cancellations made with sufficient notice may not incur any charges. Late cancellations may be subject to a cancellation fee, which will be communicated at the time of booking.',
            'We reserve the right to cancel a booking if circumstances beyond our control arise. In such cases, we will make every effort to provide a suitable alternative or a full refund of any advance payment.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          paragraphs: [
            'ALINA VIP shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability for any claim arising from the use of our services shall not exceed the amount paid by the client for the specific engagement that gave rise to the claim.',
          ],
        },
        {
          heading: 'Changes to Terms',
          paragraphs: [
            'We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our website and services after any changes constitutes acceptance of the updated terms.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            `If you have any questions about these Terms and Conditions, please contact us at ${siteConfig.phoneDisplay} or via our contact page.`,
          ],
        },
      ]}
    />
  );
}
