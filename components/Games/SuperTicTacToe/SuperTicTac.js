import { StyleSheet, View, Text } from "react-native";
import React from 'react'
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

const SuperTicTac = () => {
  return (
    <View>
      <Text>SuperTicTacToe</Text>
    </View>
  )
}

export default SuperTicTac

