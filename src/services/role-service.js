import Req from "../interceptors/token-interceptor";

const RoleService = (function () {
  function _getAllRole() {
    return Req.get(`/api/roles`);
  }
  function _getModuleList() {
    return Req.get(`/api/modules`);
  }
  function _getRole(id) {
    return Req.get(`/api/roles/${id}`);
  }
  function _addRole(data) {
    return Req.post("/api/roles", data);
  }
  function _editRole(data, id) {
    return Req.put(`/api/roles/${id}`, data);
  }
  function _deleteRole(id) {
    return Req.delete(`/api/roles/${id}`);
  }
  function _deleteMultipleRole(ids) {
    return Req.post("/api/roles/delete", { ids: ids });
  }
  return {
    getAllRole: _getAllRole,
    getModuleList: _getModuleList,
    getRole: _getRole,
    addRole: _addRole,
    editRole: _editRole,
    deleteRole: _deleteRole,
    deleteMultipleRole: _deleteMultipleRole,
  };
})();
export default RoleService;
