/**
 * Style mixins
 * @file Mixins 预置样式
 * @module app/mixins
 */

import {StyleSheet, ViewStyle} from 'react-native';

const mixins = StyleSheet.create({
  // 垂直分布，全部居中
  colCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 水平分布，垂直居中
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default mixins;
