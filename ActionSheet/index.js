/**
 * @component ActionSheet
 * @version 0.17.0
 * @description 上拉按钮组
 * @example
 * import ActionSheet from 'rnx-ui/ActionSheet';
 * function Example(props) {
 * return (
 *   <ActionSheet />
 * );
 * }
 */
import React, { Component, PropTypes } from 'react';
import {
  Platform,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import Sheet from '../Sheet';

import styles from './styles';

const NOOP = () => {};
const isAndroid = Platform.OS === 'android';

class ActionSheet extends Component {
  render() {
    return (
      <Sheet
        visible={this.props.visible}
        overlayStyle={this.props.overlayStyle}
        onPressOverlay={this.props.onClose}
        onClose={this.props.onClose}
        duration={this.props.duration}
        style={[styles.containerStyle, this.props.style]}
      >
        <View style={styles.btnList}>
          {
            this.props.btnList.map((btn, index) => {
              // fix android
              const btnStyle = [styles.btn];
              if (isAndroid) {
                if (index === 0) {
                  btnStyle.push(styles.btnFirst);
                } else if (index === this.props.btnList.length - 1) {
                  btnStyle.push(styles.btnLast);
                }
              }

              btnStyle.push([this.props.btnStyle, btn.style]);

              return (
                <TouchableHighlight
                  key={index}
                  underlayColor={this.props.underlayColor}
                  style={btnStyle}
                  onPress={btn.onPress}
                >
                  <Text style={[styles.btnText, this.props.btnTextStyle, btn.style]}>
                    {btn.text}
                  </Text>
                </TouchableHighlight>
              );
            })
          }
        </View>
        <TouchableHighlight
          underlayColor={this.props.underlayColor}
          style={[styles.btn, styles.cancelBtn, this.props.btnStyle, this.props.cancelBtnStyle]}
          onPress={this.props.onClose}
        >
          <Text
            style={[
              styles.btnText,
              styles.cancelBtnText,
              this.props.btnTextStyle,
              this.props.cancelBtnTextStyle,
            ]}
          >
            {this.props.cancelBtnText}
          </Text>
        </TouchableHighlight>
      </Sheet>
    );
  }
}

ActionSheet.propTypes = {
    /**
     * @property visible
     * @description 显示开关
     * @default false
     */
  visible: Sheet.propTypes.visible,
  // 按钮组
  btnList: PropTypes.arrayOf(PropTypes.shape({
    /* eslint-disable */
    /**
     * @property style
     * @description 按钮样式
     * @default null
     */
    style: View.propTypes.style,
    /**
     * @property text
     * @description 按钮文字
     * @default '确定'
     */
    text: PropTypes.string,
    /**
     * @property textStyle
     * @description 按钮文字样式
     * @default null
     */
    textStyle: Text.propTypes.style,
    /**
     * @property onPress
     * @description 按钮点击回调
     * @default NOOP
     */
    onPress: PropTypes.func,
    /* eslint-enable */
  })),
    /**
     * @property btnStyle
     * @description 统一按钮样式
     * @default null
     */
  btnStyle: View.propTypes.style,
    /**
     * @property btnTextStyle
     * @description 统一按钮文字样式
     * @default null
     */
  btnTextStyle: Text.propTypes.style,
    /**
     * @property cancelBtnStyle
     * @description 取消按钮样式
     * @default null
     */
  cancelBtnStyle: View.propTypes.style,
    /**
     * @property cancelBtnText
     * @description 取消按钮文字
     * @default '取消'
     */
  cancelBtnText: PropTypes.string,
    /**
     * @property cancelBtnTextStyle
     * @description 取消按钮文字样式
     * @default null
     */
  cancelBtnTextStyle: Text.propTypes.style,
    /**
     * @property overlayStyle
     * @description 遮罩层样式
     * @default null
     */
  overlayStyle: Sheet.propTypes.overlayStyle,
    /**
     * @property onClose
     * @description 关闭回调（动画结束时）
     * @default NOOP
     */
  onClose: Sheet.propTypes.onClose,
    /**
     * @property duration
     * @description 动画时长
     * @default 200
     */
  duration: Sheet.propTypes.duration,
    /**
     * @property style
     * @description 自定义样式
     * @default null
     */
  style: View.propTypes.style,
    /**
     * @property underlayColor
     * @description 按钮点击透明度变化
     * @default '#eee'
     */
  underlayColor: PropTypes.string,
};
ActionSheet.defaultProps = {
  visible: false,
  btnList: [{
    style: null,
    text: '确定',
    textStyle: null,
    onPress: NOOP,
  }],
  btnStyle: null,
  btnTextStyle: null,
  cancelBtnStyle: null,
  cancelBtnText: '取消',
  cancelBtnTextStyle: null,
  overlayStyle: null,
  onClose: NOOP,
  duration: 200,
  style: null,
  underlayColor: '#eee',
};

export default ActionSheet;
