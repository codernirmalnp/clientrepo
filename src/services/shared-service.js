import Req from "../interceptors/token-interceptor";

const SharedService = (function () {
  function _getCurrentUser(id) {
    return Req.get(`/api/users/${id}`);
  }
  function _getPermission(id) {
    return Req.get(`/api/permissions/${id}`);
  }
  function _getCountryList() {
    return Req.get("/api/countries");
  }
  function _getConfigChoice(category) {
    return Req.get(`/api/configChoice/${category}`);
  }
  function _getMultipleConfigChoice(data) {
    return Req.post(`/api/configChoice`, { categories: data });
  }
  return {
    getCurrentUser: _getCurrentUser,
    getPermission: _getPermission,
    getCountryList: _getCountryList,
    getConfigChoice: _getConfigChoice,
    getMultipleConfigChoice: _getMultipleConfigChoice,
  };
})();
export default SharedService;
