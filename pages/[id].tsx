import type { NextPage } from "next"
import gql from "graphql-tag"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import Image from "next/image"
import Link from "next/link"
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

const MAX_POKEMON_NUMBER = 151 // Only load Pokemon up to Mew in Red/Blue.
const MAX_PAGE_NUMBER = calculateCurrentPage({
  // There are a maximum of 16 pages, based on MAX_POKEMON_NUMBER of 151.
  id: String(MAX_POKEMON_NUMBER),
})

const Pokedex: InferGetStaticPropsType<typeof getStaticProps> = ({
  data,
  id,
}: {
  data: PokemonsQuery
  id: string
}) => {
  // We inefficiently fetch all the Pokémon we need from 1 to the current id.
  // The advantage is we only make 1 GraphQL request, vs. 10x requests for the
  // current page, but we fetch much more data than is needed. Note that the
  // data fetching only happens on the server-side, never on the client side.
  const allPokemons = data.pokemons as Pokemon[]
  // Since we have all of the Pokémons loaded from 1 to a little more than the
  // current id (specifically all of them to fill out the current page), then
  // we can grab the current Pokémon by checking the index at pokemons[id - 1].
  // (For example, Bulbasaur (#1) is at index 0 in the pokemons array.)
  const currentPokemon = allPokemons[Number(id) - 1]
  // Next, we need to figure out which page of the pagination we should be on.
  const currentPageNumber = calculateCurrentPage({ id })
  // Finally, we need to filter out the pokemons to only match the current page.
  const pokemons = allPokemons.slice(
    // For example, for Pokemon #32, we'd be on page 4. Then we...
    (currentPageNumber - 1) * 10, // Start at Pokemon #30 (index 29), included.
    currentPageNumber * 10 // Slice to Pokemon #41 (index 40), excluded.
    // And, of course, remember that .slice() includes start but not end items.
  )

  // We should never hit the following guard clause, but it's here just in case.
  if (!currentPokemon) return <div>Sorry, Pokémon #{id} not found 😔.</div>
  // Without checking for currentPokemon, then the destructuring could error.

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

  /**
   * Generate the pages for the pagination bar as a number[] array.
   */
  const getPagesToShow = () => {
    if (currentPageNumber === 1)
      // Beginning of the list
      return [1, 2, 3, 4]
    if (currentPageNumber === MAX_PAGE_NUMBER)
      // End of the list
      return [
        MAX_PAGE_NUMBER - 3,
        MAX_PAGE_NUMBER - 2,
        MAX_PAGE_NUMBER - 1,
        MAX_PAGE_NUMBER,
      ]
    if (currentPageNumber < MAX_PAGE_NUMBER / 2)
      // Early in the list
      return [
        currentPageNumber - 1,
        currentPageNumber,
        currentPageNumber + 1,
        currentPageNumber + 2,
      ]
    // Late in the list (default case)
    return [
      currentPageNumber - 2,
      currentPageNumber - 1,
      currentPageNumber,
      currentPageNumber + 1,
    ]
  }
  const pagesToShow = getPagesToShow() // Show 4 pages, from 1 to MAX_PAGE_COUNT

  return (
    <AppContainer pageTitle="Homepage" bgColor="bg-gray-600">
      <div className="flex h-128 w-192 overflow-hidden rounded-lg">
        {/* Pokédex component: Pokémon wrapper box for the [id] page. */}
        {/* We use overflow-hidden here is to round off the corners. */}
        <div className="relative w-[40%] space-y-4 overflow-y-auto bg-gray-800 text-sm">
          {/* Pokédex component: Pokémon sidebar -- pagination component. */}
          {pokemons?.map((thisPokemon) => {
            const {
              id,
              number: thisNumber,
              name: thisName,
              image: thisImage,
            } = thisPokemon
            // Fields can be potentially undefined, so coerce to string type:
            const thisPokemonNumber = thisNumber ? thisNumber : ""
            const thisPokemonName = thisName ? thisName : ""
            const thisImageUrl = thisImage ? thisImage : ""
            return (
              // Link to the active Pokemon:
              <Link key={id} href={`/${Number(thisPokemonNumber)}`}>
                <div
                  className={classNames(
                    "m-4 flex items-center justify-start space-x-4 rounded-lg border-2 border-solid py-3 pl-4",
                    // Highlight the active Pokémon:
                    thisPokemonNumber === number
                      ? "border-yellow-400 bg-gray-700" // active state
                      : "border-transparent bg-gray-600 hover:bg-gray-700"
                    // Note: We use border-transparent for an invisible border
                    // that helps with the alignment of the CSS flexbox items.
                  )}
                >
                  <PokemonImage
                    size="h-8 w-8"
                    imageUrl={thisImageUrl}
                    altText={thisPokemonName}
                  />
                  <span className="font-bold text-yellow-400">
                    {thisPokemonNumber}
                  </span>
                  <span>{thisPokemonName}</span>
                </div>
              </Link>
            )
          })}
          <div
            className={classNames(
              "bottom-0 flex w-full items-center justify-between bg-gray-900 p-4 text-xs",
              // To handle #151, page 16 with Mew, we use position: absolute
              // instead of position sticky because this page has only 1 item.
              currentPageNumber === MAX_PAGE_NUMBER ? "absolute" : "sticky"
            )}
          >
            {/* Pokédex component: Pokémon sidebar -- pagination component. */}
            {/* The pagination bar uses position: sticky to stick in place. */}
            <div className="flex space-x-2">
              {pagesToShow.map((pageNumber) => {
                return (
                  <Fragment key={`page${pageNumber}`}>
                    <PaginationButton
                      paddingX="px-2"
                      // Page 1 links to #1, page 2 links to #11, etc:
                      href={`/${(pageNumber - 1) * 10 + 1}`}
                      // Highlight the current page:
                      currentPage={currentPageNumber === pageNumber}
                      text={String(pageNumber)}
                    />
                  </Fragment>
                )
              })}
            </div>
            <div className="flex space-x-2">
              <PaginationButton
                paddingX="px-3"
                // Link to the previous page, unless we're on the first page:
                href={`/${currentPageNumber === 1 ? 1 : currentPageNumber - 1}`}
                text="Prev"
              />
              <PaginationButton
                paddingX="px-3"
                // Link to the next page, unless we're on the last page:
                href={`/${
                  currentPageNumber === MAX_PAGE_NUMBER
                    ? MAX_PAGE_NUMBER
                    : currentPageNumber + 1
                }`}
                text="Next"
              />
            </div>
          </div>
        </div>
        <div className="w-[60%] bg-gray-700">
          {/* Pokédex component: Pokémon details */}
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
  href,
  currentPage,
  text,
}: {
  paddingX?: "px-2" | "px-3"
  href: string
  currentPage?: boolean
  text: string
}) {
  return (
    <Link href={href}>
      <div
        className={classNames(
          "flex flex-col content-center items-center rounded-md border-2 border-solid py-1",
          paddingX ? paddingX : "px-2",
          currentPage
            ? "border-yellow-400 bg-gray-700" // active state
            : "border-transparent bg-gray-600 hover:bg-gray-700"
          // Note that we use border-transparent for an invisible border
          // that helps with the alignment of the CSS flexbox items.
        )}
      >
        {text}
      </div>
    </Link>
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
    pokemons(first: $first) {
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

async function fetchPokemon({ pokemonCount }: { pokemonCount: number }) {
  return await fetch("https://graphql-pokemon2.vercel.app/", {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query pokemons {
          pokemons(first: ${pokemonCount}) {
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

/**
 * We need to calculate the number of Pokémon to retrieve, which will be
 * 10 for #1, 20 for #15, 30 for #30, etc. The math is 10*((n-1)/10+1).
 **/
function calculatePokemonCount({ id }: { id: string }) {
  return 10 * (Math.floor((Number(id) - 1) / 10) + 1)
}
/**
 * We need to calculate the current page based on the current id, which will be
 * the pokemonCount divided by 10: page 1 for #1, page 2 for #15, pg 3 for #30.
 */
function calculateCurrentPage({ id }: { id: string }) {
  return calculatePokemonCount({ id }) / 10
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const pokemonCount = calculatePokemonCount({ id })
  return { props: { data: await fetchPokemon({ pokemonCount }), id } }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    // Fill a new array from 1 to MAX_POKEMON_NUMBER, then map the valid paths.
    paths: Array(MAX_POKEMON_NUMBER)
      .fill(MAX_POKEMON_NUMBER)
      .map((_, index) => index + 1)
      .map((pokemonNumber) => ({
        params: {
          id: String(pokemonNumber),
        },
      })),
    //[{ params: { id: "1" } }],
    fallback: false, // We don't handle ids beyond the MAX_POKEMON_NUMBER
  }
}

export default Pokedex
