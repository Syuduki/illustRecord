import { render, shallow } from 'enzyme';
import * as React from 'react';
import { SearchArea } from '.';
import { props } from './fixtures';

describe('SearchArea', () => {
  const searchArea = shallow(<SearchArea {...props} />);
  test('render', () => {
    expect(searchArea.exists());
  });
  test('placeHolder', () => {
    expect(searchArea.find('#SearchInputBox').props().placeholder).toEqual(
      '作品を検索'
    );
  });
  test('keydown - Enter', () => {
    // onKeyDownの場合、keypressだと認識されない。以下のようにkeydownを使用すること
    searchArea.find('#SearchInputBox').simulate('keydown', {
      key: 'Enter',
      target: { value: 'aaa bbb ccc ddd' },
    });
    expect(props.onSubmit).toHaveBeenCalled();
  });
});
