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
 * @interface Letter
 */
export interface Letter {
    /**
     * Description of the letter.
     * @type {string}
     * @memberof Letter
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof Letter
     */
    readonly id?: number;
    /**
     * Direction for letter.
     * @type {string}
     * @memberof Letter
     */
    direction?: LetterDirectionEnum;
    /**
     *
     * @type {number}
     * @memberof Letter
     */
    channel?: number;
    /**
     * Indicates whether the document has final content or is, for example, a draft
     * @type {boolean}
     * @memberof Letter
     */
    _final?: boolean;
    /**
     * Date of sending or receiving.
     * @type {Date}
     * @memberof Letter
     */
    date?: Date;
    /**
     * Identifier of letter.
     * @type {string}
     * @memberof Letter
     */
    identifier?: string;
    /**
     *
     * @type {number}
     * @memberof Letter
     */
    institution?: number;
    /**
     *
     * @type {number}
     * @memberof Letter
     */
    _case?: number;
    /**
     *
     * @type {Array<any>}
     * @memberof Letter
     */
    readonly attachment?: Array<any>;
    /**
     * Order of letter.
     * @type {number}
     * @memberof Letter
     */
    ordering?: number;
    /**
     * Comment for letter.
     * @type {string}
     * @memberof Letter
     */
    comment?: string;
    /**
     * Excerpt of letter.
     * @type {string}
     * @memberof Letter
     */
    excerpt?: string;
    /**
     *
     * @type {number}
     * @memberof Letter
     */
    description?: number;
    /**
     *
     * @type {Date}
     * @memberof Letter
     */
    readonly createdOn?: Date;
    /**
     *
     * @type {number}
     * @memberof Letter
     */
    readonly createdBy?: number;
    /**
     *
     * @type {Date}
     * @memberof Letter
     */
    readonly modifiedOn?: Date;
    /**
     *
     * @type {number}
     * @memberof Letter
     */
    readonly modifiedBy?: number;
}
export declare function LetterFromJSON(json: any): Letter;
export declare function LetterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Letter;
export declare function LetterToJSON(value?: Letter | null): any;
/**
* @export
* @enum {string}
*/
export declare enum LetterDirectionEnum {
    IN = "IN",
    OUT = "OUT"
}