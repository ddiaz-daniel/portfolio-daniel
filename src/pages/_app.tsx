import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';



const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>);
};

export default MyApp;
