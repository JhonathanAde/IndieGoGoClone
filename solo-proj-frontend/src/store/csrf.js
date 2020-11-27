import Cookies from "js-cookie";

export async function fetch(url, options = {}) {
  console.log("User Fetch");
  options.method = options.method || "GET";

  options.headers = options.headers || {};

  if (options.method.toUpperCase() !== "GET") {
    console.log("from new fetch");
    options.headers["Content-Type"] =
      options.headers["Content-Type"] || "application/json";
    options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
  }
  console.log(window.fetch);
  const res = await window.fetch(url, options);

  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const data = await res.json();
    res.data = data;
  }

  if (res.status >= 400) throw res;

  return res;
}

export function restoreCSRF() {
  return fetch("/api/csrf/restore");
}
