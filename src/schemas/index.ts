/* eslint-disable @typescript-eslint/no-unused-vars -- generated type definition */

/*
 * Code generated by graphql-codegen.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: unknown;
  ObjectId: unknown;
};

export type Cultivar = {
  __typename?: 'Cultivar';
  _id?: Maybe<Scalars['ObjectId']>;
  creation_date?: Maybe<Scalars['DateTime']>;
  cultivar?: Maybe<Scalars['String']>;
  last_update_date?: Maybe<Scalars['DateTime']>;
  origin?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  scoville_scale?: Maybe<CultivarScoville_scale>;
  species?: Maybe<Scalars['String']>;
};

export type CultivarInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  creation_date?: InputMaybe<Scalars['DateTime']>;
  cultivar?: InputMaybe<Scalars['String']>;
  last_update_date?: InputMaybe<Scalars['DateTime']>;
  origin?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
  scoville_scale?: InputMaybe<CultivarScoville_scaleInsertInput>;
  species?: InputMaybe<Scalars['String']>;
};

export type CultivarQueryInput = {
  AND?: InputMaybe<Array<CultivarQueryInput>>;
  OR?: InputMaybe<Array<CultivarQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  creation_date?: InputMaybe<Scalars['DateTime']>;
  creation_date_exists?: InputMaybe<Scalars['Boolean']>;
  creation_date_gt?: InputMaybe<Scalars['DateTime']>;
  creation_date_gte?: InputMaybe<Scalars['DateTime']>;
  creation_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  creation_date_lt?: InputMaybe<Scalars['DateTime']>;
  creation_date_lte?: InputMaybe<Scalars['DateTime']>;
  creation_date_ne?: InputMaybe<Scalars['DateTime']>;
  creation_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  cultivar?: InputMaybe<Scalars['String']>;
  cultivar_exists?: InputMaybe<Scalars['Boolean']>;
  cultivar_gt?: InputMaybe<Scalars['String']>;
  cultivar_gte?: InputMaybe<Scalars['String']>;
  cultivar_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cultivar_lt?: InputMaybe<Scalars['String']>;
  cultivar_lte?: InputMaybe<Scalars['String']>;
  cultivar_ne?: InputMaybe<Scalars['String']>;
  cultivar_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last_update_date?: InputMaybe<Scalars['DateTime']>;
  last_update_date_exists?: InputMaybe<Scalars['Boolean']>;
  last_update_date_gt?: InputMaybe<Scalars['DateTime']>;
  last_update_date_gte?: InputMaybe<Scalars['DateTime']>;
  last_update_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  last_update_date_lt?: InputMaybe<Scalars['DateTime']>;
  last_update_date_lte?: InputMaybe<Scalars['DateTime']>;
  last_update_date_ne?: InputMaybe<Scalars['DateTime']>;
  last_update_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  origin?: InputMaybe<Scalars['String']>;
  origin_exists?: InputMaybe<Scalars['Boolean']>;
  origin_gt?: InputMaybe<Scalars['String']>;
  origin_gte?: InputMaybe<Scalars['String']>;
  origin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  origin_lt?: InputMaybe<Scalars['String']>;
  origin_lte?: InputMaybe<Scalars['String']>;
  origin_ne?: InputMaybe<Scalars['String']>;
  origin_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  owner_id?: InputMaybe<Scalars['String']>;
  owner_id_exists?: InputMaybe<Scalars['Boolean']>;
  owner_id_gt?: InputMaybe<Scalars['String']>;
  owner_id_gte?: InputMaybe<Scalars['String']>;
  owner_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  owner_id_lt?: InputMaybe<Scalars['String']>;
  owner_id_lte?: InputMaybe<Scalars['String']>;
  owner_id_ne?: InputMaybe<Scalars['String']>;
  owner_id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  scoville_scale?: InputMaybe<CultivarScoville_scaleQueryInput>;
  scoville_scale_exists?: InputMaybe<Scalars['Boolean']>;
  species?: InputMaybe<Scalars['String']>;
  species_exists?: InputMaybe<Scalars['Boolean']>;
  species_gt?: InputMaybe<Scalars['String']>;
  species_gte?: InputMaybe<Scalars['String']>;
  species_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  species_lt?: InputMaybe<Scalars['String']>;
  species_lte?: InputMaybe<Scalars['String']>;
  species_ne?: InputMaybe<Scalars['String']>;
  species_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CultivarScoville_scale = {
  __typename?: 'CultivarScoville_scale';
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type CultivarScoville_scaleInsertInput = {
  from?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Int']>;
};

export type CultivarScoville_scaleQueryInput = {
  AND?: InputMaybe<Array<CultivarScoville_scaleQueryInput>>;
  OR?: InputMaybe<Array<CultivarScoville_scaleQueryInput>>;
  from?: InputMaybe<Scalars['Int']>;
  from_exists?: InputMaybe<Scalars['Boolean']>;
  from_gt?: InputMaybe<Scalars['Int']>;
  from_gte?: InputMaybe<Scalars['Int']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  from_lt?: InputMaybe<Scalars['Int']>;
  from_lte?: InputMaybe<Scalars['Int']>;
  from_ne?: InputMaybe<Scalars['Int']>;
  from_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  to?: InputMaybe<Scalars['Int']>;
  to_exists?: InputMaybe<Scalars['Boolean']>;
  to_gt?: InputMaybe<Scalars['Int']>;
  to_gte?: InputMaybe<Scalars['Int']>;
  to_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  to_lt?: InputMaybe<Scalars['Int']>;
  to_lte?: InputMaybe<Scalars['Int']>;
  to_ne?: InputMaybe<Scalars['Int']>;
  to_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type CultivarScoville_scaleUpdateInput = {
  from?: InputMaybe<Scalars['Int']>;
  from_inc?: InputMaybe<Scalars['Int']>;
  from_unset?: InputMaybe<Scalars['Boolean']>;
  to?: InputMaybe<Scalars['Int']>;
  to_inc?: InputMaybe<Scalars['Int']>;
  to_unset?: InputMaybe<Scalars['Boolean']>;
};

export enum CultivarSortByInput {
  CREATION_DATE_ASC = 'CREATION_DATE_ASC',
  CREATION_DATE_DESC = 'CREATION_DATE_DESC',
  CULTIVAR_ASC = 'CULTIVAR_ASC',
  CULTIVAR_DESC = 'CULTIVAR_DESC',
  LAST_UPDATE_DATE_ASC = 'LAST_UPDATE_DATE_ASC',
  LAST_UPDATE_DATE_DESC = 'LAST_UPDATE_DATE_DESC',
  ORIGIN_ASC = 'ORIGIN_ASC',
  ORIGIN_DESC = 'ORIGIN_DESC',
  OWNER_ID_ASC = 'OWNER_ID_ASC',
  OWNER_ID_DESC = 'OWNER_ID_DESC',
  SPECIES_ASC = 'SPECIES_ASC',
  SPECIES_DESC = 'SPECIES_DESC',
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
}

export type CultivarUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  creation_date?: InputMaybe<Scalars['DateTime']>;
  creation_date_unset?: InputMaybe<Scalars['Boolean']>;
  cultivar?: InputMaybe<Scalars['String']>;
  cultivar_unset?: InputMaybe<Scalars['Boolean']>;
  last_update_date?: InputMaybe<Scalars['DateTime']>;
  last_update_date_unset?: InputMaybe<Scalars['Boolean']>;
  origin?: InputMaybe<Scalars['String']>;
  origin_unset?: InputMaybe<Scalars['Boolean']>;
  owner_id?: InputMaybe<Scalars['String']>;
  owner_id_unset?: InputMaybe<Scalars['Boolean']>;
  scoville_scale?: InputMaybe<CultivarScoville_scaleUpdateInput>;
  scoville_scale_unset?: InputMaybe<Scalars['Boolean']>;
  species?: InputMaybe<Scalars['String']>;
  species_unset?: InputMaybe<Scalars['Boolean']>;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyCultivars?: Maybe<DeleteManyPayload>;
  deleteManySeeds?: Maybe<DeleteManyPayload>;
  deleteOneCultivar?: Maybe<Cultivar>;
  deleteOneSeed?: Maybe<Seed>;
  insertManyCultivars?: Maybe<InsertManyPayload>;
  insertManySeeds?: Maybe<InsertManyPayload>;
  insertOneCultivar?: Maybe<Cultivar>;
  insertOneSeed?: Maybe<Seed>;
  replaceOneCultivar?: Maybe<Cultivar>;
  replaceOneSeed?: Maybe<Seed>;
  updateManyCultivars?: Maybe<UpdateManyPayload>;
  updateManySeeds?: Maybe<UpdateManyPayload>;
  updateOneCultivar?: Maybe<Cultivar>;
  updateOneSeed?: Maybe<Seed>;
  upsertOneCultivar?: Maybe<Cultivar>;
  upsertOneSeed?: Maybe<Seed>;
};

export type MutationdeleteManyCultivarsArgs = {
  query?: InputMaybe<CultivarQueryInput>;
};

export type MutationdeleteManySeedsArgs = {
  query?: InputMaybe<SeedQueryInput>;
};

export type MutationdeleteOneCultivarArgs = {
  query: CultivarQueryInput;
};

export type MutationdeleteOneSeedArgs = {
  query: SeedQueryInput;
};

export type MutationinsertManyCultivarsArgs = {
  data: Array<CultivarInsertInput>;
};

export type MutationinsertManySeedsArgs = {
  data: Array<SeedInsertInput>;
};

export type MutationinsertOneCultivarArgs = {
  data: CultivarInsertInput;
};

export type MutationinsertOneSeedArgs = {
  data: SeedInsertInput;
};

export type MutationreplaceOneCultivarArgs = {
  data: CultivarInsertInput;
  query?: InputMaybe<CultivarQueryInput>;
};

export type MutationreplaceOneSeedArgs = {
  data: SeedInsertInput;
  query?: InputMaybe<SeedQueryInput>;
};

export type MutationupdateManyCultivarsArgs = {
  query?: InputMaybe<CultivarQueryInput>;
  set: CultivarUpdateInput;
};

export type MutationupdateManySeedsArgs = {
  query?: InputMaybe<SeedQueryInput>;
  set: SeedUpdateInput;
};

export type MutationupdateOneCultivarArgs = {
  query?: InputMaybe<CultivarQueryInput>;
  set: CultivarUpdateInput;
};

export type MutationupdateOneSeedArgs = {
  query?: InputMaybe<SeedQueryInput>;
  set: SeedUpdateInput;
};

export type MutationupsertOneCultivarArgs = {
  data: CultivarInsertInput;
  query?: InputMaybe<CultivarQueryInput>;
};

export type MutationupsertOneSeedArgs = {
  data: SeedInsertInput;
  query?: InputMaybe<SeedQueryInput>;
};

export type Query = {
  __typename?: 'Query';
  cultivar?: Maybe<Cultivar>;
  cultivars: Array<Maybe<Cultivar>>;
  seed?: Maybe<Seed>;
  seeds: Array<Maybe<Seed>>;
};

export type QuerycultivarArgs = {
  query?: InputMaybe<CultivarQueryInput>;
};

export type QuerycultivarsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<CultivarQueryInput>;
  sortBy?: InputMaybe<CultivarSortByInput>;
};

export type QueryseedArgs = {
  query?: InputMaybe<SeedQueryInput>;
};

export type QueryseedsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<SeedQueryInput>;
  sortBy?: InputMaybe<SeedSortByInput>;
};

export type Seed = {
  __typename?: 'Seed';
  _id?: Maybe<Scalars['ObjectId']>;
  creation_date?: Maybe<Scalars['DateTime']>;
  cultivar?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  last_update_date?: Maybe<Scalars['DateTime']>;
  owner_id?: Maybe<Scalars['String']>;
  parent_seed?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
};

export type SeedInsertInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  creation_date?: InputMaybe<Scalars['DateTime']>;
  cultivar?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  last_update_date?: InputMaybe<Scalars['DateTime']>;
  owner_id?: InputMaybe<Scalars['String']>;
  parent_seed?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
};

export type SeedQueryInput = {
  AND?: InputMaybe<Array<SeedQueryInput>>;
  OR?: InputMaybe<Array<SeedQueryInput>>;
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['ObjectId']>;
  _id_gte?: InputMaybe<Scalars['ObjectId']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  _id_lt?: InputMaybe<Scalars['ObjectId']>;
  _id_lte?: InputMaybe<Scalars['ObjectId']>;
  _id_ne?: InputMaybe<Scalars['ObjectId']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  creation_date?: InputMaybe<Scalars['DateTime']>;
  creation_date_exists?: InputMaybe<Scalars['Boolean']>;
  creation_date_gt?: InputMaybe<Scalars['DateTime']>;
  creation_date_gte?: InputMaybe<Scalars['DateTime']>;
  creation_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  creation_date_lt?: InputMaybe<Scalars['DateTime']>;
  creation_date_lte?: InputMaybe<Scalars['DateTime']>;
  creation_date_ne?: InputMaybe<Scalars['DateTime']>;
  creation_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  cultivar?: InputMaybe<Scalars['String']>;
  cultivar_exists?: InputMaybe<Scalars['Boolean']>;
  cultivar_gt?: InputMaybe<Scalars['String']>;
  cultivar_gte?: InputMaybe<Scalars['String']>;
  cultivar_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cultivar_lt?: InputMaybe<Scalars['String']>;
  cultivar_lte?: InputMaybe<Scalars['String']>;
  cultivar_ne?: InputMaybe<Scalars['String']>;
  cultivar_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_ne?: InputMaybe<Scalars['DateTime']>;
  date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  details?: InputMaybe<Scalars['String']>;
  details_exists?: InputMaybe<Scalars['Boolean']>;
  details_gt?: InputMaybe<Scalars['String']>;
  details_gte?: InputMaybe<Scalars['String']>;
  details_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  details_lt?: InputMaybe<Scalars['String']>;
  details_lte?: InputMaybe<Scalars['String']>;
  details_ne?: InputMaybe<Scalars['String']>;
  details_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['Int']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_gt?: InputMaybe<Scalars['Int']>;
  id_gte?: InputMaybe<Scalars['Int']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id_lt?: InputMaybe<Scalars['Int']>;
  id_lte?: InputMaybe<Scalars['Int']>;
  id_ne?: InputMaybe<Scalars['Int']>;
  id_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  image?: InputMaybe<Scalars['String']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_ne?: InputMaybe<Scalars['String']>;
  image_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last_update_date?: InputMaybe<Scalars['DateTime']>;
  last_update_date_exists?: InputMaybe<Scalars['Boolean']>;
  last_update_date_gt?: InputMaybe<Scalars['DateTime']>;
  last_update_date_gte?: InputMaybe<Scalars['DateTime']>;
  last_update_date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  last_update_date_lt?: InputMaybe<Scalars['DateTime']>;
  last_update_date_lte?: InputMaybe<Scalars['DateTime']>;
  last_update_date_ne?: InputMaybe<Scalars['DateTime']>;
  last_update_date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  owner_id?: InputMaybe<Scalars['String']>;
  owner_id_exists?: InputMaybe<Scalars['Boolean']>;
  owner_id_gt?: InputMaybe<Scalars['String']>;
  owner_id_gte?: InputMaybe<Scalars['String']>;
  owner_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  owner_id_lt?: InputMaybe<Scalars['String']>;
  owner_id_lte?: InputMaybe<Scalars['String']>;
  owner_id_ne?: InputMaybe<Scalars['String']>;
  owner_id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parent_seed?: InputMaybe<Scalars['Int']>;
  parent_seed_exists?: InputMaybe<Scalars['Boolean']>;
  parent_seed_gt?: InputMaybe<Scalars['Int']>;
  parent_seed_gte?: InputMaybe<Scalars['Int']>;
  parent_seed_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  parent_seed_lt?: InputMaybe<Scalars['Int']>;
  parent_seed_lte?: InputMaybe<Scalars['Int']>;
  parent_seed_ne?: InputMaybe<Scalars['Int']>;
  parent_seed_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  source?: InputMaybe<Scalars['String']>;
  source_exists?: InputMaybe<Scalars['Boolean']>;
  source_gt?: InputMaybe<Scalars['String']>;
  source_gte?: InputMaybe<Scalars['String']>;
  source_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  source_lt?: InputMaybe<Scalars['String']>;
  source_lte?: InputMaybe<Scalars['String']>;
  source_ne?: InputMaybe<Scalars['String']>;
  source_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum SeedSortByInput {
  CREATION_DATE_ASC = 'CREATION_DATE_ASC',
  CREATION_DATE_DESC = 'CREATION_DATE_DESC',
  CULTIVAR_ASC = 'CULTIVAR_ASC',
  CULTIVAR_DESC = 'CULTIVAR_DESC',
  DATE_ASC = 'DATE_ASC',
  DATE_DESC = 'DATE_DESC',
  DETAILS_ASC = 'DETAILS_ASC',
  DETAILS_DESC = 'DETAILS_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  IMAGE_ASC = 'IMAGE_ASC',
  IMAGE_DESC = 'IMAGE_DESC',
  LAST_UPDATE_DATE_ASC = 'LAST_UPDATE_DATE_ASC',
  LAST_UPDATE_DATE_DESC = 'LAST_UPDATE_DATE_DESC',
  OWNER_ID_ASC = 'OWNER_ID_ASC',
  OWNER_ID_DESC = 'OWNER_ID_DESC',
  PARENT_SEED_ASC = 'PARENT_SEED_ASC',
  PARENT_SEED_DESC = 'PARENT_SEED_DESC',
  SOURCE_ASC = 'SOURCE_ASC',
  SOURCE_DESC = 'SOURCE_DESC',
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
}

export type SeedUpdateInput = {
  _id?: InputMaybe<Scalars['ObjectId']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  creation_date?: InputMaybe<Scalars['DateTime']>;
  creation_date_unset?: InputMaybe<Scalars['Boolean']>;
  cultivar?: InputMaybe<Scalars['String']>;
  cultivar_unset?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_unset?: InputMaybe<Scalars['Boolean']>;
  details?: InputMaybe<Scalars['String']>;
  details_unset?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  id_inc?: InputMaybe<Scalars['Int']>;
  id_unset?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['String']>;
  image_unset?: InputMaybe<Scalars['Boolean']>;
  last_update_date?: InputMaybe<Scalars['DateTime']>;
  last_update_date_unset?: InputMaybe<Scalars['Boolean']>;
  owner_id?: InputMaybe<Scalars['String']>;
  owner_id_unset?: InputMaybe<Scalars['Boolean']>;
  parent_seed?: InputMaybe<Scalars['Int']>;
  parent_seed_inc?: InputMaybe<Scalars['Int']>;
  parent_seed_unset?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  source_unset?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};
