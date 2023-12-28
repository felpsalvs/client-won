import { StoryFn, Meta } from '@storybook/react'
import Logo, {LogoProps} from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: StoryFn<LogoProps> = (args) => <Logo {...args} />
