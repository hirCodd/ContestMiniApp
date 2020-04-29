import Taro, { Component, Config } from '@tarojs/taro'
import './index.scss'
import {Image, Text, View} from "@tarojs/components";
import {AtInput, AtForm, AtCard, AtButton, AtTabs, AtTabsPane} from 'taro-ui'
import {connect} from "@tarojs/redux";
import {insertContestMember, insertTeamInfo} from "../../../services";

// @ts-ignore
@connect(({ home }) => ({
  home
}))
export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '比赛报名'
  };
  constructor (props) {
    super(props);
    this.state = {
      current: 0,
      playInfo: [],
      player: {
        contestId: '',
        openId: '',
        teamId: '',
        memberName: '',
        memberPhone: '',
        contestArea: '',
        memberPlayerId: '',
        memberPlayerLevel: '',
        contestOtherInfo: '',
        isTeam: '',
        applyResult: ''
      },
      player1: {
        contestId: '',
        openId: '',
        teamId: '',
        memberName: '',
        memberPhone: '',
        contestArea: '',
        memberPlayerId: '',
        memberPlayerLevel: '',
        contestOtherInfo: '',
        isTeam: '',
        applyResult: ''
      },
      player2: {
        contestId: '',
        openId: '',
        teamId: '',
        memberName: '',
        memberPhone: '',
        contestArea: '',
        memberPlayerId: '',
        memberPlayerLevel: '',
        contestOtherInfo: '',
        isTeam: '',
        applyResult: ''
      },
      player3: {
        contestId: '',
        openId: '',
        teamId: '',
        memberName: '',
        memberPhone: '',
        contestArea: '',
        memberPlayerId: '',
        memberPlayerLevel: '',
        contestOtherInfo: '',
        isTeam: '',
        applyResult: ''
      },
      player4: {
        contestId: '',
        openId: '',
        teamId: '',
        memberName: '',
        memberPhone: '',
        contestArea: '',
        memberPlayerId: '',
        memberPlayerLevel: '',
        contestOtherInfo: '',
        isTeam: '',
        applyResult: ''
      },
      player5: {
        contestId: '',
        openId: '',
        teamId: '',
        memberName: '',
        memberPhone: '',
        contestArea: '',
        memberPlayerId: '',
        memberPlayerLevel: '',
        contestOtherInfo: '',
        isTeam: '',
        applyResult: ''
      },
      username: '',
      contactPhone: '',
      contestArea: '',
      playerId: '',
      playerLevel: '',
      otherInfo: '',
      //第一个
      username1: '',
      contactPhone1: '',
      contestArea1: '',
      playerId1: '',
      playerLevel1: '',
      otherInfo1: '',
      //第二个
      username2: '',
      contactPhone2: '',
      contestArea2: '',
      playerId2: '',
      playerLevel2: '',
      otherInfo2: '',
      //第三个
      username3: '',
      contactPhone3: '',
      contestArea3: '',
      playerId3: '',
      playerLevel3: '',
      otherInfo3: '',
      //第四个
      username4: '',
      contactPhone4: '',
      contestArea4: '',
      playerId4: '',
      playerLevel4: '',
      otherInfo4: '',
      //第五个
      username5: '',
      contactPhone5: '',
      contestArea5: '',
      playerId5: '',
      playerLevel5: '',
      otherInfo5: '',
      //team
      teamName: '',
      teamInfo: {
        openId: '',
        teamName: '',
        contestId: ''
      }
    }
  }
  async componentWillMount(): void {
    await this.props.dispatch({
      type: 'home/queryTeamNames',
      payload: {
        contestId: this.$router.params.contestId,
      }
    });
  }

  componentDidMount () {
  }
  handleChangeTeamName (teamName) {
    this.setState({
      teamName: teamName
    });
    if (this.props.home.allTeamName.indexOf(teamName) > -1) {
      Taro.showToast({
        title: "对面已存在！"
      })
    }
    return teamName
  }
  handleClick (value) {
    this.setState({
      current: value
    });
  }
  handleChangeName (username) {
    this.setState({
      username: username
    });
    return username
  }
  handleChangeContact (contactPhone) {
    this.setState({
      contactPhone: contactPhone

    });
    return contactPhone
  }

  handleChangeArea (contestArea) {
    this.setState({
      contestArea: contestArea
    });
    return contestArea
  }

  handleChangePlayerId (playerId) {
    this.setState({
      playerId: playerId
    });
    return playerId
  }

  handleChangeLevel (playerLevel) {
    this.setState({
      playerLevel: playerLevel
    });
    return playerLevel
  }

  handleChangeOther (otherInfo) {
    this.setState({
      otherInfo: otherInfo
    });
    return otherInfo
  }

  handleChangeName1 (username1) {
    this.setState({
      username1: username1
    });
    return username1
  }
  handleChangeContact1 (contactPhone1) {
    this.setState({
      contactPhone1: contactPhone1
    });
    return contactPhone1
  }

  handleChangeArea1 (contestArea1) {
    this.setState({
      contestArea1: contestArea1
    });
    return contestArea1
  }

  handleChangePlayerId1 (playerId1) {
    this.setState({
      playerId1: playerId1
    });
    return playerId1
  }

  handleChangeLevel1 (playerLevel1) {
    this.setState({
      playerLevel1: playerLevel1
    });
    return playerLevel1
  }

  handleChangeOther1 (otherInfo1) {
    this.setState({
      otherInfo1: otherInfo1
    });
    return otherInfo1
  }

  // 2
  handleChangeName2 (username2) {
    this.setState({
      username2: username2
    });
    return username2
  }
  handleChangeContact2 (contactPhone2) {
    this.setState({
      contactPhone2: contactPhone2
    });
    return contactPhone2
  }

  handleChangeArea2 (contestArea2) {
    this.setState({
      contestArea2: contestArea2
    });
    return contestArea2
  }

  handleChangePlayerId2 (playerId2) {
    this.setState({
      playerId2: playerId2
    });
    return playerId2
  }

  handleChangeLevel2 (playerLevel2) {
    this.setState({
      playerLevel2: playerLevel2
    });
    return playerLevel2
  }

  handleChangeOther2 (otherInfo2) {
    this.setState({
      otherInfo2: otherInfo2
    });
    return otherInfo2
  }

  // 3
  handleChangeName3 (username3) {
    this.setState({
      username3: username3
    });
    return username3
  }
  handleChangeContact3 (contactPhone3) {
    this.setState({
      contactPhone3: contactPhone3
    });
    return contactPhone3
  }

  handleChangeArea3 (contestArea3) {
    this.setState({
      contestArea3: contestArea3
    });
    return contestArea3
  }

  handleChangePlayerId3 (playerId3) {
    this.setState({
      playerId3: playerId3
    });
    return playerId3
  }

  handleChangeLevel3 (playerLevel3) {
    this.setState({
      playerLevel3: playerLevel3
    });
    return playerLevel3
  }

  handleChangeOther3 (otherInfo3) {
    this.setState({
      otherInfo3: otherInfo3
    });
    return otherInfo3
  }

  // 4
  handleChangeName4 (username4) {
    this.setState({
      username4: username4
    });
    return username4
  }
  handleChangeContact4 (contactPhone4) {
    this.setState({
      contactPhone4: contactPhone4
    });
    return contactPhone4
  }

  handleChangeArea4 (contestArea4) {
    this.setState({
      contestArea4: contestArea4
    });
    return contestArea4
  }

  handleChangePlayerId4 (playerId4) {
    this.setState({
      playerId4: playerId4
    });
    return playerId4
  }

  handleChangeLevel4 (playerLevel4) {
    this.setState({
      playerLevel4: playerLevel4
    });
    return playerLevel4
  }

  handleChangeOther4 (otherInfo4) {
    this.setState({
      otherInfo4: otherInfo4
    });
    return otherInfo4
  }

  // 5
  handleChangeName5 (username5) {
    this.setState({
      username5: username5
    });
    return username5
  }
  handleChangeContact5 (contactPhone5) {
    this.setState({
      contactPhone5: contactPhone5
    });
    return contactPhone5
  }

  handleChangeArea5 (contestArea5) {
    this.setState({
      contestArea5: contestArea5
    });
    return contestArea5
  }

  handleChangePlayerId5 (playerId5) {
    this.setState({
      playerId5: playerId5
    });
    return playerId5
  }

  handleChangeLevel5 (playerLevel5) {
    this.setState({
      playerLevel5: playerLevel5
    });
    return playerLevel5
  }

  handleChangeOther5 (otherInfo5) {
    this.setState({
      otherInfo5: otherInfo5
    });
    return otherInfo5
  }

  async onClickValue () {
    let that = this;
    let userInfo = Taro.getStorageSync("logininfo");
    this.state.playInfo = [];
    if (this.state.current ==  0) {
      this.state.player.contestId = this.$router.params.contestId;
      this.state.player.openId = userInfo.openid;
      this.state.player.teamId = "";
      this.state.player.memberName = this.state.username;
      this.state.player.memberPhone = this.state.contactPhone;
      this.state.player.contestArea= this.state.contestArea;
      this.state.player.memberPlayerId = this.state.playerId;
      this.state.player.memberPlayerLevel = this.state.playerLevel;
      this.state.player.contestOtherInfo = this.state.otherInfo;
      this.state.player.isTeam = false;
      this.state.player.applyResult = true;

      this.state.playInfo.push(this.state.player);
      await insertContestMember(this.state.playInfo).then(function (res) {
        if (res.data.msg == "success") {
          Taro.navigateBack({
            delta: 1
          })
        }
      });
    } else {
      this.state.teamInfo.openId = userInfo.openid;
      this.state.teamInfo.teamName = this.state.teamName;
      this.state.teamInfo.contestId = this.$router.params.contestId;

      await this.props.dispatch({
        type: 'home/queryTeamInfoResult',
        payload: {
          contestId: this.$router.params.contestId,
          openId: userInfo.openid
        }
      });
      let teamId = null;
      if (that.props.home.teamInfo == null) {
        await this.props.dispatch({
          type: 'home/insertTeamInfo',
          payload: {
            teamInfo: this.state.teamInfo
          }
        });
        teamId = that.props.home.teamId;
      } else {
        teamId = that.props.home.teamInfo;
      }

      this.state.player1.contestId = this.$router.params.contestId;
      this.state.player1.openId = userInfo.openid;
      this.state.player1.teamId = teamId;
      this.state.player1.memberName = this.state.username1;
      this.state.player1.memberPhone = this.state.contactPhone1;
      this.state.player1.contestArea= this.state.contestArea1;
      this.state.player1.memberPlayerId = this.state.playerId1;
      this.state.player1.memberPlayerLevel = this.state.playerLevel1;
      this.state.player1.contestOtherInfo = this.state.otherInfo1;
      this.state.player1.isTeam = true;
      this.state.player1.applyResult = true;

      this.state.player2.contestId = this.$router.params.contestId;
      this.state.player2.openId = "";
      this.state.player2.teamId = teamId;
      this.state.player2.memberName = this.state.username2;
      this.state.player2.memberPhone = this.state.contactPhone2;
      this.state.player2.contestArea= this.state.contestArea2;
      this.state.player2.memberPlayerId = this.state.playerId2;
      this.state.player2.memberPlayerLevel = this.state.playerLevel2;
      this.state.player2.contestOtherInfo = this.state.otherInfo2;
      this.state.player2.isTeam = true;
      this.state.player2.applyResult = true;

      this.state.player3.contestId = this.$router.params.contestId;
      this.state.player3.openId = "";
      this.state.player3.teamId = teamId;
      this.state.player3.memberName = this.state.username3;
      this.state.player3.memberPhone = this.state.contactPhone3;
      this.state.player3.contestArea= this.state.contestArea3;
      this.state.player3.memberPlayerId = this.state.playerId3;
      this.state.player3.memberPlayerLevel = this.state.playerLevel3;
      this.state.player3.contestOtherInfo = this.state.otherInfo3;
      this.state.player3.isTeam = true;
      this.state.player3.applyResult = true;

      this.state.player4.contestId = this.$router.params.contestId;
      this.state.player4.openId = "";
      this.state.player4.teamId = teamId;
      this.state.player4.memberName = this.state.username4;
      this.state.player4.memberPhone = this.state.contactPhone4;
      this.state.player4.contestArea= this.state.contestArea4;
      this.state.player4.memberPlayerId = this.state.playerId4;
      this.state.player4.memberPlayerLevel = this.state.playerLevel4;
      this.state.player4.contestOtherInfo = this.state.otherInfo4;
      this.state.player4.isTeam = true;
      this.state.player4.applyResult = true;

      this.state.player5.contestId = this.$router.params.contestId;
      this.state.player5.openId = "";
      this.state.player5.teamId = teamId;
      this.state.player5.memberName = this.state.username5;
      this.state.player5.memberPhone = this.state.contactPhone5;
      this.state.player5.contestArea= this.state.contestArea5;
      this.state.player5.memberPlayerId = this.state.playerId5;
      this.state.player5.memberPlayerLevel = this.state.playerLevel5;
      this.state.player5.contestOtherInfo = this.state.otherInfo5;
      this.state.player5.isTeam = true;
      this.state.player5.applyResult = true;
      that.state.playInfo.push(this.state.player1, this.state.player2, this.state.player3,
        this.state.player4, this.state.player5);

      await insertContestMember(this.state.playInfo).then(function (res) {
        if (res.data.msg == "success") {
          Taro.navigateBack({
            delta: 1
          })
        }
      });
    }
  }

  render () {
    const tabList = [{ title: '单人报名' }, { title: '组队报名' }]
    return (
      <View className='index'>
        <View className='title'>
          <Text className='at-article__h2'>王者荣耀手游比赛</Text>
        </View>
        <View className='apply-content'>
          <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            {/*单人模式*/}
            <AtTabsPane current={this.state.current} index={0} >
              <View style='padding: 20px 20px;background-color: #FAFBFC;text-align: center;' >
                <AtCard
                  title='单人选手卡'
                  className='tab-card'
                >
                  <AtForm className='apply-info'>
                    <AtInput
                      className='input1'
                      name='username'
                      title='姓名'
                      type='text'
                      placeholder='姓名'
                      value={this.state.player.username}
                      onChange={this.handleChangeName.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contactPhone'
                      title='联系方式'
                      type='text'
                      placeholder='联系方式'
                      value={this.state.player.contactPhone}
                      onChange={this.handleChangeContact.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contestArea'
                      title='大区'
                      type='text'
                      placeholder='大区'
                      value={this.state.player.contestArea}
                      onChange={this.handleChangeArea.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerId'
                      title='游戏ID'
                      type='text'
                      placeholder='游戏ID'
                      value={this.state.player.playerId}
                      onChange={this.handleChangePlayerId.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerLevel'
                      title='段位'
                      type='text'
                      placeholder='段位'
                      value={this.state.player.playerLevel}
                      onChange={this.handleChangeLevel.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='otherInfo'
                      title='其他信息'
                      type='text'
                      placeholder='其他信息'
                      value={this.state.player.otherInfo}
                      onChange={this.handleChangeOther.bind(this)}
                    />
                  </AtForm>
                </AtCard>
              </View>
            </AtTabsPane>
            {/*组队模式*/}
            <AtTabsPane current={this.state.current} index={1}>
              <View style='padding: 20px 20px;background-color: #FAFBFC;text-align: center;'>

                <AtInput
                  className='input1'
                  name='teamName'
                  title='组队名'
                  type='text'
                  placeholder='组队名'
                  value={this.state.teamName}
                  onChange={this.handleChangeTeamName.bind(this)}
                />

                <AtCard
                  title='领队选手卡'
                  className='tab-card'
                >
                  <AtForm className='apply-info'>
                    <AtInput
                      className='input1'
                      name='username1'
                      title='姓名'
                      type='text'
                      placeholder='姓名'
                      value={this.state.username1}
                      onChange={this.handleChangeName1.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contactPhone1'
                      title='联系方式'
                      type='text'
                      placeholder='联系方式'
                      value={this.state.contactPhone1}
                      onChange={this.handleChangeContact1.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contestArea1'
                      title='大区'
                      type='text'
                      placeholder='大区'
                      value={this.state.contestArea1}
                      onChange={this.handleChangeArea1.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerId1'
                      title='游戏ID'
                      type='text'
                      placeholder='游戏ID'
                      value={this.state.playerId1}
                      onChange={this.handleChangePlayerId1.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerLevel1'
                      title='段位'
                      type='text'
                      placeholder='段位'
                      value={this.state.playerLevel1}
                      onChange={this.handleChangeLevel1.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='otherInfo1'
                      title='其他信息'
                      type='text'
                      placeholder='其他信息'
                      value={this.state.otherInfo1}
                      onChange={this.handleChangeOther1.bind(this)}
                    />
                  </AtForm>
                </AtCard>

                {/*选项卡2*/}
                <AtCard
                  title='选手卡2'
                  className='tab-card'
                >
                  <AtForm className='apply-info'>
                    <AtInput
                      className='input1'
                      name='username2'
                      title='姓名'
                      type='text'
                      placeholder='姓名'
                      value={this.state.username2}
                      onChange={this.handleChangeName2.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contactPhone2'
                      title='联系方式'
                      type='text'
                      placeholder='联系方式'
                      value={this.state.contactPhone2}
                      onChange={this.handleChangeContact2.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contestArea2'
                      title='大区'
                      type='text'
                      placeholder='大区'
                      value={this.state.contestArea2}
                      onChange={this.handleChangeArea2.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerId2'
                      title='游戏ID'
                      type='text'
                      placeholder='游戏ID'
                      value={this.state.playerId2}
                      onChange={this.handleChangePlayerId2.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerLevel2'
                      title='段位'
                      type='text'
                      placeholder='段位'
                      value={this.state.playerLevel2}
                      onChange={this.handleChangeLevel2.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='otherInfo2'
                      title='其他信息'
                      type='text'
                      placeholder='其他信息'
                      value={this.state.otherInfo2}
                      onChange={this.handleChangeOther2.bind(this)}
                    />
                  </AtForm>
                </AtCard>

                {/*选手卡3*/}
                <AtCard
                  title='选手卡3'
                  className='tab-card'
                >
                  <AtForm className='apply-info'>
                    <AtInput
                      className='input1'
                      name='username3'
                      title='姓名'
                      type='text'
                      placeholder='姓名'
                      value={this.state.username3}
                      onChange={this.handleChangeName3.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contactPhone3'
                      title='联系方式'
                      type='text'
                      placeholder='联系方式'
                      value={this.state.contactPhone3}
                      onChange={this.handleChangeContact3.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contestArea3'
                      title='大区'
                      type='text'
                      placeholder='大区'
                      value={this.state.contestArea3}
                      onChange={this.handleChangeArea3.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerId3'
                      title='游戏ID'
                      type='text'
                      placeholder='游戏ID'
                      value={this.state.playerId3}
                      onChange={this.handleChangePlayerId3.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerLevel3'
                      title='段位'
                      type='text'
                      placeholder='段位'
                      value={this.state.playerLevel3}
                      onChange={this.handleChangeLevel3.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='otherInfo3'
                      title='其他信息'
                      type='text'
                      placeholder='其他信息'
                      value={this.state.otherInfo3}
                      onChange={this.handleChangeOther3.bind(this)}
                    />
                  </AtForm>
                </AtCard>

                {/*选手卡4*/}
                <AtCard
                  title='选手卡4'
                  className='tab-card'
                >
                  <AtForm className='apply-info'>
                    <AtInput
                      className='input1'
                      name='username4'
                      title='姓名'
                      type='text'
                      placeholder='姓名'
                      value={this.state.username4}
                      onChange={this.handleChangeName4.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contactPhone4'
                      title='联系方式'
                      type='text'
                      placeholder='联系方式'
                      value={this.state.contactPhone4}
                      onChange={this.handleChangeContact4.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contestArea4'
                      title='大区'
                      type='text'
                      placeholder='大区'
                      value={this.state.contestArea4}
                      onChange={this.handleChangeArea4.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerId4'
                      title='游戏ID'
                      type='text'
                      placeholder='游戏ID'
                      value={this.state.playerId4}
                      onChange={this.handleChangePlayerId4.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerLevel4'
                      title='段位'
                      type='text'
                      placeholder='段位'
                      value={this.state.playerLevel4}
                      onChange={this.handleChangeLevel4.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='otherInfo4'
                      title='其他信息'
                      type='text'
                      placeholder='其他信息'
                      value={this.state.otherInfo4}
                      onChange={this.handleChangeOther4.bind(this)}
                    />
                  </AtForm>
                </AtCard>

                {/*选手卡5*/}
                <AtCard
                  title='选手卡5'
                  className='tab-card'
                >
                  <AtForm className='apply-info'>
                    <AtInput
                      className='input1'
                      name='username5'
                      title='姓名'
                      type='text'
                      placeholder='姓名'
                      value={this.state.username5}
                      onChange={this.handleChangeName5.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contactPhone5'
                      title='联系方式'
                      type='text'
                      placeholder='联系方式'
                      value={this.state.contactPhone5}
                      onChange={this.handleChangeContact5.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='contestArea5'
                      title='大区'
                      type='text'
                      placeholder='大区'
                      value={this.state.contestArea5}
                      onChange={this.handleChangeArea5.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerId5'
                      title='游戏ID'
                      type='text'
                      placeholder='游戏ID'
                      value={this.state.playerId5}
                      onChange={this.handleChangePlayerId5.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='playerLevel5'
                      title='段位'
                      type='text'
                      placeholder='段位'
                      value={this.state.playerLevel5}
                      onChange={this.handleChangeLevel5.bind(this)}
                    />
                    <AtInput
                      className='input1'
                      name='otherInfo5'
                      title='其他信息'
                      type='text'
                      placeholder='其他信息'
                      value={this.state.otherInfo5}
                      onChange={this.handleChangeOther5.bind(this)}
                    />
                  </AtForm>
                </AtCard>
              </View>
            </AtTabsPane>
          </AtTabs>

          <View className='submit-button'>
            <AtButton type='secondary' onClick={this.onClickValue.bind(this)}>立即报名</AtButton>
          </View>

          {/*<View>*/}
          {/*  <AtButton formType='submit' onClick={this.onClickValue.bind(this)}>提交</AtButton>*/}
          {/*  <AtButton formType='reset'>重置</AtButton>*/}
          {/*</View>*/}
        </View>
      </View>
    )
  }


}
