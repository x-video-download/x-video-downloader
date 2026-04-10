import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";

export default function PrivacyPage() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'en';
  
  // Only use translated title for non-English languages
  const seoTitle = currentLang === 'en'
    ? 'Privacy Policy — X Video Download'
    : `${t('privacy.title')} — X Video Download`;
  
  return (
    <>
      <SEO 
        title={seoTitle}
        description="Learn how X Video Download handles your data and protects your privacy when downloading X (Twitter) videos."
        lang={currentLang}
      />
      <main className="flex-1 bg-white">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="heading-brand text-3xl font-semibold text-neutral-950 sm:text-4xl">{t('privacy.title')}</h1>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Welcome to <strong className="font-medium text-neutral-800">X Video Download</strong>. This page explains how we handle
          information when you use our free, browser-based service to find public MP4 links for X (Twitter) posts.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          By using this website, you agree to this Privacy Policy and our{" "}
          <Link to={currentLang === 'en' ? '/terms' : `/${currentLang}/terms`} className="text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900">
            Terms of Use
          </Link>
          . If you do not agree, please do not use the service.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Information collection and use</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          <strong className="font-medium text-neutral-800">No account is required.</strong> We do not ask you to register, sign
          in, or provide a name, email address, or profile information to use the core downloader.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          When you paste a <strong className="font-medium text-neutral-800">public X post URL</strong> and request a resolution,
          that URL (or the post identifier we derive from it) is sent to our servers so we can query public syndication data and
          return playable <code className="text-neutral-800">video/mp4</code> links. We use this information only to provide the
          service in that session and <strong className="font-medium text-neutral-800">do not build a personal profile</strong>{" "}
          about you from it.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Video files are served from <strong className="font-medium text-neutral-800">X&apos;s own infrastructure</strong>{" "}
          (for example, content delivery network URLs). We do not host your downloads on our disks for you to fetch later.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Third-party services</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Our tool relies on <strong className="font-medium text-neutral-800">public data and endpoints operated by X</strong>{" "}
          (Twitter). Their collection and use of data are governed by their own policies. We encourage you to review{" "}
          <strong className="font-medium text-neutral-800">X&apos;s Privacy Policy</strong> and Terms of Service.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          If we embed analytics, advertising, or other third-party scripts in the future, we will list them here and update this
          policy. Unless stated otherwise on this page, the current experience is focused on resolving public post links in the
          browser.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Log data</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Like most websites, our hosting infrastructure may automatically collect certain technical information when you
          access pages or call our API, such as your <strong className="font-medium text-neutral-800">IP address</strong>, browser
          type, rough request timing, and error diagnostics. We use this information to operate, secure, and improve the service,
          and to troubleshoot abuse or outages.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Cookies</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          This site may use a minimal set of cookies or similar technologies required for basic functionality (for example,
          security or preferences). Third-party libraries we load might set their own cookies; you can control cookies through your
          browser settings.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Service providers</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          We may use trusted hosting, DNS, or security vendors to run the website and API. Those providers process data only as
          needed to deliver the service and are expected to protect it consistent with industry practice.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Security</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          We take reasonable steps to protect information handled by our systems. No method of transmission over the internet is
          100% secure; we cannot guarantee absolute security.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Links to other sites</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Our pages or results may link to third-party sites (including X). We do not control those sites and are not responsible
          for their content or privacy practices. Please review their policies before sharing personal data with them.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Children&apos;s privacy</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          This service is not directed at children under 13. We do not knowingly collect personal information from children under
          13. If you believe a child has provided us with personal information, please contact us so we can delete it where
          appropriate.
        </p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Changes to this Privacy Policy</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          Continued use of the service after changes means you accept the revised policy.
        </p>
        <p className="mt-3 text-sm text-neutral-500">This policy is effective as of March 28, 2026.</p>

        <h2 className="heading-brand mt-10 text-xl font-semibold text-neutral-950 sm:text-2xl">Contact us</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          If you have questions or suggestions about this Privacy Policy, please contact us using the contact information
          published on the main site when available.
        </p>
      </article>
    </main>
    </>
  );
}
