import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import {
  LOAD_TRIGGERED,
} from './constants';
import {
  fetchContacts,
} from '../../api';
import {
  itemsReload, itemsChanged, firstLoadActiveChanged, itemsCountChanged, loadingContactsChanged,
} from './actions';

export function* loadTriggered(payload) {
  try {
    const data = yield call(fetchContacts, payload.payload.filters, payload.payload.page);
    if (data && data.code && data.code === 200) {
      if (payload.payload.reload) {
        yield put(itemsReload(data.data));
        yield put(itemsCountChanged(data.data));
      } else {
        yield put(itemsChanged(data.data));
        yield put(itemsCountChanged(data.data));
      }
    } else {
      yield put(itemsChanged({ count: 0, rows: [] }));
      yield put(itemsCountChanged({ count: 0, rows: [] }));
    }
  } catch (e) {
    yield put(itemsChanged({ count: 0, rows: [] }));
    yield put(itemsCountChanged({ count: 0, rows: [] }));
  } finally {
    yield put(firstLoadActiveChanged(false));
    yield put(loadingContactsChanged(false));
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeLatest(LOAD_TRIGGERED, loadTriggered),
  ];
}
