/**
 * Model Selection and Fallback Logic for Smart Title
 *
 * This module handles intelligent model selection for title generation.
 * It tries models in order from a predefined fallback list.
 *
 * NOTE: OpencodeAI is lazily imported to avoid loading the 812KB package during
 * plugin initialization. The package is only loaded when model selection is needed.
 */
import type { LanguageModel } from 'ai';
import type { Logger } from './logger';
export interface ModelInfo {
    providerID: string;
    modelID: string;
}
export declare const FALLBACK_MODELS: Record<string, string>;
export interface ModelSelectionResult {
    model: LanguageModel;
    modelInfo: ModelInfo;
    source: 'config' | 'fallback';
    reason?: string;
    failedModel?: ModelInfo;
}
/**
 * Main model selection function with intelligent fallback logic
 *
 * Selection hierarchy:
 * 1. Try the config-specified model (if provided)
 * 2. Try fallback models from authenticated providers (in priority order)
 *
 * @param logger - Logger instance for debug output
 * @param configModel - Model string in "provider/model" format (e.g., "anthropic/claude-haiku-4-5")
 * @returns Selected model with metadata about the selection
 */
export declare function selectModel(logger?: Logger, configModel?: string): Promise<ModelSelectionResult>;
//# sourceMappingURL=model-selector.d.ts.map