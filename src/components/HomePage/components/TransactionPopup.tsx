import React, {useState} from 'react';
import {forwardRef} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';

const height = Dimensions.get('window').height;

export const TransactionPopup = forwardRef((props: any, ref: any) => {
  const [visable, setVisable] = useState(false);

  const {onTouchOutside} = props;

  const show = () => {
    setVisable(true);
  };
  const close = () => {
    setVisable(false);
  };

  const renderOutside = (onTouch: any) => {
    const view = <View style={styles.viewOutside} />;

    if (!onTouch) {
      return view;
    }

    return (
      <Pressable onPress={onTouch} style={styles.viewOutside}>
        {view}
      </Pressable>
    );
  };

  return (
    <Modal
      ref={ref}
      animationType={'slide'}
      presentationStyle={'overFullScreen'}
      transparent={true}
      visible={visable}
      onRequestClose={close}>
      <View style={styles.formView}>
        {renderOutside(onTouchOutside)}
        <View style={styles.viewInside}>
          <View>
            <Text>OLA POPUP</Text>
          </View>
        </View>
        {/*  <View style={[styles.transContainer]}>
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
        </View> */}
      </View>
    </Modal>
  );
});

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
    //paddingHorizontal: w - 250,
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

  formView: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'flex-end',
  },

  viewOutside: {
    flex: 1,
    width: '100%',
  },
  viewInside: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    maxHeight: height * 0.4,
  },
});
