import { Text, View } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { UseCalculator } from '../hooks/UseCalculator';

export const CalculatorScreen = () => {

    const { number, buildNumber, clean, deleteOperation } = UseCalculator();

    return (
        <View style={styles.calculatorContainer}>
            <View style={ { paddingHorizontal: 30, paddingBottom: 20 } }>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.mainResult}
                >{
                        number}
                </Text>
                <Text style={styles.subResult}>15</Text>
            </View>

            <View style={styles.row}>
                <CalculatorButton onPress={() => clean()} label="C" color={colors.lightGray} blackText />
                <CalculatorButton onPress={() => console.log('+/-')} label="+/-" color={colors.lightGray} blackText />
                <CalculatorButton onPress={() => console.log('del')} label="del" color={colors.lightGray} blackText />
                <CalculatorButton onPress={() => console.log('/')} label="/" color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber('7')} label="7" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('8')} label="8" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('9')} label="9" color={colors.darkGray} />
                <CalculatorButton onPress={() => console.log('X')} label="X" color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber('4')} label="4" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('5')} label="5" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('6')} label="6" color={colors.darkGray} />
                <CalculatorButton onPress={() => console.log('-')} label="-" color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber('1')} label="1" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('2')} label="2" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber('3')} label="3" color={colors.darkGray} />
                <CalculatorButton onPress={() => console.log('+')} label="+" color={colors.orange} />
            </View>
            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber('0')} label="0" color={colors.darkGray} doubleSize={true} />
                <CalculatorButton onPress={() => buildNumber('.')} label="." color={colors.darkGray} />
                <CalculatorButton onPress={() => console.log('=')} label="=" color={colors.orange} />
            </View>
        </View>
    );
};




