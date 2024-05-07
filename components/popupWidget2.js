import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

/**
 * Repo: https://github.com/awran5/react-floating-whatsapp
 */

export default function App() {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="6285717613102"
        accountName="Vajra CS"
        avatar="img/LogoVA.png"
        statusMessage="Online"
        chatMessage="Hello there, how can I help you?"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}
