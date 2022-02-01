import * as React from "react";
import { useQuery, gql } from "@apollo/client";

const WEATHER_QUERY = gql`
  query Query {
    characters(page: 2, filter: { name: "Morty" }) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

const IndexPage = () => {
  const { loading, error, data } = useQuery(WEATHER_QUERY);
  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return <div>Got Data</div>;
};

export default IndexPage;
