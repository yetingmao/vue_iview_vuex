import axios from 'axios';
import { Message } from 'view-design';

function dealWith(res, msg) {
  const { data, status } = res.data;
  let result;
  if (status) {
    result = data;
  }
  Message.error({
    background: true,
    content: msg || '网络错误，稍后再试',
  });
  return result;
}
function dealErrWith(err, msg) {
  console.log(msg, JSON.stringify(err));
  Message.error({
    background: true,
    content: msg || '网络错误，稍后再试',
  });
}
export default function request(opt) {
  if (opt.method === 'post' || opt.method === 'POST') {
    return axios.post(opt.url, opt.body).then(res => dealWith(res, opt.msg)).catch((err) => {
      dealErrWith(err, opt.msg);
    });
  } if (opt.method === 'put' || opt.method === ' PUT') {
    return axios.put(opt.url, opt.body).then(res => dealWith(res, opt.msg)).catch((err) => {
      dealErrWith(err, opt.msg);
    });
  } if (opt.method === 'delete' || opt.method === ' DELETE') {
    return axios.delete(opt.url, opt.body).then(res => dealWith(res, opt.msg)).catch((err) => {
      dealErrWith(err, opt.msg);
    });
  }
  return axios.get(opt.url).then(res => dealWith(res, opt.msg)).catch((err) => {
    dealErrWith(err, opt.msg);
  });
}
