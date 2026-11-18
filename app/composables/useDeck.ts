import type { InjectionKey, Ref } from 'vue'

// Ligação entre o Deck e os slides. Cada DeckSlide pega o próprio número ao ser criado,
// na ordem em que aparece no template, e sabe se está na tela.
export interface DeckState {
  current: Readonly<Ref<number>>
  total: Readonly<Ref<number>>
  ready: Readonly<Ref<boolean>>
  register: () => number
}

export const deckKey: InjectionKey<DeckState> = Symbol('deck')

// Usado pelos vídeos para tocar só quando o slide deles está na tela.
export const slideActiveKey: InjectionKey<Readonly<Ref<boolean>>> = Symbol('slide-active')
