import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

interface QuizProps {
  id: number;
  topic: string;
  subject: string;
  name: string;
  difficulty: string;
  time: string;
  image: string;
  onPress: () => void;
}

export const QuizComponent = ({
  id,
  topic,
  subject,
  name,
  difficulty,
  time,
  image,
  onPress,
}: QuizProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            height: 150,
            width: '100%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={{ uri: image }}
          resizeMode='center'
        />
        <View style={styles.infoContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.topicText}>{topic.toUpperCase()}</Text>
            <Text style={styles.subjectButton}>{subject}</Text>
          </View>
          <View>
            <Text style={styles.quizNameText}>{name}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.difficultyButton}>:) {difficulty}</Text>
            <Text>{time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    // width: 300,
    // maxWidth: width / 3 - 5,
    paddingBottom: 10,
  },
  infoContainer: {
    paddingHorizontal: 5,
  },
  topicText: {
    fontWeight: 'bold',
  },
  rowContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subjectButton: {
    backgroundColor: '#6366F1',
    padding: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 100,
  },
  quizNameText: {
    fontWeight: 'bold',
    color: '#1E40AF',
    fontSize: 16,
  },
  difficultyButton: {
    backgroundColor: '#3BB269',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    borderRadius: 100,
    paddingVertical: 5,
  },
});
