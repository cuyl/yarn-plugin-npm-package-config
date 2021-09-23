/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-npm-package-config",
factory: function (require) {
var plugin=(()=>{var r=Object.defineProperty;var e=(o,t)=>{for(var n in t)r(o,n,{get:t[n],enumerable:!0})};var f={};e(f,{default:()=>g});var c={hooks:{setupScriptEnvironment(o,t){let n=o.workspacesByCwd.get(o.configuration.startingCwd).manifest.raw.config;if(!!n)for(let i of Object.keys(n))t[`npm_package_config_${i}`]=n[i]}}},g=c;return f;})();
return plugin;
}
};
