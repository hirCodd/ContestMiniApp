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
