import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card} from 'react-native-paper';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = () => {
  const [items, setItems] = useState({});

  const DateLists = [
    { id: 1, day: "2022-08-04", event: "วันเปิดภาคการศึกษา" },
    { id: 2, day: "2022-08-26", event: "ขอถอนรายวิชาโดยบันทึกอักษร W" },
    { id: 3, day: "2022-08-27", event: "ขอถอนรายวิชาโดยบันทึกอักษร W" },
    { id: 4, day: "2022-08-28", event: "ขอถอนรายวิชาโดยบันทึกอักษร W" },
    { id: 5, day: "2022-08-29", event: "ขอถอนรายวิชาโดยบันทึกอักษร W" },
    { id: 6, day: "2022-08-30", event: "ขอถอนรายวิชาโดยบันทึกอักษร W" },
    { id: 7, day: "2022-08-31", event: "ขอถอนรายวิชาโดยบันทึกอักษร W" },
    { id: 8, day: "2022-09-19", event: "วันเริ่มนักศึกษาดูผังสอบกลางภาค"},
    { id: 9, day: "2022-09-25", event: "สัปดาห์ของการสอบกลางภาค" },
    { id: 10, day: "2022-09-26", event: "สัปดาห์ของการสอบกลางภาค" },
    { id: 11, day: "2022-09-27", event: "สัปดาห์ของการสอบกลางภาค" },
    { id: 12, day: "2022-09-28", event: "สัปดาห์ของการสอบกลางภาค" },
    { id: 13, day: "2022-09-29", event: "สัปดาห์ของการสอบกลางภาค" },
    { id: 14, day: "2022-09-30", event: "สัปดาห์ของการสอบกลางภาค" },
    { id: 15, day: "2022-10-01", event: "สัปดาห์ของการสอบกลางภาค" },
    { id: 16, day: "2022-10-02", event: "สัปดาห์ของการสอบกลางภาค" },
    { id: 17, day: "2022-11-21", event: "วันเริ่มนักศึกษาดูผังสอบปลายภาค"},
    { id: 18, day: "2022-11-26", event: "วันสุดท้ายของภาคการศึกษา" },
    { id: 19, day: "2022-11-27", event: "วันปิดภาคการศึกษา" },
    { id: 20, day: "2022-11-28", event: "ช่วงการสอบปลายภาค" },
    { id: 21, day: "2022-11-29", event: "ช่วงการสอบปลายภาค" },
    { id: 22, day: "2022-11-30", event: "ช่วงการสอบปลายภาค" },
    { id: 23, day: "2022-12-01", event: "ช่วงการสอบปลายภาค" },
    { id: 24, day: "2022-12-02", event: "ช่วงการสอบปลายภาค" },
    { id: 25, day: "2022-12-03", event: "ช่วงการสอบปลายภาค" },
    { id: 26, day: "2022-12-04", event: "ช่วงการสอบปลายภาค" },
    { id: 27, day: "2022-12-06", event: "ช่วงการสอบปลายภาค" },
    { id: 28, day: "2022-12-07", event: "ช่วงการสอบปลายภาค" },
    { id: 29, day: "2022-12-08", event: "ช่วงการสอบปลายภาค" },
    { id: 30, day: "2022-12-09", event: "ช่วงการสอบปลายภาค" },
    { id: 31, day: "2022-12-13", event: "ช่วงการสอบปลายภาค" },
    { id: 32, day: "2022-12-14", event: "ช่วงการสอบปลายภาค" },
    { id: 33, day: "2022-12-15", event: "ช่วงการสอบปลายภาค" },
    { id: 34, day: "2022-12-16", event: "ช่วงการสอบปลายภาค" },
  ];

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
          if (!items[strTime]) {
            items[strTime] = [];
            const numItems = Math.floor(1);
            for (let j = 0; j < numItems; j++) {
              DateLists.map((product) => {
              if (strTime == product.day) {
                items[strTime].push({
                  events: product.event,
                  day: product.day
                })
              }} 
              )
            }
          }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17 ,top: 12}}>
        <Card style={{backgroundColor: '#FDEED2'}}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.events + "  "+ item.day}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={Date.now()}
        renderItem={renderItem}
        showClosingKnob={true}
        theme={{
          agendaDayTextColor: "darkorange",
          agendaDayNumColor: "#3c3c3c",
          agendaKnobColor: "lightgrey",
          backgroundColor: "#fffbed",
          monthTextColor: "darkorange",
          textSectionTitleColor: "darkorange",
          dayTextColor: "#5d6e1e",
          selectedDayBackgroundColor: "darkorange",
          todayTextColor: "red",
          dotColor: "#FF4500",
          selectedDotColor: "#FF4500",
        }}
        pastScrollRange={12}
        futureScrollRange={12}
      />
    </View>
  );
};


export default Schedule;