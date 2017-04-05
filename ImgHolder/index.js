/**
 * 带占位的图片组件
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  all: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  img: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: null,
    width: null,
  },
});
class ImgHolder extends Component {
  constructor(props) {
    super(props);

    const { holder } = props;
    this.state = {
      holder,
    };
    this.removeBaseImgfn = this.removeBaseImgfn.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }
  onLoad() {
    this.removeBaseImgfn();
  }
  removeBaseImgfn() {
    const holder = null;
    this.setState({
      holder,
    });
  }
  render() {
    return (
      <View style={[styles.all, this.props.style]}>
        {
          this.state.holder
        }
        <Image
          onLoad={this.onLoad}
          source={this.props.source}
          style={[styles.img, this.props.imgStyle]}
        />
      </View>
    );
  }
}

ImgHolder.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 图片样式
  imgStyle: Image.propTypes.style,
  // 占位元素
  holder: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 图片资源
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
};
ImgHolder.defaultProps = {
  style: null,
  imgStyle: null,
  holder: null,
  source: {
    uri: '',
  },
};

export default ImgHolder;
