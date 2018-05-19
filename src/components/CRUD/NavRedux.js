const initialState = {
  fileList: [
    {
      id: 0,
      filename: 'xzzz',
      fileContent: 'fadfsadfsa'
    },
    {
      id: 1,
      filename: 'JavaScript权威指南',
      fileContent: 'fadfsadfsa'
    },
    {
      id: 2,
      filename: '王颖',
      fileContent: 'fadfsadfsa'
    },
    {
      id: 3,
      filename: '黎天娇',
      fileContent: 'fadfsadfsa'
    }
  ],
}

const ADD_FILE = 'ADD_FILE'
const DELETE_FILE = 'DELETE_FILE'
const MODIFY_FILE = 'MODIFY_FILE'

export function removeDefault() {

}

function findFileById(fileList, id) {
  fileList.find()
}

export function deleteFileById(id) {
  return {
    type: DELETE_FILE,
    payload: {
      id,
    },
  }
}

export function modifyFile(id, fileName, fileContent) {
  return {
    type: MODIFY_FILE,
    payload: {
      id,
      fileName,
      fileContent,
    },
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    // 添加文件
    case ADD_FILE: {

      return {
        ...state,

      }
    }

    // 删除文件
    case DELETE_FILE: {
      const id = action.payload.id
      const fileList = state.fileList
      return {
        ...state,
        fileList: fileList.filter(file => file.id !== id)
      }
    }

    // 修改文件
    case MODIFY_FILE: {
      const { id, fileName, fileContent } = action.payload
      const fileList = state.fileList
      const newFileList = fileList.filter(file => file.id === id);
      newFileList.push()
    }

    default:
      return state
  }
}

