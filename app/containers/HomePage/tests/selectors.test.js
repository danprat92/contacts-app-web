// import { fromJS } from 'immutable';
import { fromJS } from 'immutable';
import { selectHomePageDomain } from '../selectors';

describe('selectHomePageDomain', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      homePage: globalState,
    });
    expect(selectHomePageDomain(mockedState)).toEqual(globalState);
  });
});
