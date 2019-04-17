// ========================================
//            ACTIONS
// ========================================
export const MainTypes = {
  TOGGLE_MOBILE_MENU_OPEN: 'TOGGLE_MOBILE_MENU_OPEN',
}
// ========================================
//            REDUCERS
// ========================================
const defaultShouldShowMobileMenu = false

export const ShouldShowMobileMenu = (state = defaultShouldShowMobileMenu, action) => {
  switch (action.type) {
    case MainTypes.TOGGLE_MOBILE_MENU_OPEN:
      return action.payload

    default:
      return state
  }
}
// ========================================
//            ACTION CREATORS
// ========================================
export const MainActions = {
  toggleMobileMenuOpen: shouldShowMobileMenu => ({ type: MainTypes.TOGGLE_MOBILE_MENU_OPEN, payload: shouldShowMobileMenu }),
}
