import { View, Text, Image, StyleSheet } from 'react-native';

export const QuizComponent = (props: any) => {
  const { image, topic, subject, name, difficulty, time } = props;
  return (
    <View style={styles.container}>
      <Text>I'll be cool when I grow up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    width: 250,
    height: 250,
  },
});
