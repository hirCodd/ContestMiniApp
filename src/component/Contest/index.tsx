import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import { AtDivider, AtTag } from 'taro-ui'
import './index.scss'

export default class Contest extends Component {
  static options = {
    addGlobalClass: true
  };
  constructor (props) {
    super(props);
    this.state = {
      contestState: {
        noStartApply: '未开始报名',
        canApply: '正在报名',
        completeApply: '报名结束',
        contesting: '正在比赛',
        endContest: '报名结束'
      }
    }
  }

  handleState(applyTime, applyEndTime, startContestTime, endContestTime) {
    let now = new Date();
    applyTime = new Date(applyTime);
    applyEndTime = new Date(applyEndTime);
    startContestTime = new Date(startContestTime);
    endContestTime = new Date(endContestTime);
    if (now < applyTime) {
      return this.state.contestState.noStartApply;
    } else if (applyTime < now && now < applyEndTime) {
      return this.state.contestState.canApply;
    } else if (applyEndTime < now && now < startContestTime) {
      return this.state.contestState.completeApply;
    } else if (startContestTime < now && now < endContestTime) {
      return this.state.contestState.contesting;
    } else if (endContestTime < now) {
      return this.state.contestState.endContest;
    }
  }

  render () {
    return (
      <View className='article' onClick={this.props.onClick}>
        {/*文章内容*/}
        <View className='at-row'>
          {/*图片*/}
          <View>
            {
              this.props.contestThumb == null ?
                <Image className='article-thumb at-article__img' src={"https://test-1251602255.cos.ap-shanghai.myqcloud.com/images/1111.jpg"}/>
                : <Image className='article-thumb at-article__img' src={this.props.contestThumb}/>
            }
          </View>
          <View className='article-content'>
            {/*标题*/}
            <View className='topbar'>
              <View className='at-col article-title'>{this.props.contestName}</View>
              <View className='tag'>
                <AtTag type='primary' circle>{this.handleState(this.props.contestApplyTime, this.props.contestApplyEndTime,
                  this.props.contestStartTime, this.props.contestEndTime)}</AtTag>
              </View>
            </View>

            {/*<View className='at-col article-title'>{this.state.title}</View>*/}
            {/*标签*/}
            <View className='article-tag'>
              <View className='author-view'>
                <View className='at-icon at-icon-user' />
                <Text className='author'>{this.props.author}</Text>
              </View>
              <View className='publish-view'>
                <View className='at-icon at-icon-calendar' />
                <Text className='publish-date'>{this.props.contestPublishTime}</Text>
              </View>
            </View>
          </View>
        </View>
        <AtDivider height='16Px' lineColor='#ccc' />
      </View>

    )
  }
}
