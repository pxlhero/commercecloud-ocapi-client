/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import expect from 'expect.js'
import * as ShopApi from '../../src/index'

import {clientId, proxyUrl, baseUrl} from '../config.json'

let instance
let client

before(() => {
    client = new ShopApi.ApiClient(
        `${baseUrl}`,
        { 'x-dw-client-id': clientId }
    )
})

beforeEach(() => {
    instance = new ShopApi.PromotionsApi(client)
})

var getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
        return object[getter]();
    else
        return object[property];
}

var setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
        object[setter](value);
    else
        object[property] = value;
}


const VALID_CAMPAIGN_ID = 'AMAZE coupon code campaign'
const INVALID_CAMPAIGN_ID = '_invalid_'
const EMPTY_CAMPAIGN_ID = ''

const VALID_PROMOTION_ID = 'Buy 100 get 5 dollars off'
const INVALID_PROMOTION_ID = '_invalid_'
const EMPTY_PROMOTION_ID = ''

describe('PromotionsApi', () => {

    describe('getPromotions', () => {
        it('should return fault when calling getPromotions with empty campaign id', () =>
            instance.getPromotions(EMPTY_PROMOTION_ID)
                .catch((fault) => {
                    expect(fault.type).to.be('StringConstraintViolationException')
                })
        )

        it('should return fault when calling getPromotions with invalid campaign id', () =>
            instance.getPromotions(INVALID_PROMOTION_ID)
                .catch((fault) => {
                    expect(fault.type).to.be('PromotionNotFoundException')
                })
        )

        it('should return promotion result when calling getPromotions with valid campaign id', () =>
            instance.getPromotions(VALID_CAMPAIGN_ID)
                .then((result) => {
                    expect(result.constructor.name).to.be('PromotionResultModel')
                })
        )
    })

    describe('getPromotionsByID', () => {
        it('should return promotion when calling getPromotionsByID with valid promotion id', () =>
            instance.getPromotionsByID(VALID_PROMOTION_ID)
                .then((promotion) => {
                    expect(promotion.constructor.name).to.be('PromotionModel')
                })
        )

        it('should return fault when calling getPromotionsByID with valid promotion id', () =>
            instance.getPromotionsByID(INVALID_PROMOTION_ID)
                .catch((fault) => {
                    expect(fault.type).to.be('PromotionNotFoundException')
                })
        )
    })

    describe('getPromotionsByIDs', () => {
        it('should call getPromotionsByIDs successfully', () =>
        instance.getPromotionsByIDs([VALID_PROMOTION_ID])
            .catch((result) => {
                expect(promotion.constructor.name).to.be('PromotionResultModel')
            })
        )
    })
})
