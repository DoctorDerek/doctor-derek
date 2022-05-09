import type { NextPage } from "next"
import gql from "graphql-tag"
import Image from "next/image"
import React, { Fragment } from "react"

import AppContainer from "@/components/AppContainer"
import { Pokemon, PokemonsQuery } from "@/graphql/generated"
import classNames from "@/utils/classNames"

const ACCESSIBLE_ATTRIBUTE_TITLES: { [key in keyof Pokemon]: string } = {
  // Look-up table for filling in the `title` prop to improve accessibility.
  attacks: "The attacks of this Pokémon",
  classification: "The classification of this Pokémon",
  evolutionRequirements: "The evolution requirements of this Pokémon",
  evolutions: "The evolutions of this Pokémon",
  fleeRate: "The flee rate of this Pokémon",
  height: "The minimum and maximum height of this Pokémon",
  maxCP: "The maximum Combat Power (CP) of this Pokémon",
  maxHP: "The maximum Hit Points (HP) of this Pokémon",
  name: "The name of this Pokémon",
  number: "The identifier of this Pokémon",
  resistant: "The type(s) of Pokémons that this Pokémon is resistant to",
  types: "The type(s) of this Pokémon",
  weaknesses: "The type(s) of Pokémons that this Pokémon weak to",
  weight: "The minimum and maximum weight of this Pokémon",
  // Note that id is unused, but it's required for TypeScript to compile:
  id: "The unique identifier of this Pokémon in the API",
}

const Home: NextPage = ({ data }: { data: PokemonsQuery }) => {
  const pokemons = data.pokemons as Pokemon[]
  const currentPokemon = pokemons[0]

  const {
    // Destructure the current Pokémon based on the GraphQL schema.
    attacks,
    classification,
    evolutionRequirements,
    evolutions,
    fleeRate,
    height,
    image,
    maxCP,
    maxHP,
    name,
    number,
    resistant,
    types,
    weaknesses,
    weight,
  } = currentPokemon

  return (
    <AppContainer pageTitle="Homepage" bgColor="bg-gray-600">
      <div className="flex h-128 w-192 overflow-hidden rounded-lg">
        {/* We use overflow-hidden here is to round off the corners: */}
        <div className="relative w-[40%] space-y-4 overflow-y-auto bg-gray-800 text-sm">
          {pokemons?.map((pokemon) => {
            const { id, number, name, image } = pokemon
            // Fields can be potentially undefined, so coerce to string type:
            const pokemonNumber = number ? number : ""
            const pokemonName = name ? name : ""
            const imageUrl = image ? image : ""
            return (
              <div
                key={id}
                className="m-4 flex items-center justify-start space-x-4 rounded-lg bg-gray-600 py-3 pl-4"
              >
                <PokemonImage
                  size="h-8 w-8"
                  imageUrl={imageUrl}
                  altText={pokemonName}
                />
                <span className="font-bold text-yellow-400">
                  {pokemonNumber}
                </span>
                <span>{pokemonName}</span>
              </div>
            )
          })}
          <div className="sticky bottom-0 flex w-full items-center justify-between bg-gray-900 p-4 text-xs">
            {/* The pagination bar uses position: sticky to stick in place. */}
            <div className="flex space-x-2">
              {Array(4)
                .fill(4) // 4 pages (placeholder)
                .map((item, index) => {
                  const pageNumber = index + 1
                  return (
                    <Fragment key={`page${pageNumber}`}>
                      <PaginationButton>{pageNumber}</PaginationButton>
                    </Fragment>
                  )
                })}
            </div>
            <div className="flex space-x-2">
              <PaginationButton paddingX="px-4">Prev</PaginationButton>
              <PaginationButton paddingX="px-4">Next</PaginationButton>
            </div>
          </div>
        </div>
        <div className="bg-gray-700">
          <h2 className="flex justify-between border-b-2 border-solid border-b-gray-800 p-8 text-2xl">
            {name && (
              <h3
                className="tracking-wide"
                title={ACCESSIBLE_ATTRIBUTE_TITLES["name"]}
              >
                {name}
              </h3>
            )}
            {number && (
              <h3
                className="tracking-widest text-yellow-400"
                title={ACCESSIBLE_ATTRIBUTE_TITLES["number"]}
              >
                #{number}
              </h3>
            )}
          </h2>
          <div className="flex h-104 flex-col items-stretch justify-between p-4">
            <div className="flex flex-shrink-0 justify-between">
              {classification && (
                <PokemonDetails
                  title="classification"
                  attribute="Classification"
                  value={`“${classification}”`}
                />
              )}
              {image && (
                <PokemonImage
                  size="h-16 w-16"
                  imageUrl={image}
                  altText={name ? name : ""}
                />
              )}
              {Array.isArray(types) && (
                <PokemonDetails
                  title="types"
                  attribute="Types"
                  value={types.join(", ")}
                />
              )}
            </div>
            <div className="flex flex-shrink-0 justify-between">
              {maxCP && (
                <PokemonDetails
                  title="maxCP"
                  attribute="Max CP"
                  value={String(maxCP)}
                />
              )}
              {maxHP && (
                <PokemonDetails
                  title="maxHP"
                  attribute="Max HP"
                  value={String(maxHP)}
                />
              )}
              {fleeRate && (
                <PokemonDetails
                  title="fleeRate"
                  attribute="Flee Rate"
                  value={String(fleeRate * 100) + "%"}
                />
              )}
            </div>
            <div className="flex flex-shrink-0 justify-between">
              {height && height.minimum && height.maximum && (
                <PokemonDetails
                  title="height"
                  attribute="Height"
                  value={`Min: ${height.minimum}; Max: ${height.maximum}`}
                />
              )}
              {weight && weight.minimum && weight.maximum && (
                <PokemonDetails
                  title="weight"
                  attribute="Weight"
                  value={`Min: ${weight.minimum}; Max: ${weight.maximum}`}
                />
              )}
            </div>
            <div className="flex justify-between">
              {Array.isArray(weaknesses) && (
                <PokemonDetails
                  title="weaknesses"
                  attribute="Weaknesses"
                  value={weaknesses.join(", ")}
                />
              )}
              {Array.isArray(resistant) && (
                <PokemonDetails
                  title="resistant"
                  attribute="Resistances"
                  value={resistant.join(", ")}
                />
              )}
            </div>
            {/* Note: I did not see the following in the GraphQL data: */}
            {/* attacks */}
            {/* evolutionRequirements */}
            {/* evolutions */}
          </div>
        </div>
      </div>
    </AppContainer>
  )
}

function PaginationButton({
  paddingX,
  children,
}: {
  paddingX?: "px-2" | "px-4"
  children: React.ReactNode
}) {
  return (
    <div
      className={classNames(
        "flex flex-col content-center items-center rounded-md bg-gray-600 py-1",
        paddingX ? paddingX : "px-2"
      )}
    >
      {children}
    </div>
  )
}

function PokemonImage({
  size,
  imageUrl,
  altText,
}: {
  size: "h-8 w-8" | "h-16 w-16"
  imageUrl: string
  altText: string
}) {
  return (
    <div
      className={classNames(
        "relative overflow-hidden rounded-full bg-white",
        size === "h-16 w-16"
          ? "h-16 w-16 border-2 border-solid border-gray-400"
          : "h-8 w-8"
      )}
    >
      {/* We again use overflow-hidden to round the corners */}
      <Image
        src={imageUrl}
        layout="fill"
        alt={altText}
        className="h-full w-full object-contain"
      />
      {/* Note: The image itself has a white background, and */}
      {/*       we use object-contain to prevent clipping. */}
    </div>
  )
}

function PokemonDetails({
  title,
  attribute,
  value,
}: {
  title?: keyof typeof ACCESSIBLE_ATTRIBUTE_TITLES
  attribute?: string
  value?: string
}) {
  return (
    <div
      className="flex flex-col rounded-md border-2 border-solid border-gray-400 p-2 text-center"
      title={title ? ACCESSIBLE_ATTRIBUTE_TITLES[title] : ""}
    >
      <h3 className="font-semi-bold underline">{attribute}</h3>
      <h4>{value}</h4>
    </div>
  )
}

// The following line is currently duplicated as it needs to be tagged gql
// in order for the @graphql-codegen/cli to pick the query up correctly.
// API Reference: https://wayfair.github.io/dociql/
gql`
  query pokemons {
    pokemons(first: 10) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
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
            weight{
              minimum
              maximum
            }
            height{
              minimum
              maximum
            }
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            image
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
