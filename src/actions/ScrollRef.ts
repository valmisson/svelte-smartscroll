import { get } from 'svelte/store'
import { sanitize } from '@src/helpers'
import { elements } from '@src/stores'

const elementsList = get(elements)

const scrollRef = (
  node: HTMLElement,
  hash: string
): void => {
  if (!hash) {
    throw new Error('scrollRef require a hash')
  }

  elementsList.push({
    node,
    hash: sanitize(hash)
  })
}

export default scrollRef
