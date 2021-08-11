import MAffix from './Affix';

export default {
  title: 'Example/MAffix',
  component: MAffix,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MAffix },
  template: '<div style="height:1000px;"><div style="height:40px"></div><m-affix :offset-top="30">1212</m-affix></div>',
});

export const Primary = Template.bind({});
Primary.args = {
  header: 'header',
  body: '11',
  label: 'Button',
};
