import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { characterPropProp } from "../../../type";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { characterProp } from "../../../type";
import Image from "next/image";
import styles from "../../../styles/Details.module.scss";
import Header from "../../../components/Header";
const Note: NextPage<any> = (character) => {
  const { id, gender, image, location, name, origin, species, status, type } =
    character.character;
  console.log(
    character,
    id,
    gender,
    image,
    location,
    name,
    origin,
    species,
    status,
    type
  );
  return (
    <div className={styles.box}>
      <Header title={`${name}`} />      <h2>{name}</h2>
      <div className={`${styles.imgBox} imgBox`}>
        <Image src={image} alt={`${name}`} layout="fill" />
      </div>
      <ul>
        <div>
          <li>
            <span>gender:</span> {gender}
          </li>
          <li>
            <span>status:</span> {status}
          </li>
          <li>
            <span>species:</span> {species}{type !== ''??`, ${type}`}
          </li>
        </div>

        <div>
          <li>
            <span>origin:</span> {origin.name}, {origin.dimension}
          </li>
          <li>
            <span>location:</span> {location.name}, {location.dimension}
          </li>
        </div>
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });
  //context.params.id
  console.log(context);
  const character = await client.query({
    query: gql`
    query {
      character(id: ${context.params!.id}){
          id,
          name,
          status,
          species,
          type,
          gender,
          origin{
            name,
            dimension
          }
          location{
            name, dimension
          }
          image,
      }
      }
    `,
  });
  return {
    props: {
      character: character.data.character,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });
  const res = await client.query({
    query: gql`
      query {
        characters(page: 1) {
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
  const res1 = await client.query({
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
  });
  const res2 = await client.query({
    query: gql`
      query {
        characters(page: 3) {
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
  const characters: characterProp[] = [
    ...res.data.characters.results,
    ...res1.data.characters.results,
    ...res2.data.characters.results,
  ];
  const ids = characters.map((char) => char.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  console.log(ids, paths);
  return {
    paths,
    fallback: false,
  };
};

export default Note;