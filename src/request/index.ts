import Http from '@/axios/http';
import * as API from './api'
/**
 * 系统菜单列表
 * @param res 参数
 */
export const getDataList = (res: any) => { // 系统菜单|系统菜单列表
    return Http({
        url: API.queryDataList,
        method: 'post',
        params: res,
    });
};
