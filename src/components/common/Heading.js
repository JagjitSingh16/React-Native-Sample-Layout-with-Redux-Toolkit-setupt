import {Text} from 'react-native';
import React from 'react';

const Heading = ({
  text,
  fontSize,
  fontWeight,
  textTransform,
  textAlign,
  textDecorationLine,
  color,
  backgroundColor,
}) => {
  return (
    <Text
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        textTransform: textTransform,
        textAlign: textAlign,
        textDecorationLine: textDecorationLine,
        color: color,
        backgroundColor: backgroundColor,
      }}>
      {text}
    </Text>
  );
};

export default Heading;
