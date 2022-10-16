import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type BoardingProviderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BoardingProvider {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly profile_img: string;
  readonly images?: (string | null)[] | null;
  readonly price_large?: string | null;
  readonly price_small?: string | null;
  readonly large_dog?: string | null;
  readonly small_dog?: string | null;
  readonly latitude: string;
  readonly longitude: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BoardingProvider, BoardingProviderMetaData>);
  static copyOf(source: BoardingProvider, mutator: (draft: MutableModel<BoardingProvider, BoardingProviderMetaData>) => MutableModel<BoardingProvider, BoardingProviderMetaData> | void): BoardingProvider;
}