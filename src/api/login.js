import { serverSrc } from '../config';
import request from './request';


// 登录
export function login(body) {
  return request({
    url: `${serverSrc}/login`, msg: '登录失败', method: 'post', body,
  });
}
