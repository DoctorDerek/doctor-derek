import type { NextPage } from "next"
import gql from "graphql-tag"

import AppContainer from "@/components/AppContainer"
import { Pokemon, PokemonsQuery } from "@/graphql/generated"

const Home: NextPage = ({ data }: { data: PokemonsQuery }) => {
  const pokemons = data.pokemons as Pokemon[]
  return (
    <AppContainer pageTitle="Homepage">
      {pokemons?.map((pokemon) => {
        const { id, number, name } = pokemon
        return (
          <div key={id}>
            #{number}: {name}
          </div>
        )
      })}
    </AppContainer>
  )
}

// The following line is currently duplicated as it needs to be tagged gql
// in order for the @graphql-codegen/cli to pick the query up correctly.
gql`
  query pokemons {
    pokemons(first: 10) {
      id
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`

async function fetchPokemon() {
  return await fetch("https://graphql-pokemon2.vercel.app/", {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query pokemons {
          pokemons(first: 10) {
            id
            number
            name
            image
            classification
            weight {
              minimum
              maximum
            }
            height {
              minimum
              maximum
            }
          }
        }
      `,
      variables: {},
    }),
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => res.data as PokemonsQuery)
}

export async function getStaticProps() {
  return { props: { data: await fetchPokemon() } }
}

export default Home
