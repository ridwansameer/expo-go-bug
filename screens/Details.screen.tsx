import { Text, View } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
  const item = route?.params?.item;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Go back when clicked Details */}
      <Text onPress={() => navigation.goBack()}>
        This page will contain details of:
      </Text>
      <Text>{item ? item.name : null}</Text>
    </View>
  );
}
