import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CharacterCard from "../components/CharacterCard";
import styles from "../styles/Home.module.scss";
import { characterProp } from "../type";
import Link from "next/link";
import { useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Header from "../components/Header";

const Home: NextPage<any> = ({ characters }) => {
  /* const characters: characterProp[] = [
    ...res.data.characters.results,
    ...res1.data.characters.results,
    ...res2.data.characters.results,
  ];*/
  console.log(characters, typeof characters);

 // localStorage.setItem("rick-and-morty-data", JSON.stringify({ characters }));
  return (
    <div className={styles.container}>
    <Header title='Rick and Morty'/>
      <header className={styles.h1}>
        <h1>Rick and Morty</h1>
      </header>
      <main className={styles.main}>
        <div>
          {characters.map((char: characterProp) => (
            <div className={styles.characterBox} key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <a></a>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });
  const reponse = (n: number) => {
    try {
      console.log("try");
      return client.query({
        query: gql`
    query {
      characters(page: ${n}) {
        results {
          id
          name
          status
          species
          type
          gender
          origin {
            name
            dimension
          }
          location {
            name
            dimension
          }
          image
        }
      }
    }
  `,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const res = await reponse(1);
  const res1 = await reponse(2);
  /* client.query({
    query: gql`
      query {
        characters(page: 2) {
          results {
            id
            name
            status
            species
            type
            gender
            origin {
              name
              dimension
            }
            location {
              name
              dimension
            }
            image
          }
        }
      }
    `,
  });*/
  const res2 = await reponse(3);

  const characters: characterProp[] =
  /*  localStorage.getItem("rick-and-morty-data") &&
    (res === null || res1 === null || res2 === null)
      ? JSON.parse(localStorage.getItem("rick-and-morty-data")!)
      :*/ [
          ...res!.data.characters.results,
          ...res1!.data.characters.results,
          ...res2!.data.characters.results,
        ];
  return {
    props: {
      characters,
    },
  };
};

export default Home;
