import axios from 'axios';

export const API_SERVER_HOST = 'http://localhost:8080';

const prefix = `${API_SERVER_HOST}/api/todo`;

// async 함수의 리턴은 무조건 Promise ex) promise<Todo> 서버에서가지고온 데이터 타입 Todo
export const getOne = async (tno: number | string) => {
  const res = await axios.get(`${prefix}/${tno}`);
  return res.data;
};
