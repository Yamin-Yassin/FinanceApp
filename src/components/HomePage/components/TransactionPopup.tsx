import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

export const TransactionPopup = (props: any, ref: any) => {
  const [visable, setVisable] = useState(false);

  const show = () => {
    setVisable(true);
  };
  const close = () => {
    setVisable(false);
  };

  const renderOutsidePressable = onTouch => {
    const view = <View style={{flex: 1, width: '100%'}} />;

    if (onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={visable}
        onRequestClose={close}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'coral',
            justifyContent: 'flex-end',
          }}>
          <Text style={[styles.welcomeText, styles.containerUser]}>
            Add a new transaction
          </Text>

          <View style={[styles.transContainer]}>
            <TextInput
              style={[styles.inputContainer, styles.transName]}
              placeholder="Transaction name"
              accessible
            />
            <TextInput
              style={[styles.inputContainer, styles.transDate]}
              placeholder="Transaction date"
            />
          </View>

          <View style={[styles.transContainer]}>
            <TextInput
              style={[styles.inputContainer, styles.transDescr]}
              placeholder="Transaction description"
              multiline={true}
              textAlignVertical="center"
            />
          </View>

          <View style={[styles.transContainer]}>
            <TextInput
              keyboardType="numbers-and-punctuation"
              style={[styles.inputContainer, styles.transValue]}
              placeholder="€ Value"
            />
            <Pressable style={styles.button}>
              <Text>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingTop: 5,
  },

  avatar: {
    width: 60,
    height: 55,
    borderRadius: 40,
  },

  welcomeText: {
    fontSize: 26,
    fontWeight: '200',
  },

  welcomeName: {
    opacity: 0.8,
    paddingStart: 10,
  },

  containerUser: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  balanceContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  transListContainer: {
    height: 250,
  },

  inputContainer: {
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 6,
    borderColor: 'grey',
  },

  transContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  transName: {
    paddingHorizontal: 30,
  },

  transDate: {
    paddingHorizontal: 15,
  },

  transDescr: {
    paddingHorizontal: w - 250,
    paddingVertical: 30,
  },

  transValue: {
    paddingHorizontal: 60,
  },

  button: {
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
    borderRadius: 20,
    paddingHorizontal: 60,
  },
});
