import Req from "../interceptors/token-interceptor";

const TableDataService = (function () {
  function _getAllData(
    endpoint,
    orgId,
    search,
    searchFields,
    sortOrder,
    page,
    pageSize,
    activeCol,
    statusId = null,
  ) {
    let el = "";
    if (orgId) {
      el += `&organizationId=${orgId}`;
    }
    if (statusId) {
      el += `&status=${statusId}`;
    }
    return Req.get(
      `/api/${endpoint}?pagination[page]=${page.toString()}&pagination[perpage]=${pageSize.toString()}&orderBy=${activeCol}&sortedBy=${sortOrder}&search=${search}&searchFields=${searchFields}${el}`
    );
  }
  return { getAllData: _getAllData };
})();
export default TableDataService;
