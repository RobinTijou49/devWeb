import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import NumberAlerte from '../NumberAlerte.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

describe('NumberAlerte', () => {
  it('incrémente le compteur au clic', async () => {
    const wrapper = mount(NumberAlerte)

    const button = wrapper.findAll('button')[0]

    await button.trigger('click')

    expect(wrapper.text()).toContain('4')
  })
})
