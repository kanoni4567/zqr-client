import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const ClaimBodyModal = props => (
  <Modal
    visible={props.display}
    animationType='slide'
    onRequestClose={() => console.log("closed")}>
    <View style={styles.modal}>
      <Text style={styles.text}>Name: {props.body.name}</Text>
      <Text style={styles.text}>HP: {props.body.health}</Text>
      <Text style={styles.text}>Attack: {props.body.attack}</Text>
      <Text style={styles.text}>Defense: {props.body.defense}</Text>
      <Text style={styles.text}>Speed: {props.body.speed}</Text>

      <TouchableOpacity style={styles.button} onPress={props.onConfirm}>
        <Text>Take Over</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={props.onClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 20
  },
  button: {
    margin: 20
  }
});

export default ClaimBodyModal;
