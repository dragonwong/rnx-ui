
/**
 * @component Loading
 * @version 0.17.0
 * @description 菊花加载中组件
 *
 * ![Loading](https://github.com/wangkexinW/rnx-ui/blob/doc/Loading/Loading.png?raw=true)
 */
import React, {
  PropTypes,
  Component,
} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

import Overlay from '../Overlay';

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loader: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
});

class Loading extends Component {
  render() {
    return (
      <Overlay
        visible={this.props.visible}
        style={[styles.overlay, this.props.overlayStyle]}
      >
        <View style={[styles.loader, this.props.loaderStyle]}>
          <ActivityIndicator
            animating
            color={this.props.color}
            size={this.props.size}
          />
        </View>
      </Overlay>
    );
  }
}

Loading.propTypes = {
  /**
   * @property visible
   * @type Boolean
   * @default false
   * @description 显示开关
   */
  visible: PropTypes.bool.isRequired,
   /**
   * @property overlayStyle
   * @type Object
   * @default Null
   * @description 遮罩层样式
   */
  overlayStyle: View.propTypes.style,
  /**
   * @property loaderStyle
   * @type Object
   * @default Null
   * @description 菊花容器样式
   */
  loaderStyle: View.propTypes.style,
  /**
   * @property color
   * @type String
   * @default '#fff'
   * @description 菊花图标的颜色
   */
  color: ActivityIndicator.propTypes.color,
  /**
   * @property size
   * @type String
   * @default 'small'
   * @description 菊花图标的大小
   */
  size: ActivityIndicator.propTypes.size,
};
Loading.defaultProps = {
  visible: false,
  overlayStyle: null,
  loaderStyle: null,
  color: '#fff',
  size: 'small',
};

export default Loading;
