import React from "react"
import { StyleSheet, StatusBar, SafeAreaView } from "react-native"
import R from "../../assets/R"
import { HEIGHT } from "../../config"

type Props = {
  backgroundColor?: string
  barStyle?: any
}

const MyStatusBar: React.FC<Props> = (props: Props) => {
  const { backgroundColor, barStyle } = props
  const color = backgroundColor || R.colors.primaryColor
  const bar = barStyle || "light-content"
  return (
    <SafeAreaView style={[styles.statusBar, { backgroundColor: color }]}>
      <StatusBar
        networkActivityIndicatorVisible={true}
        translucent
        backgroundColor={color}
        barStyle={bar}
      />
    </SafeAreaView>
  )
}

export default MyStatusBar
const styles = StyleSheet.create({
  statusBar: { height: HEIGHT(30) },
})
