import MButton from './button.vue';

export default {
  title: 'Example/MButton',
  component: MButton,
  argTypes: {
    // type: { control: 'color' },
    // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MButton },
    template: '<m-button @onClick="onClick" v-bind="$props" />',
  });
  
  export const Primary = Template.bind({});
  Primary.args = {
    label: 'Button',
  };
  
  export const Round = Template.bind({});
  Round.args = {
    label: 'Button',
  };
  
  export const Disabled = Template.bind({});
  Disabled.args = {
    label: 'Button',
  };
  
  export const Medium = Template.bind({});
  Medium.args = {
    size: 'medium',
    label: 'Button',
  };

  export const Small = Template.bind({});
  Small.args = {
    size: 'small',
    label: 'Button',
  };

  export const Mini = Template.bind({});
  Mini.args = {
    size: 'mini',
    label: 'Button',
  };
  