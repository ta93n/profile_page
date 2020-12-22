/*
react-inview-monitorによる、フェードインアニメーションコンポーネント
https://qiita.com/theNewWave/items/420243828fb1155c9edb
*/

import React from "react";
import styled from "styled-components"; // JavaScript内でCSSを書ける
import InViewMonitor from "react-inview-monitor"; // 画面内に要素が入ってきた時に、子要素にクラス名をつけたり、propsを渡したりできる

export const In = ({ children, delay, margin = "-40%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeIn isActive={false} delay={delay}>{children}</FadeIn>
  </InViewMonitor>
)

export const Up = ({ children, delay, margin = "-40%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInUp isActive={false} delay={delay}>{children}</FadeInUp>
  </InViewMonitor>
)

export const Down = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDown isActive={false} delay={delay}>{children}</FadeInDown>
  </InViewMonitor>
)

export const Left = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInLeft isActive={false} delay={delay}>{children}</FadeInLeft>
  </InViewMonitor>
)

export const Right = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInRight isActive={false} delay={delay}>{children}</FadeInRight>
  </InViewMonitor>
)

const FadeIn = styled.div`
  opacity: 0;
  transition: opacity 1s ease, transform 1s ease;
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
`

const FadeInUp = styled(FadeIn)`
  transform: translateY(30px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`

const FadeInDown = styled(FadeIn)`
  transform: translateY(-30px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`

const FadeInLeft = styled(FadeIn)`
  transform: translateX(-30px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`

const FadeInRight = styled(FadeIn)`
  transform: translateX(30px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`
