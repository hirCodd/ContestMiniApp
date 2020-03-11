import * as ApiService from '../services/index'

export default {
  namespace: 'mine',
  state: {
    myContestApply: [],
    copyright: '',
    about: ''
  },
  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload };
    },
    clean (state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *queryMyContestApply({ payload },{ call, put}) {
      const { data } = yield call(ApiService.queryMyContestApply, payload.openId);
      yield put({
        type: 'save',
        payload: {
          myContestApply: data.data
        }
      });
    },
    *queryCopyright({ payload },{ call, put}){
      const { data } = yield call(ApiService.getCopyright);
      yield put({
        type: 'save',
        payload: {
          copyright: data.data
        }
      });
    },
    *queryAbout({ payload },{ call, put}){
      const { data } = yield call(ApiService.getAbout);
      yield put({
        type: 'save',
        payload: {
          about: data.data
        }
      })
    }
  }
}
