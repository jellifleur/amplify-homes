/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SelectTest(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      width="289.5px"
      padding="0px 0px 0px 0px"
      position="relative"
      gap="0"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        border="1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
        padding="7px 11px 7px 11px"
        alignSelf="stretch"
        alignItems="center"
        borderRadius="4px"
        shrink="0"
        gap="10px"
        position="relative"
        justifyContent="center"
        direction="row"
        height="40px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          grow="1"
          color="rgba(128.0000075697899,128.0000075697899,128.0000075697899,1)"
          textAlign="left"
          display="flex"
          basis="231.5px"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="231.5px"
          fontSize="20px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Placeholder"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <View
          width="24px"
          padding="0px 0px 0px 0px"
          overflow="hidden"
          position="relative"
          shrink="0"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].View[0]")}
        >
          <Icon
            pathData="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
            viewBox={{ minX: 0, minY: 0, width: 12, height: 7.4100341796875 }}
            color="rgba(0,0,0,1)"
            top="8.59000015258789px"
            left="6px"
            width="12px"
            position="absolute"
            height="7.409999847412109px"
            {...getOverrideProps(overrides, "Flex.Flex[0].View[0].Icon[0]")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
