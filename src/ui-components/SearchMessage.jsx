/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SearchMessage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="273px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="40px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="14px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="11px"
        left="0px"
        height="18px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <Icon
          pathData="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
          viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
          color="rgba(255,255,255,1)"
          top="0px"
          left="0px"
          width="14px"
          position="absolute"
          height="14px"
          {...getOverrideProps(overrides, "View.View[0].Icon[0]")}
        ></Icon>
        <Icon
          transform="matrix(0.5533979535102844, 0.8329169750213623, -0.8329169750213623, 0.5533979535102844, 9.8199462890625, 11.7086181640625)"
          pathData="M0 -1.11022e-16L7.55343 -1.11022e-16L7.55343 -2L0 -2L0 -1.11022e-16Z"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 4.1800537109375,
            height: 6.2913818359375,
          }}
          color="rgba(139.18750405311584,139.18750405311584,139.18750405311584,1)"
          width="7.553431987762451px"
          position="absolute"
          transformOrigin="top left"
          height="0px"
          {...getOverrideProps(overrides, "View.View[0].Icon[1]")}
        ></Icon>
      </View>
      <Flex
        padding="0px 0px 0px 0px"
        top="0px"
        left="35px"
        gap="4px"
        width="238px"
        position="absolute"
        direction="column"
        {...getOverrideProps(overrides, "View.Flex[0]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          position="relative"
          shrink="0"
          gap="0"
          direction="column"
          {...getOverrideProps(overrides, "View.Flex[0].Flex[0]")}
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
            direction="column"
            {...getOverrideProps(overrides, "View.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              padding="0px 0px 0px 0px"
              alignSelf="stretch"
              color="rgba(128.0000075697899,128.0000075697899,128.0000075697899,1)"
              textAlign="left"
              shrink="0"
              display="flex"
              justifyContent="flex-start"
              fontFamily="Inter"
              width="214px"
              fontSize="12px"
              lineHeight="24px"
              position="relative"
              fontWeight="400"
              direction="column"
              children="메시지 혹은 문구를 검색하세요."
              {...getOverrideProps(
                overrides,
                "View.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
