/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function TestCard(props) {
  const { hidden, target, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      alignItems="center"
      gap="0"
      position="relative"
      direction="row"
      height="75px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <View
        width="221px"
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        position="relative"
        shrink="0"
        height="43px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          top="-5px"
          left="0px"
          gap="0"
          width="221px"
          position="absolute"
          direction="column"
          {...getOverrideProps(overrides, "Flex.View[0].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="187px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="700"
            direction="column"
            children={target?.msgID}
            {...getOverrideProps(overrides, "Flex.View[0].Flex[0].Text[0]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            letterSpacing="0.010000000000000009px"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="255px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children={target?.ko_KR}
            {...getOverrideProps(overrides, "Flex.View[0].Flex[0].Text[1]")}
          ></Text>
        </Flex>
      </View>
      <Flex
        padding="4px 8px 4px 8px"
        backgroundColor="rgba(123.0000002682209,119.00000050663948,254.00000005960464,1)"
        alignItems="center"
        borderRadius="99px"
        shrink="0"
        gap="0"
        display={
          target?.isModified && target?.isModified == "1" ? "block" : "none"
        }
        position="relative"
        justifyContent="center"
        direction="row"
        height="28px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(255,255,255,1)"
          textAlign="left"
          shrink="0"
          display={
            target?.isModified && target?.isModified == "1" ? "block" : "none"
          }
          letterSpacing="0.32999999999999996px"
          justifyContent="flex-start"
          fontFamily="Inter"
          fontSize="12px"
          lineHeight="20px"
          position="relative"
          fontWeight="700"
          direction="column"
          children="New"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
