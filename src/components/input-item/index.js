import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { TextInput } from 'react-native';

const InputItem = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    getValue: () => text,
    setValue: (value) => setText(value),
  }))

  return (
    <TextInput
      defaultValue={text}
      onChangeText={setText}
      {...props}
    />
  )
})

export default InputItem