import { shallow } from 'enzyme';
import * as React from 'react';
import { IllustCard } from '.';
import * as fixtures from './fixtures';

import { CardActionArea, CardContent, Typography, Button } from '@mui/material';

describe('<IllustCard />', () => {
  const illustCard = shallow(<IllustCard {...fixtures.props} />);

  test('render', () => {
    expect(illustCard.exists());
  });

  describe('Information is displayed.', () => {
    it('Title', () => {
      expect(
        illustCard.find(CardContent).first().find(Typography).first().text()
      ).toBe(fixtures.props.title);
    });

    it('Explanation', () => {
      expect(
        illustCard.find(CardContent).first().find(Typography).last().text()
      ).toBe(fixtures.props.explanation);
    });

    it('Tag', () => {
      expect(illustCard.find(Button).first().prop('value')).toBe(
        fixtures.props.tags[0]
      );
    });
  });

  describe('Execution of process by click', () => {
    it('Click CardActionArea', () => {
      illustCard.find(CardActionArea).first().simulate('click');
      expect(fixtures.props.onClickCard).toHaveBeenCalled();
    });

    it('Click Tag(Button)', () => {
      illustCard.find(Button).first().simulate('click');
      expect(fixtures.props.onClickTag).toHaveBeenCalled();
    });
  });
});
