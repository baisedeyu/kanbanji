import { isUrl } from '../utils/utils';

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.MDLCODE;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.MDLCODE}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = (menuData) => formatter(menuData);
