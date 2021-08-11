import Portal from './Portal';

export default {
  title: 'Example/Portal',
  component: Portal,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//     size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
//   },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Portal },
  template: '<Avatar>11</Avatar>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
