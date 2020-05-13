/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface NestedFeature
 */
export interface NestedFeature {
    /**
     * Name of feature.
     * @type {string}
     * @memberof NestedFeature
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof NestedFeature
     */
    readonly id?: number;
}
export declare function NestedFeatureFromJSON(json: any): NestedFeature;
export declare function NestedFeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): NestedFeature;
export declare function NestedFeatureToJSON(value?: NestedFeature | null): any;