import Req from "../interceptors/token-interceptor";

const ConfigChoiceService = (function () {
  function _getAllConfigChoice() {
    return Req.get(`/api/roles`);
  }
  function _getConfigChoice(id) {
    return Req.get(`/api/roles/${id}`);
  }
  function _addConfigChoice(data) {
    return Req.post("/api/roles", data);
  }
  function _editConfigChoice(data, id) {
    return Req.put(`/api/roles/${id}`, data);
  }
  function _deleteConfigChoice(id) {
    return Req.delete(`/api/roles/${id}`);
  }
  function _deleteMultipleConfigChoice(ids) {
    return Req.post("/api/roles/delete", { ids: ids });
  }
  return {
    getAllConfigChoice: _getAllConfigChoice,
    getConfigChoice: _getConfigChoice,
    addConfigChoice: _addConfigChoice,
    editConfigChoice: _editConfigChoice,
    deleteConfigChoice: _deleteConfigChoice,
    deleteMultipleConfigChoice: _deleteMultipleConfigChoice,
  };
})();
export default ConfigChoiceService;
