import { InputDirect } from './InputDirect';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Input Direct (Old Version)',
  component: InputDirect,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};