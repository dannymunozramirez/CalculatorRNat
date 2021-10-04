import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {UseCalculator} from '../hooks/UseCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    prevNumber,
    number,
    clear,
    positiveNegative,
    btnDelete,
    divButton,
    buildNumber,
    mulButton,
    sumButton,
    resButton,
    calculation,
  } = UseCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.resultSmall}>{prevNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Button row */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clear} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={divButton} />
      </View>
      {/* Button row */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={mulButton} />
      </View>
      {/* Button row */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={resButton} />
      </View>
      {/* Button row */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={sumButton} />
      </View>
      {/* Button row */}
      <View style={styles.row}>
        <ButtonCalc text="0" buttonWidth action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculation} />
      </View>
    </View>
  );
};
