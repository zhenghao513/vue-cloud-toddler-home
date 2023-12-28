<template>
  <div @click="$emit('click')">
    <VanButton
      v-bind="buttonProps"
      @click="handleClick"
    >
      <slot></slot>
    </VanButton>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from 'vant'
import type { ConfettiButtonProps } from '@/types/component'
import confetti from 'canvas-confetti'
import launchConfetti from '@/utils/confetti'

const props = withDefaults(defineProps<ConfettiButtonProps>(), {
  particleCount: 60,
  angle: 90,
  spread: 70,
  startVelocity: 25,
  gravity: 1.2,
  drift: 0,
  ticks: 150,
  colors: () => ['#F76560', '#FADC19', '#14C9C9', '#722ED1', '#FF9A2E'],
  shapes: () => ['square'],
  scalar: 1,

  // Vant Button Props 默认值
  type: 'default',
  size: 'normal',
  iconPrefix: 'van-icon',
  iconPosition: 'left',
  tag: 'button',
  nativeType: 'button',
  block: false,
  plain: false,
  square: false,
  round: false,
  disabled: false,
  hairline: false,
  loading: false,
  loadingType: 'circular',
  loadingSize: '20px',
  replace: false,
})

defineEmits<{
  (e: 'click'): void
}>()

const buttonProps = computed<ButtonProps>(() => {
  return {
    block: props.block,
    disabled: props.disabled,
    hairline: props.hairline,
    iconPosition: props.iconPosition,
    loading: props.loading,
    nativeType: props.nativeType,
    plain: props.plain,
    replace: props.replace,
    round: props.round,
    size: props.size,
    square: props.square,
    tag: props.tag,
    type: props.type,
    color: props.color,
    icon: props.icon,
    iconPrefix: props.iconPrefix,
    loadingSize: props.loadingSize,
    loadingText: props.loadingText,
    loadingType: props.loadingType,
    text: props.text,
    to: props.to,
    url: props.url,
  }
})

const confettiOptions = computed<confetti.Options>(() => {
  return {
    particleCount: props.particleCount,
    angle: props.angle,
    spread: props.spread,
    startVelocity: props.startVelocity,
    decay: props.decay,
    gravity: props.gravity,
    drift: props.drift,
    ticks: props.ticks,
    origin: props.origin,
    colors: props.colors,
    shapes: props.shapes,
    scalar: props.scalar,
  }
})

const handleClick = () => {
  launchConfetti(confettiOptions.value)
}
</script>

<style scoped></style>
