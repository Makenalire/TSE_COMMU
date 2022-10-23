import { Agenda } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';


export default function Calendar() {
    return(
        <View style={{flex: 1}}>
            <Agenda
            selected={Date.now()}
            showClosingKnob={true}
            theme={{
                agendaDayTextColor: 'darkorange',
                agendaDayNumColor: '#3c3c3c',
                agendaKnobColor: 'lightgrey',
                backgroundColor: '#fffbed',
                monthTextColor: 'darkorange',
                textSectionTitleColor: 'darkorange',
                dayTextColor: '#5d6e1e',
                selectedDayBackgroundColor: 'darkorange',
                todayTextColor: 'red',
                dotColor: '#FF4500',
                selectedDotColor: '#FF4500',
            }}
            />
        </View>
    )
}