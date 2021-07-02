import MyInput from './input.vue';

export default {
  title: 'Example/Input',
  component: MyInput,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyInput },
  template: '<my-input :clearable="clearable" @currentValue="currentValue" @cancel="cancel" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'input',
};

export const Disable = Template.bind({});
Disable.args = {
  label: 'input',
  disable: 'true',
};

export const Clearable = Template.bind({});
Clearable.args = {
  label: 'input',
  clearable: {},
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'input',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'input',
};

export const Mini = Template.bind({});
Mini.args = {
  size: 'mini',
  label: 'input',
};

export const Textarea = Template.bind({});
Textarea.args = {
  type: 'textarea',
  label: 'input',
  wordlimit: {},
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  label: 'input',
};
