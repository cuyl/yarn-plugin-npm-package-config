import {Plugin, Project} from '@yarnpkg/core';

const plugin: Plugin = {
  hooks: {
    setupScriptEnvironment(project, scriptEnv) {
      const config = project.workspacesByCwd.get(project.configuration.startingCwd).manifest.raw.config
      if (!config) return
      for (const key of Object.keys(config)) {
        scriptEnv[`npm_package_config_${key}`] = config[key]
      }
    },
  },
};

export default plugin;
