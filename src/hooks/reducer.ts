const reducer = (state: GameState, action: Action) => {
    switch (action.type) {
      case 'START_GAME':
        return {
          ...state,
          isStarted: true,
          countdown: 60,
          targetText: action.payload as string,
          targetIndex: 0,
          playerInput: '',
          isInputError: false,
          answeredCount: 0
        }
      case 'FINISH_GAME':
        return {
          ...state,
          isStarted: false
        }
      case 'COUNTING_DOWN':
        return {
          ...state,
          countdown: (action.payload as number) - 1
        }
      case 'SET_PLAYER_INPUT':
        return {
          ...state,
          playerInput: action.payload as string
        }
      case 'MARK_ANSWER_CORRECT':
        return {
          ...state,
          targetIndex: (action.payload as { targetIndex: number }).targetIndex + 1,
          playerInput: '',
          answeredCount:(action.payload as { answeredCount: number }).answeredCount + 1
        }
      case 'CHANGE_TARGET_TEXT':
        return {
          ...state,
          targetText: action.payload as string,
          targetIndex: 0
        }
      case 'MARK_INPUT_ERROR':
        return {
          ...state,
          isInputError: true,
        }
      case 'CLEAR_INPUT_ERROR':
        return {
          ...state,
          isInputError: false
        }
      default:
        return state
    }
  }

export default reducer