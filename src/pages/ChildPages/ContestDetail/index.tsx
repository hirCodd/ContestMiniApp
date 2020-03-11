import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'
import {Image, RichText, Text, View} from "@tarojs/components";
import { AtDivider, AtButton } from 'taro-ui'
import {connect} from "@tarojs/redux";

// @ts-ignore
@connect(({ home }) => ({
  home
}))
export default class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      content: {}
    }
  }
  componentWillMount () {
    // 显示导航栏
    Taro.setNavigationBarTitle({
      title: this.$router.params.contestName
    });
  }
  async componentDidMount () {
    await this.getContent();
  }
  // 异步转为同步获取content，然后将content渲染到页面
  async getContent() {
    await this.props.dispatch({
      type: 'home/getContent',
      payload: {
        contestId: this.$router.params.contestId
      }
    });
    await this.setState({
      content: this.props.home.content
    })
  }
  async checkApplyResult (contestId, openId) {
    await this.props.dispatch({
      type: 'home/queryApplyResult',
      payload: {
        contestId: contestId,
        openId: openId
      }
    });
  }

  async onClickApplyContest () {
    let that = this;
    let userInfo = Taro.getStorageSync("logininfo");
    await this.checkApplyResult(this.$router.params.contestId, userInfo.openid);
    await Taro.checkSession({
      success: function () {
        if (that.props.home.applyResult == null || !that.props.home.applyResult) {
          if (userInfo) {
            Taro.navigateTo({
              url: '/pages/ChildPages/ApplyContest/index?' + "contestId=" + that.$router.params.contestId
            });
          } else {
            Taro.showToast({
              title: "请您先登录！"
            })
          }
        } else {
          Taro.showToast({
            title: "您已报名！"
          })
        }
      },
      fail: function () {
        Taro.removeStorageSync('logininfo');
        Taro.showToast({
          title: "请您先登录！"
        })
      }
    });
  }


  render () {
    return (
      <View className='at-article index'>
        {/*比赛图片*/}
        <View>
          {
            !this.state.content.contestThumb ?
              <Image className='contest-image at-article__img ' src={"https://test-1251602255.cos.ap-shanghai.myqcloud.com/images/1111.jpg"}/>
              : <Image className='contest-image at-article__img ' src={this.state.content.contestThumb}/>
          }
        </View>
        {/*赛点信息*/}
        <View className='title'>
          <Text className='at-article__h1'>{this.state.content.contestName}</Text>
        </View>

        <View className='contest-content'>
          {/*比赛信息*/}
          <View className='content-header'>
            <Text className='at-article__h2'>赛事介绍</Text>
            <AtDivider height='16Px' lineColor='#ccc' />
          </View>
          <RichText nodes={this.state.content.contestIntroduce}></RichText>
          <View className='content-header'>
            <Text className='at-article__h2'>赛点信息</Text>
            <AtDivider height='16Px' lineColor='#ccc' />
          </View>
          <View className='contest-contain'>
            <View>报名时间: {this.state.content.contestApplyTime} ~ {this.state.content.contestApplyEndTime}</View>
            <View>比赛时间: {this.state.content.contestStartTime} ~ {this.state.content.contestEndTime}</View>
            <View>地址: {this.state.content.contestAddress}</View>
            <View>联系人： {this.state.content.contactUser + " " + this.state.content.contactPhone}</View>
            <View>合作方: {this.state.content.contestCooperation}</View>
            {/*比赛奖励*/}
            <View className='content-header'>
              <Text className='at-article__h2'>赛事奖励</Text>
              <AtDivider height='16Px' lineColor='#ccc' />
            </View>
            <RichText nodes={this.state.content.contestReward}></RichText>
            <View className='content-header'>
              <Text className='at-article__h2'>报名规则</Text>
              <AtDivider height='16Px' lineColor='#ccc' />
            </View>
            <RichText nodes={this.state.content.contestApplyRule}></RichText>
            <View className='content-header'>
              <Text className='at-article__h2'>比赛流程</Text>
              <AtDivider height='16Px' lineColor='#ccc' />
            </View>
            <RichText nodes={this.state.content.contestProcess}></RichText>
            <View className='content-header'>
              <Text className='at-article__h2'>比赛说明</Text>
              <AtDivider height='16Px' lineColor='#ccc' />
            </View>
            <RichText nodes={this.state.content.contestInfo}></RichText>
            <View className='submit-button'>
              <AtButton type='secondary' onClick={this.onClickApplyContest.bind(this)}>我已知晓，立即报名</AtButton>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
