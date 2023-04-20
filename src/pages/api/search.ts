import type { NextApiRequest, NextApiResponse } from 'next'
import {Client} from '@opensearch-project/opensearch';



let index_name = 'ecommerce';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { query } = req

  const {q} = query

  // We create and manage the cluster with docker compose
  // Create the a client instance to access the cluster
  let client = new Client({
    node: process.env.SERVICE_URI,
    ssl: { rejectUnauthorized: false }
  });

  // Search 
  let searchResults = q?.length ? await client.search({
    index: index_name,
    body: {
      query: {
        // match_bool_prefix: {
        //   customer_first_name: {
        //     query: query.q,
        //     fuzziness: "AUTO",
        //     fuzzy_transpositions: true,
        //     max_expansions: 50,
        //     prefix_length: 0,
        //     operator:  "or",
        //     minimum_should_match: 2,
        //     analyzer: "standard"
        //   }
        // },
        // multi_match: {
        //   query: query.q,
        //   fields: ['customer_first_name', 'category', 'customer_last_name', 'category', 'customer_gender'],
        // },
        // QUERY STRING IS NOT CASE SENSITIVE
        query_string: {
          query: query.q,
          default_field: "customer_first_name",
          type: "best_fields",
          fuzziness: "AUTO",
          fuzzy_transpositions: true,
          fuzzy_max_expansions: 50,
          fuzzy_prefix_length: 0,
          minimum_should_match: 1,
          default_operator: "or",
          analyzer: "standard",
          lenient: false,
          boost: 1,
          allow_leading_wildcard: true,
          enable_position_increments: true,
          phrase_slop: 3,
          max_determinized_states: 10000,
          quote_field_suffix: "",
          quote_analyzer: "standard",
          analyze_wildcard: false,
          auto_generate_synonyms_phrase_query: true,
        }
      },
    },
  }) : await client.search({index: index_name, body: {
    query: {
      match_all : {}
    }
  }});

  console.log('THE SEARCH RESPONSE',searchResults.body.hits, "QUERY", query);
  

  res.status(200).json(searchResults) 
}
