"use client";

import Script from "next/script";

export default function Chatbot() {
  return (
    <Script
      strategy="lazyOnload"
      onLoad={() => initializeChatbot()}
      src="/chatbot.js"
    />
  );
}
