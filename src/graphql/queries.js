/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBoardingProvider = /* GraphQL */ `
  query GetBoardingProvider($id: ID!) {
    getBoardingProvider(id: $id) {
      id
      title
      description
      profile_img
      images
      price_large
      price_small
      large_dog
      small_dog
      latitude
      longitude
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBoardingProviders = /* GraphQL */ `
  query ListBoardingProviders(
    $filter: ModelBoardingProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoardingProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        profile_img
        images
        price_large
        price_small
        large_dog
        small_dog
        latitude
        longitude
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBoardingProviders = /* GraphQL */ `
  query SyncBoardingProviders(
    $filter: ModelBoardingProviderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBoardingProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        profile_img
        images
        price_large
        price_small
        large_dog
        small_dog
        latitude
        longitude
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
