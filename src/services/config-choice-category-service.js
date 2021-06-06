import Req from "../interceptors/token-interceptor";

const ConfigChoiceCategoryService = (function () {
  function _getAllConfigChoiceCategory() {
    return Req.get(`/api/roles`);
  }
  function _getConfigChoiceCategory(id) {
    return Req.get(`/api/roles/${id}`);
  }
  function _addConfigChoiceCategory(data) {
    return Req.post("/api/roles", data);
  }
  function _editConfigChoiceCategory(data, id) {
    return Req.put(`/api/roles/${id}`, data);
  }
  function _deleteConfigChoiceCategory(id) {
    return Req.delete(`/api/roles/${id}`);
  }
  function _deleteMultipleConfigChoiceCategory(ids) {
    return Req.post("/api/roles/delete", { ids: ids });
  }
  return {
    getAllConfigChoiceCategory: _getAllConfigChoiceCategory,
    getConfigChoiceCategory: _getConfigChoiceCategory,
    addConfigChoiceCategory: _addConfigChoiceCategory,
    editConfigChoiceCategory: _editConfigChoiceCategory,
    deleteConfigChoiceCategory: _deleteConfigChoiceCategory,
    deleteMultipleConfigChoiceCategory: _deleteMultipleConfigChoiceCategory,
  };
})();
export default ConfigChoiceCategoryService;
