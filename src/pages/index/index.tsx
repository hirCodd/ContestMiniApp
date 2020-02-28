import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line import/first
import { AtSearchBar, AtLoadMore  } from 'taro-ui'
// eslint-disable-next-line import/first
import {Button, View} from '@tarojs/components'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  };
  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
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
      </View>
    )
  }
}
