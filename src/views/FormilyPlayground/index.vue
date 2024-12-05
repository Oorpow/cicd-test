<template>
  <div class="form-container">
    <Card>
      <Tabs v-model:active-key="activeKey" centered>
        <TabPane key="1" tab="账密登录">
          <Form :form="form" :label-col="6" :wrapper-col="10" @autoSubmit="log" @autoSubmitFailed="log">
            <SchemaField>
              <SchemaStringField name="input" title="输入框" x-decorator="FormItem" x-component="Input" :required="true" />
              <SchemaStringField name="select" title="选择框" x-decorator="FormItem" x-component="Select" :enum="[
                {
                  label: '选项1',
                  value: 1,
                },
                {
                  label: '选项2',
                  value: 2,
                },
              ]" :required="true" />
            </SchemaField>
            <FormButtonGroup align-form-item>
              <Submit>提交</Submit>
            </FormButtonGroup>
          </Form>
        </TabPane>
        <TabPane key="2" tab="手机号">手机</TabPane>
      </Tabs>
    </Card>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Form as AForm, Input as AInput, Card, Tabs, TabPane, Button } from 'ant-design-vue'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import {
  Form,
  Input,
  Select,
  FormItem,
  FormButtonGroup,
  Submit,
} from '@formily/antdv-x3'

const activeKey = ref('1')

const form = createForm()
const fields = createSchemaField({ components: { Input, Select, FormItem } })

const log = (value) => {
  console.log(value)
}
</script>

<style scoped>
.form-container {
  width: 800px;
  margin: 100px auto;
}
</style>
