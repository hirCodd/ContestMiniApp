import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line import/first
import { AtSearchBar, AtLoadMore  } from 'taro-ui'
// eslint-disable-next-line import/first
import {Button, View} from '@tarojs/components'
import Contest from "../../component/Contest";

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  constructor (props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChange (value) {
    this.setState({
      value: value
    });
  }
  onClear () {

  }
  onBlur () {

  }
  onActionClick () {
  }
  onClickContest () {
    Taro.navigateTo({
      url: '/pages/ChildPages/ContestDetail/index'
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
        <Contest onClick={this.onClickContest.bind(this)}></Contest>
      </View>
    )
  }
}
