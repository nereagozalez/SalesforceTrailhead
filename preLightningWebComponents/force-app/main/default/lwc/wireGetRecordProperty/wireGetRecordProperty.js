import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
export default class WireGetRecordProperty extends LightningElement {
    @api recordId; //@api recordId lets the parent component (the FlexiPage) pass the Id of the current record to the component.
    //@wire -> decorator
    //getRecord -> wire adapter
    //If a record is retrieved, it’s stored in --account.data-- If the record retrieval fails, the error is stored in --account.error--
    //$ prefix, we make recordId reactive. Every time the value of recordId changes, the wire adapter gets new data, either from the cache or from the server.
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
    account;
}