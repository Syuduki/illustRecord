import { render, shallow } from 'enzyme';
import * as React from 'react';
import { DateField } from './DateField';
import { TextField } from '@mui/material';
import { props } from './fixture';
import { DatePicker } from '@mui/lab';

describe('DateField', () => {
  const dateField = shallow(<DateField {...props} />);

  test('render', () => {
    expect(dateField.exists());
  });

  test('labelの確認', () => {
    expect(dateField.find(DatePicker).first().props().label).toEqual(
      'MOCK日付'
    );
  });
  test('valueの確認', () => {
    expect(dateField.find(DatePicker).first().props().value).toEqual(
      '2022/02/02'
    );
  });
  // 未対応
  //   test('textField event onBlur', () => {
  //     dateField
  //       .find(DatePicker)
  //       .first()
  //       .simulate('blur', { target: { value: '2022/05/10' } });
  //     expect(props.setValue).toHaveBeenCalled();
  //   });
});

// describe('TextField', () => {
//   const textField = shallow(<TextField {...props} />);

//   test('render', () => {
//     expect(textField.exists());
//   });

//   test('label 確認', () => {
//     expect(textField.find(TextField).first().props().label).toEqual('MOCK日付');
//   });
//   test('value 確認', () => {
//     expect(textField.find(TextField).first().props().value).toEqual(
//       '2022/02/02'
//     );
//   });
// });
