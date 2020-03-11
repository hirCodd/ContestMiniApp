import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line import/first
import { AtSearchBar, AtLoadMore  } from 'taro-ui'
// eslint-disable-next-line import/first
import {Button, View} from '@tarojs/components'
import Contest from "../../component/Contest";
import {connect} from "@tarojs/redux";

// @ts-ignore
// eslint-disable-next-line no-undef
@connect(({ home }) => ({
  home
}))
export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  constructor (props) {
    super(props);
    this.state = {
      defaultPageNum: 1,
      pageSize: 10,
      value: '',
      status: 'more',
      contests: [],
      searchContests: [],
      isSearch: false
    }
  }
  componentWillMount () {
    try {
      Taro.checkSession({
        success: function () {
          console.log("session未失效");
        },
        fail: function () {
          Taro.removeStorageSync("logininfo");
          console.log("session已失效");
        }
      });
    } catch (e) {
      console.log(e)
    }
  }

  async componentDidMount() {
    await this.getArticles(this.state.defaultPageNum);
  }

  onChange (value) {
    this.setState({
      value: value
    });
  }
  async onClear () {
    await this.setState({
      isSearch: false
    });
    await this.setState({
      searchArticles: []
    });
  }
  async onBlur () {
    await this.setState({
      isSearch: false
    });
    await this.setState({
      searchArticles: []
    });
  }
  async onActionClick () {
    await this.setState({
      isSearch: true
    });
    await this.props.dispatch({
      type: 'home/searchArticle',
      payload: {
        keyword: this.state.value
      }
    });
    //判断是否有重复文章
    await this.props.home.articles.map((article) => {
      if(JSON.stringify(this.state.searchArticles).indexOf(JSON.stringify(article)) === -1){
        this.state.searchArticles.push(article);
      } else {

      }
    });
    await this.props.dispatch({
      type: 'home/clean',
      payload: {
        articles: []
      }
    });
  }
  async getArticles (pageNumber) {
    await this.props.dispatch({
      type: 'home/load',
      payload: {
        pageNum: pageNumber,
        pageSize: this.state.pageSize
      }
    });
    await this.props.home.contests.map((contest) => {
      this.state.contests.push(contest);
    });
    await this.props.dispatch({
      type: 'home/clean',
      payload: {
        contests: []
      }
    });
  }
  async handleClick () {
    const that = this;
    if (this.props.home.nextPage != 0) {
      // 开始加载
      this.getArticles(this.props.home.nextPage).then(function () {
        if (that.props.home.nextPage == 0) {
          that.setState({
            status: 'noMore'
          })
        } else {
          that.setState({
            status: 'more'
          });
        }
      })
    } else {
      this.setState({
        status: 'noMore'
      });
    }
  }
  onClickContest (contestId, contestName) {
    console.log(contestId)
    Taro.navigateTo({
      url: '/pages/ChildPages/ContestDetail/index' + '?contestId=' + contestId + '&contestName=' + contestName
    });
  }

  render () {
    return (
      <View>
        {/*渲染搜索按钮*/}
        <AtSearchBar
          showActionButton
          actionName='搜一搜'
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onClear={this.onClear.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onActionClick={this.onActionClick.bind(this)
          }
        />
        {
          this.state.isSearch ?
            <View>
              {this.state.searchContests.map((contest) =>
                <Contest onClick={this.onClickContest.bind(this, contest.contestId, contest.contestName)}
                         key={contest.contestId}
                         author={contest.author}
                         contestName={contest.contestName}
                         contestApplyTime={contest.contestApplyTime}
                         contestApplyEndTime={contest.contestApplyEndTime}
                         contestAddress={contest.contestAddress}
                         contactUser={contest.contactUser}
                         contactPhone={contest.contactPhone}
                         contestStartTime={contest.contestStartTime}
                         contestEndTime={contest.contestEndTime}
                         contestCooperation={contest.contestCooperation}
                         contestIntroduce={contest.contestIntroduce}
                         contestReward={contest.contestReward}
                         contestApplyRule={contest.contestApplyRule}
                         contestProcess={contest.contestProcess}
                         contestInfo={contest.contestInfo}
                         contestThumb={contest.contestThumb}
                         contestPublishTime={contest.publishTime}
                ></Contest>
              )}
            </View> : <View>
                {this.state.contests.map((contest) =>
                  <Contest onClick={this.onClickContest.bind(this, contest.contestId, contest.contestName)}
                           key={contest.contestId}
                           author={contest.author}
                           contestName={contest.contestName}
                           contestApplyTime={contest.contestApplyTime}
                           contestApplyEndTime={contest.contestApplyEndTime}
                           contestAddress={contest.contestAddress}
                           contactUser={contest.contactUser}
                           contactPhone={contest.contactPhone}
                           contestStartTime={contest.contestStartTime}
                           contestEndTime={contest.contestEndTime}
                           contestCooperation={contest.contestCooperation}
                           contestIntroduce={contest.contestIntroduce}
                           contestReward={contest.contestReward}
                           contestApplyRule={contest.contestApplyRule}
                           contestProcess={contest.contestProcess}
                           contestInfo={contest.contestInfo}
                           contestThumb={contest.contestThumb}
                           contestPublishTime={contest.publishTime}
                  ></Contest>
                )}
            </View>
        }
        <View >
          <AtLoadMore
            className='load-more'
            onClick={this.handleClick.bind(this)}
            status={this.state.status}
            noMoreText={"真的一篇都没有了..."}
          />
        </View>
      </View>
    )
  }
}
