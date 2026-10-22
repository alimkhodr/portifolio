export default defineAppConfig({
  ui: {
    colors: {
      primary: 'cobalt',
      neutral: 'ink'
    },
    // Uma família de ícones só: Phosphor.
    icons: {
      arrowDown: 'i-ph-arrow-down',
      arrowLeft: 'i-ph-arrow-left',
      arrowRight: 'i-ph-arrow-right',
      arrowUp: 'i-ph-arrow-up',
      check: 'i-ph-check',
      chevronDown: 'i-ph-caret-down',
      chevronLeft: 'i-ph-caret-left',
      chevronRight: 'i-ph-caret-right',
      chevronUp: 'i-ph-caret-up',
      close: 'i-ph-x',
      copy: 'i-ph-copy',
      copyCheck: 'i-ph-check',
      dark: 'i-ph-moon',
      external: 'i-ph-arrow-up-right',
      light: 'i-ph-sun',
      loading: 'i-ph-circle-notch',
      menu: 'i-ph-list',
      search: 'i-ph-magnifying-glass',
      system: 'i-ph-desktop'
    },
    // Controles interativos são pílulas, como na referência.
    button: {
      slots: {
        base: 'rounded-full active:translate-y-px'
      }
    },
    dropdownMenu: {
      slots: {
        content: 'rounded-xl',
        item: 'rounded-lg'
      }
    }
  }
})
