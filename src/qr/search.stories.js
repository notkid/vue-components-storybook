import MSearch from './search.vue';

export default {
  title: 'Example/Search',
  component: MSearch,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MSearch },
  template: '<m-search @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'text',
};

// export const Disable = Template.bind({});
// Disable.args = {
//   label: 'input',
//   disable: 'true',
// };
