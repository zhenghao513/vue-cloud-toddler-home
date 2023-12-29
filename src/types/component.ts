import type { Origin, Shape } from 'canvas-confetti'
import type { ButtonProps } from 'vant'

export interface ConfettiButtonProps extends ButtonProps {
  /**
   * 要发射的五彩纸屑数量。
   * @default 60
   */
  particleCount?: number
  /**
   * 发射五彩纸屑的角度，以度为单位。
   * 90 是直线上升。
   * @default 90
   */
  angle?: number
  /**
   * 五彩纸屑可以偏离中心多远，以度为单位。
   * 45 表示五彩纸屑将以定义的正负 22.5 度角发射。
   */
  spread?: number
  /**
   * 五彩纸屑开始移动的速度，以像素为单位。
   * @default 25
   */
  startVelocity?: number
  /**
   * 五彩纸屑会以多快的速度消失。
   * 将此数字保持在 0 和 1 之间，否则五彩纸屑会加速消失。
   * 如果你不确定的话，尽量不要改变它。
   */
  decay?: number
  /**
   * 五彩纸屑被拉下的速度有多快。
   * 1 是全重力，0.5 是半重力等。
   * 如果你愿意，你甚至可以使粒子上升。
   * @default 1.2
   */
  gravity?: number
  /**
   * 五彩纸屑会向一侧漂移多少。
   * 默认值为 0，这意味着它们会直线下降。
   * 左边使用负数，右边使用正数。
   * @default 0
   */
  drift?: number
  /**
   * 五彩纸屑会移动多少次。
   * @default 150
   */
  ticks?: number
  /**
   * 从哪里开始发射纸屑。 如果您愿意，可以随意在屏幕外启动。
   * origin.x：页面上的 x 位置，0 为左边缘，1 为右边缘。
   * origin.y：页面上的 y 位置，0 为顶边，1 为底边。
   */
  origin?: Origin
  /**
   * 十六进制格式的颜色字符串数组。
   * @default ['#F76560','#FADC19','#14C9C9','#722ED1','#FF9A2E']
   */
  colors?: string[]
  /**
   * 五彩纸屑的一系列形状。
   * 可能的值为正方形和圆形。
   * 默认是在均匀混合中使用两种形状。
   * 你甚至可以通过提供诸如 ['circle', 'square', 'star'] 之类的值来更改组合，以使用三分之一的圆、三分之一的正方形和三分之一的星形。
   * @default ['square']
   */
  shapes?: Shape[]
  /**
   * 每个五彩纸屑粒子的比例缩放。
   * @default 1
   */
  scalar?: number
}
