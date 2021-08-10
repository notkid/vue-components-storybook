import Modal from './modal.vue';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    // type: { control: 'color' },
    // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal },
  template: '<m-modal @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Modal',
};

// export const Mini = Template.bind({});
// Mini.args = {
//   size: 'mini',
//   label: 'Button',
// };
