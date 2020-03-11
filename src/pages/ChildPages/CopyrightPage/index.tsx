import Taro, { Component, Config } from '@tarojs/taro'
import {View, Text, RichText} from '@tarojs/components'
import './index.scss'
import {connect} from "@tarojs/redux";

// @ts-ignore
@connect(({ mine }) => ({
  mine
}))
export default class Index extends Component {
  config = {
  };
  constructor (props) {
    // eslint-disable-next-line prefer-rest-params
    super(props);
    this.state = {
      copyrightContent: '# head'
    }
  }
  componentWillMount () {
    Taro.setNavigationBarTitle({
      title: this.$router.params.TitleText,
      success() {
        console.log("加载页面业务");
      }
    }).then(function () {
    });
  }
  async getList() {
    await this.props.dispatch({
      type: 'mine/queryCopyright',
      payload: ''
    });

    await this.setState({
      copyrightContent: this.props.mine.copyright
    })
  }

  async componentDidMount() {
    await this.getList();
  }

  render () {
    return (
      <View className='index'>
        {/*<wemark md={this.state.md} link highlight type='wemark' >{this.state.md}</wemark>*/}
        <RichText nodes={this.state.copyrightContent}></RichText>

      </View>
    )
  }
}
