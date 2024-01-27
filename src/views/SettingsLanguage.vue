<template>
  <TitleBarLayout
    backgroundColor="#E87361"
    :title="$t('language')"
  >
    <div style="margin-top: 1.5em">
      <VanRadioGroup v-model="$i18n.locale">
        <VanCellGroup inset>
          <VanCell
            title="简体中文"
            clickable
            @click="$i18n.locale = 'zh'"
          >
            <template #right-icon>
              <VanRadio name="zh" />
            </template>
          </VanCell>
          <VanCell
            title="English"
            clickable
            @click="$i18n.locale = 'en'"
          >
            <template #right-icon>
              <VanRadio name="en" />
            </template>
          </VanCell>
        </VanCellGroup>
      </VanRadioGroup>
    </div>
  </TitleBarLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
