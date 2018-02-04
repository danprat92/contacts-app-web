
import {
  defaultAction,
  searchValueChanged,
} from '../actions';
import {
  DEFAULT_ACTION,
  SEARCH_VALUE_CHANGED,
} from '../constants';

describe('HomePage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
  describe('Search Value Changed Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: SEARCH_VALUE_CHANGED,
        payload: '',
      };
      expect(searchValueChanged('')).toEqual(expected);
    });
  });
});
