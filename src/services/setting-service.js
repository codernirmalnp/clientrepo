import Req from "../interceptors/token-interceptor";

const SettingService = (function () {
  function _getSetting() {
    return Req.get(`/api/settings`);
  }
  function _editSetting(data) {
    return Req.post(`/api/settings`, data);
  }
  return {
    getSetting: _getSetting,
    editSetting: _editSetting,
  };
})();
export default SettingService;
