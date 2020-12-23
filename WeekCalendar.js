import React, { useEffect, useState } from 'react';
import { StatusBarm } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { addDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';

const WeekCalendar = ({ date, onChange }) => {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]);

  console.log(week, 'week');

  const getWeekDays = (date) => {
    const start = startOfWeek(date, { weekStartsOn: 1 });
    const weekOfLength = 7;
    const final = [];
    for (let i = 0; i < weekOfLength; i++) {
      const date = addDays(start, i);
      final.push({
        formatted: format(date, 'EEE'),
        date,
        day: getDate(date),
      });
    }

    return final;
  };

  return (
    <View style={styles.container}>
      {week.map((weekDay) => {
        const textStyles = [styles.dayText];
        const touchableStyles = [styles.touchableDay];
        const sameDay = isSameDay(weekDay.date, date);

        if (sameDay) {
          textStyles.push(styles.selectedDayText);
          touchableStyles.push(styles.selectedTouchableDay);
        }
        return (
          <View styles={styles.weekDayItems} key={weekDay.formatted}>
            <Text style={styles.weekDayText}>{weekDay.formatted}</Text>
            <TouchableOpacity
              onPress={() => onChange(weekDay.date)}
              style={touchableStyles}>
              <Text style={textStyles}>{weekDay.day}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  weekDayItems: {},
  weekDayText: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 5,
  },
  dayText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  selectedDayText: {
    color: 'white',
  },
  touchableDay: {
    borderRadius: 20,
    padding: 6.5,
    height: 33,
    width: 33,
  },
  selectedTouchableDay: {
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WeekCalendar;
