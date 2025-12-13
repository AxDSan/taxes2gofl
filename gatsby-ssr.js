import * as React from "react"

import { I18nProvider } from "./src/i18n"

export const wrapRootElement = ({ element }) => {
  return <I18nProvider>{element}</I18nProvider>
}

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  // Meta Pixel Code - Script in head
  setHeadComponents([
    <script
      key="meta-pixel"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1125329389678820');
          fbq('track', 'PageView');
        `,
      }}
    />,
  ])

  // Meta Pixel Code - Noscript in body
  setPostBodyComponents([
    <noscript key="meta-pixel-noscript">
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1125329389678820&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>,
  ])
}


