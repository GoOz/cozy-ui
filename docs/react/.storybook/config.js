import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/Toggle.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)