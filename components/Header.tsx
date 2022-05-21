import { NextPage } from "next";
import Head from "next/head";

interface head {
  title: string;
}

const Header: NextPage<head> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      {/*<meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />*/}
    </Head>
  );
};

export default Header;