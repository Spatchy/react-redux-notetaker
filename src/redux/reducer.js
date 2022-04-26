const initialState = {
  user: {
    name: '',
    email: '',
    isAuthenticated: false,
    notes: []
  },
  modal: {
    isOpen: false,
    id: null,
    title: '',
    body: '',
    isEditing: false
  },
  error: {
    isError: false,
    errorMessage: ''
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
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: {
          isOpen: true,
          id: action.payload.id,
          title: action.payload.title,
          body: action.payload.body,
          isEditing: action.payload.isEditing
        }
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: {
          isOpen: false,
          id: null,
          title: '-',
          body: '-',
          isEditing: false
        }
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: {
          isError: true,
          errorMessage: action.payload
        }
      }
    case 'ACKNOWLEDGE_ERROR':
      return {
        ...state,
        error: {
          isError: false,
          errorMessage: ''
        }
      }
    default:
      return state
  }
}

export default reducer