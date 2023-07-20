import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Center, HStack, Image, Stack, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart, XAxis } from 'react-native-svg-charts';
import { Rect } from 'react-native-svg';

// Icons
import ArrowDownSvg from "../../../../assets/icons/arrow-down.svg";
import ArrowLeftSvg from "../../../../assets/icons/arrow-left.svg";
import ArrowRightSvg from "../../../../assets/icons/arrow-right.svg";
import LeftSvg from "../../../../assets/icons/left.svg";

// Constants
import { COLOR } from '../../../constants/Color';

const chartData = [
  {
    label: "Jan",
    value: 10,
    color: "#F8F8F8AA",
  },
  {
    label: "Feb",
    value: 20,
    color: "#F8F8F8AA",
  },
  {
    label: "Mar",
    value: 30,
    color: "#F8F8F8AA",
  },
  {
    label: "Apr",
    value: 40,
    color: "#F8F8F8AA",
  },
  {
    label: "May",
    value: 50,
    color: "#F8F8F8",
  },
  {
    label: "Jun",
    value: 35,
    color: "#F8F8F8AA",
  },
];

const Decorator = ({ x, y, data }) => (
  chartData.map((value, index) => (
    <Rect
      key={index}
      x={x(index)}
      y={y(value.value)}
      width={40}
      height={200 - y(value.value)}
      fill={value.color}
    />
  ))
);

const Payout = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <HStack alignItems="center" height="58px">
        <Stack position="absolute" zIndex={99}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/left.svg")} width="11px" height="17px" />
              : <LeftSvg width="11px" height="17px" />
            }
          </TouchableOpacity>
        </Stack>
        <Center width="100%">
          <Text fontFamily="Archivo-Bold" fontSize={20} color={COLOR.white}>
            Your Payout
          </Text>
        </Center>
      </HStack>
      <HStack alignItems="center" space={3} marginTop={5}>
        <Text fontFamily="Archivo-Bold" fontSize={9} color={COLOR.white}>
          Select month
        </Text>
        <TouchableOpacity>
          <HStack style={styles.selectBtn}>
            <Text fontFamily="Archivo" fontSize={9} color={COLOR.white} letterSpacing="0.09px">
              May 2022
            </Text>
            {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-down.svg")} width="7px" height="7px" />
              : <ArrowDownSvg width="7px" height="7px" />
            }
          </HStack>
        </TouchableOpacity>
      </HStack>
      <HStack justifyContent="space-between" alignItems="center" marginTop={3}>
        <Text fontFamily="Archivo-Bold" fontSize={30} color={COLOR.white} letterSpacing={0.3}>
          {`$ 30,000.00`}
        </Text>
        <Text fontFamily="Archivo" fontSize={12} color={COLOR.white} letterSpacing={0.12}>
          {`15M streams`}
        </Text>
      </HStack>
      <Text fontFamily="Archivo" fontSize={12} color={COLOR.white} letterSpacing={0.12}>
        {`Earnings for May 2022`}
      </Text>
      <HStack justifyContent="space-between" alignItems="center">
        <TouchableOpacity>
          {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-left.svg")} width="7px" height="7px" />
            : <ArrowLeftSvg width="7px" height="7px" />
          }
        </TouchableOpacity>
        <Stack width="95%">
          <BarChart
            style={{ height: 150, marginTop: 10, }}
            data={chartData}
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 0, bottom: 30 }}
            spacingInner={0.2}
            spacingOuter={0.3}
          >
            <Decorator />
          </BarChart>
          <XAxis
            style={styles.labelContainer}
            data={chartData}
            formatLabel={(_, index) => chartData[index].label.toUpperCase()}
            contentInset={{ left: 35, right: 35 }}
            svg={{ fontSize: 8, fill: COLOR.white }}
          />
        </Stack>
        <TouchableOpacity>
          {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-right.svg")} width="7px" height="7px" />
            : <ArrowRightSvg width="7px" height="7px" />
          }
        </TouchableOpacity>
      </HStack>
      <HStack justifyContent="space-between" alignItems="center" marginTop="13px">
        <HStack alignItems="center" space={2}>
          <TouchableOpacity>
            {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-left.svg")} width="7px" height="7px" />
              : <ArrowLeftSvg width="7px" height="7px" />
            }
          </TouchableOpacity>
          <Text fontFamily="Archivo" fontSize={12} color={COLOR.primary}>
            2021
          </Text>
        </HStack>
        <Text fontFamily="Archivo" fontSize={12} color={COLOR.white}>
          2022
        </Text>
        <HStack alignItems="center" space={2}>
          <Text fontFamily="Archivo" fontSize={12} color={COLOR.primary}>
            2023
          </Text>
          <TouchableOpacity>
            {Platform.OS === 'web' ? <Image source={require("../../../../assets/icons/arrow-right.svg")} width="7px" height="7px" />
              : <ArrowRightSvg width="7px" height="7px" />
            }
          </TouchableOpacity>
        </HStack>
      </HStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
    paddingHorizontal: 20,
  },
  selectBtn: {
    width: 110,
    height: 25,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: COLOR.primary,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 14,
    paddingRight: 9
  },
  labelContainer: {
    borderTopWidth: 1.5,
    borderColor: COLOR.white,
    paddingTop: 5
  }
})

export default Payout;