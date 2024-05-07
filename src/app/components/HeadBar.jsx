import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../style/headBar";

export default function HeadBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Botão 01</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Botão 02</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Botão 03</Text>
      </TouchableOpacity>
    </View>
  );
}
