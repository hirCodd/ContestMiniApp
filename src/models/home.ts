import * as ApiService from '../services/index'

export default {
  namespace: 'home',
  state: {
    contests: [],
    content: {},
    articleTotal: 0,
    nextPage: 0,
    applyResult: '',
    teamId: '',
    teamInfo: '',
    allTeamName: []
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
    //dva中是action的处理器，用于处理异步操作
    // eslint-disable-next-line no-unused-vars
    *load({ payload },{ call, put}){
      const { data } = yield call(ApiService.getIndexContest, payload.pageNum, payload.pageSize);
      yield put({
        type: 'save',
        payload: {
          contests: data.data.list
        }
      });
      yield put({
        type: 'save',
        payload: {
          articleTotal: data.data.total
        }
      });
      yield put({
        type: 'save',
        payload: {
          nextPage: data.data.nextPage
        }
      })
    },
    //根据文章id获取文章内容
    *getContent({ payload }, { call, put }) {
      const { data } = yield call(ApiService.getContentById, payload.contestId);
      yield put({
        type: 'save',
        payload: {
          content: data.data
        }
      });
    },
    *queryApplyResult({ payload }, { call, put }) {
      const { data } = yield call(ApiService.queryApplyResult, payload.contestId, payload.openId);
      yield put({
        type: 'save',
        payload: {
          applyResult: data.data
        }
      })
    },
    *queryTeamInfoResult({ payload }, { call, put }) {
      const { data } = yield call(ApiService.queryTeamInfo, payload.contestId, payload.openId);
      yield put({
        type: 'save',
        payload: {
          teamInfo: data.data
        }
      })
    },
    *insertTeamInfo({ payload }, { call, put }) {
      const { data } = yield call(ApiService.insertTeamInfo, payload.teamInfo);
      yield put({
        type: 'save',
        payload: {
          teamId: data.data
        }
      })
    },
    *queryTeamNames({ payload }, { call, put }) {
      const { data } = yield call(ApiService.queryTeamNames, payload.contestId);
      yield put({
        type: 'save',
        payload: {
          allTeamName: data.data
        }
      })
    },
    *searchArticle({ payload }, { call, put }) {
      const { data } = yield call(ApiService.searchArticlesByKeyword, payload.keyword);
      yield put({
        type: 'save',
        payload: {
          articles: data.data
        }
      })
    }
  }
}
