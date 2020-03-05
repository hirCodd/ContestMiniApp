import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'
import {Image, Text, View} from "@tarojs/components";
import { AtDivider, AtButton } from 'taro-ui'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '比赛详情'
  };
  constructor (props) {
    super(props);
    this.state = {
      value: '',
    }
  }
  handleChange () {

  }

  onClickApplyContest () {
    Taro.navigateTo({
      url: '/pages/ChildPages/ApplyContest/index'
    });
  }

  render () {
    return (
      <View className='at-article index'>
        {/*比赛图片*/}
        <View>
          <Image className='contest-image at-article__img ' src={"https://test-1251602255.cos.ap-shanghai.myqcloud.com/images/1111.jpg"}></Image>
        </View>
        {/*赛点信息*/}
        <View className='title'>
          <Text className='at-article__h1'>王者荣耀手游比赛</Text>
        </View>

        <View className='contest-content'>
          {/*比赛信息*/}
          <View className='content-header'>
            <Text className='at-article__h2'>赛事介绍</Text>
            <AtDivider height='16Px' lineColor='#ccc' />
          </View>
          <Text>虎牙渠道赛是由虎牙直播、人民电竞以及王者人生承办，在人民电竞、王者营地、虎扑平台、NGA 论坛四大渠道联合报名的全民赛事。本次赛事包含 MOBA 和模拟战两大模式，24 名来自虎牙的头部主播将会各自代表四大渠道而战，所有来自四大渠道的玩家都可以组建队伍，参与本次赛事当中，为自己所属的阵地而战！</Text>

          <View className='content-header'>
            <Text className='at-article__h2'>赛点信息</Text>
            <AtDivider height='16Px' lineColor='#ccc' />
          </View>
          <View className='contest-contain'>
            <View className='at-row'>
              <View className='at-col at-col-3'>报名时间</View>
              <View className='at-col at-col-9'>2020-02-16 00:00 ~ 02-21 23:59</View>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-3'>比赛时间</View>
              <View className='at-col at-col-9'>2020-02-16 00:00 ~ 02-21 23:59</View>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-3'>地址</View>
              <View className='at-col at-col-9'>线上赛(线上赛)</View>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-3'>联系人</View>
              <View className='at-col at-col-9'>张龙宇 15121145624</View>
            </View>
            <View className='at-row'>
              <View className='at-col at-col-3'>合作方</View>
              <View className='at-col at-col-9'>【请在战队名前添加报名来源】</View>
            </View>
            {/*比赛奖励*/}
            <View className='content-header'>
              <Text className='at-article__h2'>赛事奖励</Text>
              <AtDivider height='16Px' lineColor='#ccc' />
            </View>
            <Text>午间档和晚间档各50000元现金奖励，累计100000元

              注：需要队长申请虎牙直播账号并进行开播，赛事奖金将发到队长的虎牙佣金账号。所标注奖金为税前，提现需要扣除约6%的税。
            </Text>

            <View className='content-header'>
              <Text className='at-article__h2'>报名规则</Text>
              <AtDivider height='16Px' lineColor='#ccc' />
            </View>
            <Text>1. 成功完成【战队注册】并收到注册成功系统消息的队伍才可以通过报名参赛；
              进行战队注册
                2. 每周日24:00前，可报名下周周赛，周赛比赛时间为周二、四、六的19：00；
                3. 官方将进行人工审核，审核通过后队长将获得触手系统消息通知。同一队伍5人报名通过审核机会更大。
                4. 每周一、三、五公布次日所有比赛对战表。
            </Text>

            <View className='content-header'>
              <Text className='at-article__h2'>比赛流程</Text>
              <AtDivider height='16Px' lineColor='#ccc' />
            </View>
            <Text>比赛说明
              1. 比赛时间为周二、四、六的19：00；
              2. 在对战表公布后，队长自行联系对手并约战；
              3. 赛事官方每天随机抽取3-4队观战进行实况直播；
              4. 比赛采用BO1征兆模式，英雄、皮肤、铭文选择无限制。

              结果上传
              1. 比赛结束后，获胜方需前往触手王者荣耀校园赛首页，点击“参加比赛”-“赛果上传”，将结算界面截图上传等待官方工作人员人工审核。
              2. 审核通过后，将获得系统信件消息通知。
              3. 未上传赛果截图或有其他特殊情况，官方有权判定比赛无效。
            </Text>

            <View className='content-header'>
              <Text className='at-article__h2'>比赛说明</Text>
              <AtDivider height='16Px' lineColor='#ccc' />
            </View>
            <Text>比赛说明
              1. 比赛时间为周二、四、六的19：00；
              2. 在对战表公布后，队长自行联系对手并约战；
              3. 赛事官方每天随机抽取3-4队观战进行实况直播；
              4. 比赛采用BO1征兆模式，英雄、皮肤、铭文选择无限制。

              结果上传
              1. 比赛结束后，获胜方需前往触手王者荣耀校园赛首页，点击“参加比赛”-“赛果上传”，将结算界面截图上传等待官方工作人员人工审核。
              2. 审核通过后，将获得系统信件消息通知。
              3. 未上传赛果截图或有其他特殊情况，官方有权判定比赛无效。
            </Text>

            <View className='submit-button'>
              <AtButton type='secondary' onClick={this.onClickApplyContest.bind(this)}>我已知晓，立即报名</AtButton>
            </View>


          </View>
        </View>
      </View>
    )
  }
}
