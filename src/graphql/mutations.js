/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBoardingProvider = /* GraphQL */ `
  mutation CreateBoardingProvider(
    $input: CreateBoardingProviderInput!
    $condition: ModelBoardingProviderConditionInput
  ) {
    createBoardingProvider(input: $input, condition: $condition) {
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
export const updateBoardingProvider = /* GraphQL */ `
  mutation UpdateBoardingProvider(
    $input: UpdateBoardingProviderInput!
    $condition: ModelBoardingProviderConditionInput
  ) {
    updateBoardingProvider(input: $input, condition: $condition) {
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
export const deleteBoardingProvider = /* GraphQL */ `
  mutation DeleteBoardingProvider(
    $input: DeleteBoardingProviderInput!
    $condition: ModelBoardingProviderConditionInput
  ) {
    deleteBoardingProvider(input: $input, condition: $condition) {
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
