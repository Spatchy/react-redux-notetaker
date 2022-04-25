const initialState = {
  user: {
    name: '',
    email: '',
    isAuthenticated: false,
    notes: []
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_AUTH':
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: action.payload
        }
      }
    case 'SET_NOTES':
      return {
        ...state,
        user: {
          ...state.user,
          notes: action.payload
        }
      }
    case 'ADD_NOTE':
      return {
        ...state,
        user: {
          ...state.user,
          notes: [...state.user.notes, action.payload]
        }
      }
    case 'DELETE_NOTE':
      return {
        ...state,
        user: {
          ...state.user,
          notes: state.user.notes.filter(note => note.id !== action.payload)
        }
      }
    case 'UPDATE_NOTE':
      return {
        ...state,
        user: {
          ...state.user,
          notes: state.user.notes.map(note => {
            if (note.id === action.payload.id) {
              return action.payload
            }
            return note
          })
        }
      }
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}

export default reducer