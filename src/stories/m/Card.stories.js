import MCard from '../../components/m-card';

export default {
  title: 'Example/MCard',
  component: MCard,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MCard },
  template: '<m-card @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  header: 'header',
  body: '11',
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

export const ManyItems = (args, { argTypes }) => ({
    components: { MCard},
    props: Object.keys(argTypes),
    template: `
    <m-card @onClick="onClick" v-bind="$props" >
        body
    </m-card>
      `,
  });

  ManyItems.args = {
    header: 'header',
    body: '11',
    shadow: 'hover',
    label: 'Button',
  };