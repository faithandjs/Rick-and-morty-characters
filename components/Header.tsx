import { NextPage } from "next";
import Head from "next/head";

interface head {
  title: string;
}

const Header: NextPage<head> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="rick morty rickandmorty rick-and-morty" />
      <meta
        name="description"
        content="A display of the first 60 characters from the rick and morty api(https://rickandmortyapi.com/graphql )"
      />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
