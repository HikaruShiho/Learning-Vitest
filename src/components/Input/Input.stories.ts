import type { Meta, StoryObj } from '@storybook/vue3';
import { userEvent, within } from '@storybook/test';
import Input from './Input.vue';

const meta: Meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  args: { // 全てのストーリーに適用される共通のargs
    name: "name",
    disabled: false,
  },
  argTypes: { // GUIのコントロールを編集する
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Name input', async () => {
      await userEvent.type(canvas.getByRole('textbox'), ' Mike');
    });
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
};

export const PlaceholderAvailable: Story = {
  args: {
    placeholder: '名前を入力してください',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Name input', async () => {
      await userEvent.type(canvas.getByRole('textbox'), ' 志保です');
    });
  }
};

