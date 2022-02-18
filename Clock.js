import React, { Fragment} from "react";
import { StyleSheet, Text, View ,SectionList} from 'react-native';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <View>
          <View style={styles.clock}>
            <View style={styles.clockSec}>
              <p style={{fontSize:23,fontWeight:"bold"}}>{timerDays}</p>
              <small>ימים</small>
            </View>
            <span>:</span>
            <View style={styles.clockSec}>
              <p style={{fontSize:23,fontWeight:"bold"}}>{timerHours}</p>
              <small>שעות</small>
            </View>{" "}
            <span>:</span>
            <View style={styles.clockSec}>
              <p style={{fontSize:23,fontWeight:"bold"}}>{timerMinutes}</p>
              <small>דקות</small>
            </View>{" "}
            <span>:</span>
            <View style={styles.clockSec}>
              <p style={{fontSize:23,fontWeight:"bold"}}>{timerSeconds}</p>
              <small>שניות</small>
            </View>
          </View>
    </View>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

const styles = StyleSheet.create({
  clock: {
    position: "relative",
    margin: 15,
    paddingHorizontal:25,
    fontFamily: 'Arial',
    shadowRadius:20,
    shadowColor:"#00000030",
    shadowOpacity:0.9,
    paddingBottom:10,
    display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    fontWeight:"bold",
    color: "#00000",
    backgroundColor:"#f6f6f6",
    borderRadius: 15,
    borderWidth:1 ,
  },
  clockSec:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  }
});
export default Clock;
