/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Target } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardMessage from "./CardMessage";
import { Collection } from "@aws-amplify/ui-react";
export default function CardMessageCollection(props) {
  const { target, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Target,
        }).items;
  return (
    <Collection
      type="list"
      justifyContent="stretch"
      direction="column"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CardMessage
          margin="8px 16px 8px 16px"
          target={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardMessage[0]")}
        ></CardMessage>
      )}
    </Collection>
  );
}
