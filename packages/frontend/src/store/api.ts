import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SongsResponse } from "../types";

// Define the API slice
export const songsApi = createApi({
  reducerPath: "songsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Songs"],
  endpoints: (builder) => ({
    // Get songs
    getSongs: builder.query<SongsResponse, void>({
      query: () => "songs",
      providesTags: ["Songs"],
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetSongsQuery } = songsApi;
