import MyCard from '../components/card.vue'

export default {
  title: 'Example/Card',
  component: MyCard,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCard },
  template: '<my-card @onClick="onClick" v-bind="$props" />',
});

export const FisetCard = Template.bind({});
FisetCard.args = {
  // FisetCard: true,
  // label: 'MyCard1',
};