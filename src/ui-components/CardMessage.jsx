/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function CardMessage(props) {
  const { target, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      alignItems="flex-start"
      gap="0"
      width="289px"
      position="relative"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <View
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        grow="1"
        width="257px"
        position="relative"
        basis="257px"
        height="53px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      >
        <Flex
          padding="4px 8px 4px 8px"
          backgroundColor="rgba(123.0000002682209,119.00000050663948,254.00000005960464,1)"
          alignItems="center"
          top="-5px"
          borderRadius="99px"
          left="204px"
          gap="0"
          display={
            target?.isModified && target?.isModified == "true"
              ? "auto"
              : "hidden"
          }
          position="absolute"
          justifyContent="center"
          direction="row"
          {...getOverrideProps(overrides, "Flex.View[0].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(255,255,255,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            letterSpacing="0.49px"
            justifyContent="flex-start"
            fontFamily="Inter"
            fontSize="16px"
            lineHeight="20px"
            position="relative"
            fontWeight="700"
            direction="column"
            children="New"
            {...getOverrideProps(overrides, "Flex.View[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          top="5px"
          left="0px"
          gap="0"
          width="257px"
          position="absolute"
          direction="column"
          {...getOverrideProps(overrides, "Flex.View[0].Flex[1]")}
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
            {...getOverrideProps(overrides, "Flex.View[0].Flex[1].Text[0]")}
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
            {...getOverrideProps(overrides, "Flex.View[0].Flex[1].Text[1]")}
          ></Text>
        </Flex>
      </View>
    </Flex>
  );
}
