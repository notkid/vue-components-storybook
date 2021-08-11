import Notice from "./Notice";
import "./index.less";
export default {
  title: "Example/Notice",
  component: Notice,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Notice },
  template: '<Notice v-bind="$props">1212</Notice>',
});

export const Primary = Template.bind({});
Primary.args = {
  closable: true,
  closeIcon: "hhh",
  prefixCls: 'rc-notification'
};
