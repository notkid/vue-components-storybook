import Message from "./Message";
import AButton from 'ant-design-vue/lib/button'
import 'ant-design-vue/lib/button/style'
import "./style/index.less";
export default {
  title: "Example/Message",
  component: Message,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Message, AButton },
  template: '<a-button type="primary" @click="info">Display normal message</a-button>',
  methods: {
    info() {
      Message.info('This is a normal message');
    },
  }
});

export const Primary = Template.bind({});
Primary.args = {
  closable: true,
  closeIcon: "hhh",
  prefixCls: 'rc-notification'
};
