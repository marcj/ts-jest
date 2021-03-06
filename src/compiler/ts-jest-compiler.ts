import { TsCompiler } from './ts-compiler'
import type { ConfigSet } from '../config/config-set'
import type { CompilerInstance, ResolvedModulesMap, StringMap } from '../types'

/**
 * @internal
 */
export class TsJestCompiler implements CompilerInstance {
  private readonly _compilerInstance: CompilerInstance

  constructor(readonly configSet: ConfigSet, readonly jestCacheFS: StringMap) {
    // Later we can add swc/esbuild or other typescript compiler instance here
    this._compilerInstance = new TsCompiler(configSet, jestCacheFS)
  }

  getResolvedModulesMap(fileContent: string, fileName: string): ResolvedModulesMap {
    return this._compilerInstance.getResolvedModulesMap(fileContent, fileName)
  }

  getCompiledOutput(fileContent: string, fileName: string): string {
    return this._compilerInstance.getCompiledOutput(fileContent, fileName)
  }
}
