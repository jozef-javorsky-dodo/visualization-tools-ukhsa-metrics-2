import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "📊 UKHSA Metrics 📈📉",

  description: "Visualization Tools: UKHSA metrics.",

  keywords: "SPA, web-app, TypeScript, Next.js",

  authors: [
    {
      name: "jozef.javorsky.dodo@gmail.com, github.com/jozef-javorsky-dodo, g.dev/jozef-javorsky-dodo",
    },
  ],

  icons: {
    icon: [
      {
        url: "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABgSURBVDhPYwCC/xRihv9g8AlVAsQHATgbC4aqRWiAsdH5cADTDAVQeUwN2PgwMSziCEkkwaFqAEwSh0Jc4ggOsgHI4jA8agCRBuBQhCKPJo4qgJTGMTAMoImjcEjEDP8Bd2iMgD95onIAAAAASUVORK5CYII=",
        sizes: "16x16",
        type: "image/x-icon",
        rel: "icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "rgb(160, 200, 160)", fontFamily: "Cursive" }}
      >
        {children}
      </body>
    </html>
  );
}
