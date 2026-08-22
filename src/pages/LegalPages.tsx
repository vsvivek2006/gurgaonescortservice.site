import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/siteConfig';
import { Phone, Shield, CheckCircle, ArrowRight } from 'lucide-react';

interface LegalPageProps {
  title: string;
  description: string;
  slug: string;
  content: { heading: string; paragraphs: string[] }[];
}

function LegalPage({ title, description, slug, content }: LegalPageProps) {
  return (
    <>
      <SEO
        title={`${title} | Escort Service in Gurgaon | ALINA VIP`}
        description={description}
        canonical={`https://gurgaonescortservice.site/${slug}`}
        breadcrumbs={[
          { name: 'Home', url: 'https://gurgaonescortservice.site' },
          { name: title, url: `https://gurgaonescortservice.site/${slug}` },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' }, 
          { name: title }
        ]} 
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/gold-pattern.png')] bg-repeat" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="text-center">
            <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6">
              ★ Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              <Link to="/services" className="text-gold-400 hover:underline">Escort service in Gurgaon</Link> – 
              <Link to="/call-girls" className="text-gold-400 hover:underline"> Call girls</Link> – 
              <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link> – 
              <Link to="/model-escorts" className="text-gold-400 hover:underline"> Model escorts</Link> – 
              100% discreet and professional service.
            </p>
            <div className="gold-divider mx-auto mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury max-w-4xl">
          <div className="prose-luxury">
            {content.map((section, i) => (
              <div key={i} className="mb-8">
                <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">{section.heading}</h2>
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-gray-700 text-lg leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* ===== CTA Section ===== */}
          <div className="mt-12 p-8 bg-gradient-to-r from-gold-50 to-amber-50 rounded-2xl border-2 border-gold-200 text-center">
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
              Book Your Escort Service Today
            </h3>
            <p className="text-gray-700 mb-6">
              Call us 24/7 for premium <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>.
              Verified <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteConfig.phone}`} className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <Link to="/contact" className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                Contact Us
              </Link>
              <Link to="https://alinavip.com" target="_blank" className="text-gold-600 hover:text-gold-700 font-semibold flex items-center gap-2">
                Visit ALINAVIP.com <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================
// PRIVACY POLICY PAGE
// ============================================================
export function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Read the ALINA VIP privacy policy. Learn how we collect, use, and protect your personal information for escort service in Gurgaon. 100% discreet and confidential."
      slug="privacy-policy"
      content={[
        {
          heading: 'Introduction',
          paragraphs: [
            'At ALINA VIP, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website and <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>. By accessing our website or using our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service</Link>, you consent to the practices described in this policy.',
            'We are committed to maintaining the highest standards of confidentiality and discretion in all our interactions with clients booking <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>. This policy is designed to be transparent and comprehensive, so you can understand exactly how your information is handled when you use our <strong>escort service</strong>.',
          ],
        },
        {
          heading: 'Information We Collect',
          paragraphs: [
            'When you contact us to make a booking or inquiry for our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>, we may collect the following types of information: your name, phone number, email address (if provided), preferred location, and any preferences or requirements you share with our booking team for <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> or <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>.',
            'We do not collect any information that you do not voluntarily provide. We do not use tracking cookies for advertising purposes, and we do not sell or share your information with any third parties. Your privacy when using our <strong>escort service in Gurgaon</strong> is paramount.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          paragraphs: [
            'The information you provide is used solely for the purpose of arranging your booking for <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> or <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> and providing our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>. Specifically, we use your contact information to communicate with you about your booking, confirm details, and provide any necessary updates.',
            'We may also use your information to improve our service and to respond to any inquiries or feedback you provide about our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service</Link>. We do not use your information for marketing purposes without your explicit consent.',
          ],
        },
        {
          heading: 'Information Storage and Security',
          paragraphs: [
            'All client information is stored securely and is accessible only to authorized members of our booking team for <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>. We employ industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.',
            'Booking records for <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> are retained only as long as necessary for the purpose of providing our service and are then securely deleted. We do not maintain long-term databases of client information beyond what is necessary for the proper functioning of our <strong>escort service</strong>.',
          ],
        },
        {
          heading: 'Discretion and Confidentiality for Escort Service',
          paragraphs: [
            'Discretion is a core value of ALINA VIP. We understand that our clients booking <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> value their privacy, and we are committed to maintaining complete confidentiality in all our interactions. Your personal information is never shared with our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>, other clients, or any third parties.',
            'Our <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> are trained to maintain the highest standards of discretion. They do not store or share client information and conduct themselves with professionalism and confidentiality at all times during <strong>escort service</strong> engagements.',
          ],
        },
        {
          heading: 'Your Rights',
          paragraphs: [
            'You have the right to request access to any personal information we hold about you from our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> records, to request that we correct any inaccuracies, and to request that we delete your information from our records. To exercise any of these rights, please contact us.',
            'You also have the right to withdraw your consent to our use of your information for <Link to="/call-girls" className="text-gold-600 hover:underline">call girls booking</Link> at any time. If you withdraw your consent, we will stop using your information for the purposes described in this policy, subject to any legal obligations to retain certain records.',
          ],
        },
        {
          heading: 'Changes to This Policy',
          paragraphs: [
            'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements for <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.',
          ],
        },
        {
          heading: 'Contact Us',
          paragraphs: [
            `If you have any questions about this Privacy Policy or our data practices for <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service</Link> or <Link to="/escorts" className="text-gold-600 hover:underline">escort service</Link>, please contact us at ${siteConfig.phoneDisplay} or via our <Link to="/contact" className="text-gold-600 hover:underline">contact page</Link>.`,
          ],
        },
      ]}
    />
  );
}

// ============================================================
// DISCLAIMER PAGE
// ============================================================
export function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      description="Read the ALINA VIP disclaimer. Understand the terms and conditions of using our escort service website and services in Gurgaon."
      slug="disclaimer"
      content={[
        {
          heading: 'General Disclaimer',
          paragraphs: [
            'The information provided by ALINA VIP on this website is for general informational purposes only about <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>. All information on this website is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on this site.',
            'Under no circumstances shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of this website or reliance on any information provided about <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> or <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>. Your use of this website and your reliance on any information is solely at your own risk.',
          ],
        },
        {
          heading: 'Age Restriction for Escort Service',
          paragraphs: [
            'This website for <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> is intended exclusively for adults who are at least 18 years of age (or the age of majority in their jurisdiction). By accessing this website, you confirm that you are of legal age and that it is legal for you to view such content about <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> in your jurisdiction.',
            'If you are under 18 years of age (or the age of majority in your jurisdiction), you must not access this website. We do not knowingly collect information from minors, and we do not allow minors to use our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>.',
          ],
        },
        {
          heading: 'Service Disclaimer for Call Girls & Escorts',
          paragraphs: [
            'ALINA VIP provides <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> only. The <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> listed on this website are independent individuals who provide social companionship. Any activities that may occur during or after an engagement are matters of personal choice between consenting adults.',
            'We do not control, direct, or influence the personal interactions between our clients and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> or <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>. Our role is limited to facilitating introductions and arranging bookings for <strong>escort service</strong>. We are not responsible for the conduct of our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>, <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>, or clients during or after an engagement.',
          ],
        },
        {
          heading: 'External Links Disclaimer',
          paragraphs: [
            'This website may contain links to external websites that are not provided or maintained by us, including <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:underline">ALINAVIP.com</a>. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.',
          ],
        },
        {
          heading: 'Professional Advice Disclaimer',
          paragraphs: [
            'The content on this website, including blog posts and articles about <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>, is for informational and entertainment purposes only. It does not constitute professional advice of any kind, including legal, medical, or relationship advice.',
          ],
        },
        {
          heading: 'Jurisdiction',
          paragraphs: [
            'This website is operated from India. The laws of India govern the use of this website and the <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> provided. If you access this website from outside India, you are responsible for compliance with applicable local laws regarding <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>.',
          ],
        },
      ]}
    />
  );
}

// ============================================================
// TERMS & CONDITIONS PAGE
// ============================================================
export function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Read the ALINA VIP terms and conditions. Understand the terms governing the use of our escort service website and call girls booking services in Gurgaon."
      slug="terms"
      content={[
        {
          heading: 'Introduction',
          paragraphs: [
            'These Terms and Conditions govern your use of the ALINA VIP website and our <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>. By accessing this website or using our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service</Link>, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>.',
          ],
        },
        {
          heading: 'Eligibility for Escort Service',
          paragraphs: [
            'To use our <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>, you must be at least 18 years of age (or the age of majority in your jurisdiction) and legally capable of entering into a binding contract. By using our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service</Link>, you confirm that you meet these eligibility requirements.',
            'You must also ensure that the use of our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> is legal in your jurisdiction. We do not accept responsibility for any legal consequences that may arise from the use of our services in jurisdictions where such services are prohibited.',
          ],
        },
        {
          heading: 'Service Description',
          paragraphs: [
            'ALINA VIP provides a platform for booking <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>. Our role is to facilitate introductions between clients and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> or <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> and to arrange bookings. The <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> listed on our website are independent individuals who provide social companionship.',
            'We do not guarantee the availability of any specific <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> or <Link to="/escorts" className="text-gold-600 hover:underline">escort</Link> at any given time. Companion availability is subject to change, and we reserve the right to substitute a companion if the originally requested <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> is unavailable.',
          ],
        },
        {
          heading: 'Booking and Payment for Call Girls',
          paragraphs: [
            'Bookings for <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> are made by contacting our booking team via phone or our website. All bookings are subject to availability and confirmation by our team for <strong>escort service</strong>. We reserve the right to decline any booking request at our discretion.',
            'Payment terms, including rates and accepted payment methods for <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>, will be communicated by our booking team at the time of booking. All payments must be made as agreed before or at the time of the engagement with <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>.',
          ],
        },
        {
          heading: 'Conduct with Escorts & Call Girls',
          paragraphs: [
            'Clients booking <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> are expected to treat our companions with respect and courtesy at all times. Any form of harassment, abuse, or disrespectful behavior will result in the immediate termination of the <strong>escort service</strong> engagement and may result in a ban from using our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>.',
            'Our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> reserve the right to decline or terminate an engagement if they feel uncomfortable or unsafe. We support our companions in exercising this right and will not penalize them for doing so during <strong>escort service</strong> bookings.',
          ],
        },
        {
          heading: 'Cancellation Policy for Escort Service',
          paragraphs: [
            'If you need to cancel a booking for <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> or <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>, please inform us as early as possible. Cancellations made with sufficient notice may not incur any charges for <strong>escort service</strong>. Late cancellations may be subject to a cancellation fee, which will be communicated at the time of booking.',
            'We reserve the right to cancel a booking for <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> if circumstances beyond our control arise. In such cases, we will make every effort to provide a suitable alternative <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> or <Link to="/escorts" className="text-gold-600 hover:underline">escort</Link> or a full refund of any advance payment.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          paragraphs: [
            'ALINA VIP shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>. Our total liability for any claim arising from the use of our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service</Link> shall not exceed the amount paid by the client for the specific engagement that gave rise to the claim.',
          ],
        },
        {
          heading: 'Changes to Terms',
          paragraphs: [
            'We may update these Terms and Conditions from time to time for our <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>. Any changes will be posted on this page with an updated revision date. Your continued use of our website and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service</Link> after any changes constitutes acceptance of the updated terms.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            `If you have any questions about these Terms and Conditions for <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> or <Link to="/call-girls" className="text-gold-600 hover:underline">call girls booking</Link>, please contact us at ${siteConfig.phoneDisplay} or via our <Link to="/contact" className="text-gold-600 hover:underline">contact page</Link>.`,
          ],
        },
      ]}
    />
  );
}