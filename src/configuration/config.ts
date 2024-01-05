// config.ts
export interface DynamicConfig {
  sentryLink: string;
}

export const defaultConfig: DynamicConfig = {
  sentryLink: '',
};

class GlobalConfig {
  config: DynamicConfig = defaultConfig; // assign a value because of TypeScript

  notDefinedYet = true;

  public get(): DynamicConfig {
    if (this.notDefinedYet) {
      throw new Error('Global config has not been defined yet.');
    } else {
      return this.config;
    }
  }

  public set(value: DynamicConfig): void {
    if (this.notDefinedYet) {
      this.config = value;
      this.notDefinedYet = false;
    } else {
      throw new Error('Global config has already been defined');
    }
  }
}

export const globalConfig = new GlobalConfig();

export const globalConfigUrl = 'config.json';
