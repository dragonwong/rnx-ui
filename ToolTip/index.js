/**
 * @component ToolTip
 * @version 0.17.0
 * @description 提示框
 *
 * ![AddAndSubtract](http://wx2.sinaimg.cn/mw690/4c8b519dly1fdlfmi544kg20hs0wswjd.gif)
 *
 *  ## Other Points
 * 内部封装了 Overlay 组件，请参考 [Overlay](https://github.com/dragonwong/rnx-ui/tree/master/Overlay)
 */
import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Overlay from '../Overlay';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
  },
});


class ToolTip extends Component {
  render() {
    const {
      visible,
      overlayStyle,
      textStyle,
      text,
      textWrapperStyle,
    } = this.props;

    return (
      <Overlay
        visible={visible}
        style={[styles.overlay, overlayStyle]}
        pointerEvents={this.props.pointerEvents}
      >
        <View style={[styles.textWrapper, textWrapperStyle]}>
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
      </Overlay>
    );
  }
}

ToolTip.propTypes = {
 /**
  * @property visible
  * @type Boolean
  * @default false
  * @description 显示开关
  */
  visible: PropTypes.bool.isRequired,
 /**
  * @property text
  * @type String
  * @default ''
  * @description 显示文本
  */
  text: PropTypes.string.isRequired,
 /**
  * @property overlayStyle
  * @type Object
  * @default null
  * @description 遮罩层样式
  */
  overlayStyle: View.propTypes.style,
 /**
  * @property textWrapperStyle
  * @type Object
  * @default null
  * @description 文本容器样式
  */
  textWrapperStyle: View.propTypes.style,
 /**
  * @property textStyle
  * @type Object
  * @default null
  * @description 文本样式
  */
  textStyle: Text.propTypes.style,
 /**
  * @property pointerEvents
  * @type String
  * @default 'none'
  * @description 控制 Overlay 是否可以作为触控事件的目标
  */
  pointerEvents: Overlay.propTypes.pointerEvents,
};
ToolTip.defaultProps = {
  visible: false,
  text: '',
  overlayStyle: null,
  textWrapperStyle: null,
  textStyle: null,
  pointerEvents: 'none',
};

export default ToolTip;
