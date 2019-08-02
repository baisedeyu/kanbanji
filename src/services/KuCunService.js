import request from '../utils/requestx'
import { stringify } from 'qs'

export async function chaXunKuCun(payload) {
    return request(`${payload.url}/get_WP_SHIPINTO?orgid=${payload.orgid}&TMPLCODE=${payload.TMPLCODE}&pageIndex=${payload.pageIndex}&pageSize=${payload.pageSize}&DSPOINTCODE=${payload.xianShiDian}`);
}
