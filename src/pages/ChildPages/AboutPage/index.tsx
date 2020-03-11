import Taro, { Component, Config } from '@tarojs/taro'
import {View, Text, RichText, Button} from '@tarojs/components'
import './index.scss'
import {connect} from '@tarojs/redux';

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
      aboutContent: '# head'
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
    console.log(this);

  }

  async getList() {
    await this.props.dispatch({
      type: 'mine/queryAbout',
      payload: ''
    });

    await this.setState({
      aboutContent: this.props.mine.about
    })
  }

  async componentDidMount() {
    await this.getList();
  }

  render () {
    return (
      <View>
        <View className='index'>
          <RichText nodes={this.state.aboutContent}></RichText>
        </View>
      </View>
    )
  }
}
