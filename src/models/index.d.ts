import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TargetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Target {
  readonly id: string;
  readonly msgID?: string;
  readonly groupID?: string;
  readonly selector?: string;
  readonly ko_KR?: string;
  readonly en_US?: string;
  readonly isModified?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Target, TargetMetaData>);
  static copyOf(source: Target, mutator: (draft: MutableModel<Target, TargetMetaData>) => MutableModel<Target, TargetMetaData> | void): Target;
}

export declare class Home {
  readonly id: string;
  readonly address?: string;
  readonly image_url?: string;
  readonly price?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}