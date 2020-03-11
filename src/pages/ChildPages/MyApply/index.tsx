import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'
import {Image, RichText, Text, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import Contest from "../../../component/Contest";

// @ts-ignore
// eslint-disable-next-line no-undef
@connect(({ mine }) => ({
  mine
}))
export default class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      myContest: []
    }
  }
  componentWillMount () {
    // 显示导航栏
    Taro.setNavigationBarTitle({
      title: this.$router.params.TitleText
    });
  }


  async componentDidMount () {
    let userInfo = Taro.getStorageSync("logininfo");
    await this.props.dispatch({
      type: 'mine/queryMyContestApply',
      payload: {
        openId: userInfo.openid
      }
    });
    await this.props.mine.myContestApply.map((contest) => {
      this.state.myContest.push(contest);
    });
    await this.props.dispatch({
      type: 'mine/clean',
      payload: {
        myContestApply: []
      }
    });
  }


  render () {
    return (
      <View className='at-article index'>
        <View>
          {this.state.myContest.map((contest) =>
            <Contest
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
      </View>
    )
  }
}

