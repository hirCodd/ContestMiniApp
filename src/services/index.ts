import Api from './api'

/**
 * 获取文章
 * @param pageNum
 * @param pageSize
 */
export function getIndexContest (pageNum, pageSize) {
  return Api.get({
    url: '/contest/getContest?' + 'pageNum=' + pageNum + '&pageSize=' + pageSize
  })
}

/**
 * 通过文章id获取文章内容
 * @param contestId 文章id
 */
export function getContentById(contestId) {
  return Api.get({
    url: '/contest/getContestDetail?' + 'contestId=' + contestId
  })
}

export function insertContestMember(contestMember) {
  return Api.post({
    url: '/contest/addMembers',
    data: contestMember,
    contentType: 'application/json'
  })
}

export function queryApplyResult(contestId, openId) {
  return Api.get({
    url: '/contest/queryResult?' + 'contestId=' + contestId + "&openId=" + openId
  })
}
export function queryTeamInfo(contestId, openId) {
  return Api.get({
    url: '/contest/queryTeamInfo?' + 'contestId=' + contestId + "&openId=" + openId
  })
}

export function queryTeamNames(contestId) {
  return Api.get({
    url: '/contest/queryTeamNames?' + 'contestId=' + contestId
  })
}

export function insertTeamInfo(teamInfo) {
  return Api.post({
    url: '/contest/insertTeam',
    data: teamInfo,
    contentType: 'application/json'
  })
}

export function queryMyContestApply(openId) {
  return Api.get({
    url: '/contest/queryMyContestApply?' + "openId=" + openId
  })
}

export function getAbout() {
  return Api.get({
    url: '/mine/about'
  });
}

export function getCopyright() {
  return Api.get({
    url: '/mine/copyright'
  });
}

/**
 * 通过关键字查询文章
 * @param keyword keyword
 */
export function searchArticlesByKeyword(keyword) {
  return Api.get({
    url: '/contest/search?' + 'keyword=' + keyword
  })
}



