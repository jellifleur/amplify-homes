/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ButtonNew(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      position="relative"
      alignItems="flex-start"
      gap="0"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="12px 24px 12px 24px"
        backgroundColor="rgba(255,255,255,1)"
        alignItems="center"
        borderRadius="4px"
        shrink="0"
        gap="10px"
        width="294px"
        position="relative"
        justifyContent="center"
        direction="row"
        height="48px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(123.0000002682209,119.00000050663948,254.00000005960464,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          letterSpacing="0.49px"
          justifyContent="flex-start"
          fontFamily="Inter"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="700"
          direction="column"
          children="새로운 메시지 등록"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
