// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "https://water-my-plants-api.onrender.com",
  }),
  tagTypes: ["Plant"],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (registerUser) => ({
        url: "/auth/register",
        method: "POST",
        body: registerUser,
      }),
    }),
    login: builder.mutation({
      query: (loginUser) => ({
        url: "/auth/login",
        method: "POST",
        body: loginUser,
      }),
    }),
    account: builder.query({
      query: (token) => ({
        url: "/api/users",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    plantList: builder.query({
      query: (token) => ({
        url: "/api/plants",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Plant"],
    }),
    plantDetails: builder.query({
      query: ({ token, id }) => ({
        url: `/api/plants/${id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Plant"],
    }),
    addPlant: builder.mutation({
      query: ({ token, body }) => ({
        url: "/api/plants",
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["Plant"],
    }),
    editPlant: builder.mutation({
      query: ({ id, token, body }) => ({
        url: `/api/plants/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["Plant"],
    }),
    deletePlant: builder.mutation({
      query: ({ id, token }) => ({
        url: `/api/plants/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Plant"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useAccountQuery,
  usePlantListQuery,
  usePlantDetailsQuery,
  useAddPlantMutation,
  useEditPlantMutation,
  useDeletePlantMutation,
} = apiSlice;

//useEndpointnameMutation
//useEndpointnameQuery
