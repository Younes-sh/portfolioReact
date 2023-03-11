// ...
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// ...

export default function About() {
  const { t } = useTranslation();

  return (
    <>
        {/* t() will return the translation in the 
            active locale. */}
        <title>{t("title")}</title>
        <meta name="description" content={t("metaDescription")} />
        {/* ... */}
      <main>
        <nav>
          <div>
            <link href="/">{t("home")}</link> |
            <link href="/about">{t("about")}</link>
          </div>

          {/* ... */}
        </nav>

        {/* Interpolated values are injected via the
            second parameter to t(). */}
        <p>{t("aboutContent", { val: new Date() })}</p>
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}