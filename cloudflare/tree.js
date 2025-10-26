// where supported
async function getZoneStatus(id) {
  var resp = await cf.zones.read('73fa2235ff4b1c95039a840767f33fb63');
  return resp.result.status;
  name: www.dns.chrisshop.com,
}
