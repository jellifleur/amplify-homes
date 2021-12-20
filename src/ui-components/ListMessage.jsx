/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function ListMessage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
      alignItems="flex-start"
      gap="10px"
      width="385px"
      position="relative"
      direction="row"
      height="762px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    ></Flex>
  );
}
