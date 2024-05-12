import CookieConsent from "react-cookie-consent";

const CookieConsentComponent = () => {
  const handleAccept = () => {
    console.log("User accepted cookie policy");

    // Set the localStorage item to true, indicating the user has accepted the cookie policy
    localStorage.setItem("cookieConsented", "true");
  };

  // Get the localStorage item to check if the user has accepted the cookie policy before
  const hasConsented = localStorage.getItem("cookieConsented");

  // If the localStorage item is true or does not exist, show the CookieConsent component
  if (!hasConsented) {
    return (
      <CookieConsent
        style={{
          background: "#5662D5F2",
          width: "460px",
          fontFamily: "Gotham Pro",
          textAlign: "left",
          alignItems: "center",
          borderRadius: "9px",
          marginBottom: "25px",
          marginLeft: "25px",
        }}
        buttonStyle={{
          color: "#fff",
          fontSize: "16px",
          fontFamily: "Gotham Pro",
          background: "transparent",
          border: "1px solid #992434",
          borderRadius: "8px",
        }}
        buttonText="Окей!"
        debug={true}
        expires={150} // expires in 150 days
        onAccept={handleAccept}
      >
        Наш сайт использует Cookie, потому что они вкусные✨🍪!
      </CookieConsent>
    );
  }

  // If the localStorage item is true, do not show the CookieConsent component
  return <></>;
};

export default CookieConsentComponent;
