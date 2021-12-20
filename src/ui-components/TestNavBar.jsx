/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function TestNavBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(123.0000002682209,119.00000050663948,254.00000005960464,1)"
      alignItems="center"
      gap="20px"
      width="1198px"
      position="relative"
      justifyContent="center"
      direction="row"
      height="60px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        alignItems="center"
        shrink="0"
        gap="2px"
        position="relative"
        justifyContent="center"
        direction="row"
        height="12px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(255,255,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          fontSize="20px"
          lineHeight="23.4375px"
          position="relative"
          fontWeight="400"
          textTransform="capitalize"
          direction="column"
          children="Logo"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        alignItems="center"
        shrink="0"
        gap="32px"
        width="1065px"
        position="relative"
        justifyContent="flex-end"
        direction="row"
        height="36px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          alignItems="flex-start"
          shrink="0"
          gap="20px"
          width="307px"
          position="relative"
          direction="row"
          height="18px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")}
        >
          <Image
            width="28px"
            padding="0px 0px 0px 0px"
            position="relative"
            shrink="0"
            height="18px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Image[0]")}
          ></Image>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(255,255,255,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Roboto"
            fontSize="12px"
            lineHeight="14.0625px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="한국어"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[0]")}
          ></Text>
          <Icon
            pathData="M5 0L9.33013 6L0.669873 6L5 0Z"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 8 }}
            color="rgba(255,255,255,1)"
            shrink="0"
            width="10px"
            position="relative"
            height="8px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Icon[0]")}
          ></Icon>
          <Flex
            width="14px"
            padding="0px 0px 0px 0px"
            position="relative"
            shrink="0"
            height="7px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Flex[0]")}
          >
            <Icon
              pathData="M0 0L14 0L14 -1L0 -1L0 0Z"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 0 }}
              color="rgba(255,255,255,1)"
              top="4px"
              left="0px"
              width="14px"
              position="absolute"
              height="0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].Flex[0].Icon[0]"
              )}
            ></Icon>
            <Icon
              transform="matrix(0.7071067690849304, 0.7071067690849304, -0.7071067690849304, 0.7071067690849304, 10, 0)"
              pathData="M0 0L5.65685 0L5.65685 -1L0 -1L0 0Z"
              viewBox={{ minX: 0, minY: 0, width: 4, height: 4 }}
              color="rgba(255,255,255,1)"
              width="5.656854152679443px"
              position="absolute"
              transformOrigin="top left"
              height="0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].Flex[0].Icon[1]"
              )}
            ></Icon>
            <Icon
              pathData="M0 0L14 0L14 -1L0 -1L0 0Z"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 0 }}
              color="rgba(255,255,255,1)"
              top="7px"
              left="0px"
              width="14px"
              position="absolute"
              height="0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].Flex[0].Icon[2]"
              )}
            ></Icon>
          </Flex>
          <Image
            width="26px"
            padding="0px 0px 0px 0px"
            position="relative"
            shrink="0"
            height="17.08571434020996px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Image[1]")}
          ></Image>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(255,255,255,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Roboto"
            fontSize="12px"
            lineHeight="14.0625px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="English"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[1]")}
          ></Text>
          <Icon
            pathData="M5 0L9.33013 6L0.669873 6L5 0Z"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 8 }}
            color="rgba(255,255,255,1)"
            shrink="0"
            width="10px"
            position="relative"
            height="8px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Icon[1]")}
          ></Icon>
        </Flex>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(255,255,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          letterSpacing="0.010000000000000009px"
          justifyContent="flex-start"
          fontFamily="Inter"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="DANBAM"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          shrink="0"
          gap="4px"
          width="222px"
          position="relative"
          justifyContent="center"
          direction="column"
          height="36px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1]")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            position="relative"
            shrink="0"
            gap="0"
            direction="column"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[0]")}
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
              height="36px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[1].Flex[0].Flex[0]"
              )}
            >
              <Text
                padding="0px 0px 0px 0px"
                alignSelf="stretch"
                grow="1"
                color="rgba(128.0000075697899,128.0000075697899,128.0000075697899,1)"
                textAlign="left"
                display="flex"
                basis="164px"
                justifyContent="flex-start"
                fontFamily="Inter"
                width="164px"
                fontSize="14px"
                lineHeight="20px"
                position="relative"
                fontWeight="400"
                direction="column"
                children="Group name"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[1].Flex[1].Flex[0].Flex[0].Text[0]"
                )}
              ></Text>
              <View
                width="24px"
                padding="0px 0px 0px 0px"
                overflow="hidden"
                position="relative"
                shrink="0"
                height="24px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[1].Flex[1].Flex[0].Flex[0].View[0]"
                )}
              >
                <Icon
                  pathData="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 12,
                    height: 7.409999847412109,
                  }}
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  top="8.59000015258789px"
                  left="6px"
                  width="12px"
                  position="absolute"
                  height="7.409999847412109px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[1].Flex[1].Flex[0].Flex[0].View[0].Icon[0]"
                  )}
                ></Icon>
              </View>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          padding="12px 24px 12px 24px"
          backgroundColor="rgba(79.00000289082527,78.00000295042992,83.00000265240669,1)"
          alignItems="center"
          borderRadius="4px"
          shrink="0"
          gap="10px"
          width="42px"
          position="relative"
          justifyContent="center"
          direction="row"
          height="34px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[2]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(255,255,255,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            letterSpacing="0.65px"
            justifyContent="flex-start"
            fontFamily="Inter"
            fontSize="20px"
            lineHeight="24px"
            position="relative"
            fontWeight="700"
            direction="column"
            children="+"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[2].Text[0]")}
          ></Text>
        </Flex>
        <View
          width="24px"
          padding="0px 0px 0px 0px"
          overflow="hidden"
          position="relative"
          shrink="0"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[1].View[0]")}
        >
          <Icon
            pathData="M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
            color="rgba(51.00000075995922,51.00000075995922,51.00000075995922,1)"
            top="2.5px"
            left="4px"
            width="16px"
            position="absolute"
            height="19.5px"
            {...getOverrideProps(overrides, "Flex.Flex[1].View[0].Icon[0]")}
          ></Icon>
        </View>
        <View
          width="24px"
          padding="0px 0px 0px 0px"
          overflow="hidden"
          position="relative"
          shrink="0"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[1].View[1]")}
        >
          <Icon
            pathData="M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
            color="rgba(51.00000075995922,51.00000075995922,51.00000075995922,1)"
            top="2.5px"
            left="4px"
            width="16px"
            position="absolute"
            height="19.5px"
            {...getOverrideProps(overrides, "Flex.Flex[1].View[1].Icon[0]")}
          ></Icon>
        </View>
        <View
          width="24px"
          padding="0px 0px 0px 0px"
          overflow="hidden"
          position="relative"
          shrink="0"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[1].View[2]")}
        >
          <Icon
            pathData="M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
            color="rgba(51.00000075995922,51.00000075995922,51.00000075995922,1)"
            top="2.5px"
            left="4px"
            width="16px"
            position="absolute"
            height="19.5px"
            {...getOverrideProps(overrides, "Flex.Flex[1].View[2].Icon[0]")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
