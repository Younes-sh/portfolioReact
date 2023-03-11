import { useState } from "react";
import { IntlProvider } from "react-intl";

// Declare our translation messages. In a production app,
// these would be in separate files.
const messages = {
  // English (USA)
  "en-US": {
    logo: "logo",
    demo: "This demo app was internationalized by react-intl",

    // Interpolated date using ICU syntax. Many formatting
    // options are available.
    now: "Current date and time are {currentDateTime, date, ::EEE, MMM d, yyyy h:mm a}",
  },
  // Arabic (Egypt)
  "ar-EG": {
    logo: "رمز التطبيق",
    demo: "تم تدويل هذا التطبيق التجريبي بواسطة رياكت إنتل",
    now: "التاريخ والوقت الحاليان هما {currentDateTime, date, ::EEE, MMM d, yyyy h:mm a}",
  },
};

// Our wrapper component, using a React render prop to 
// expose the setLocale() function to child components.
function I18n({ render }) {
  const [locale, setLocale] = useState("en-US");

  return (
    // Use the key prop to force react-intl's IntlProvider
    // to re-render its children on locale change.
    <IntlProvider 
       messages={messages[locale]}
       locale={locale}
       key={locale}>
      {render(setLocale)}
    </IntlProvider>
  );
}

export default I18n;