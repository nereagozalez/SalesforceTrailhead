import { LightningElement} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
export default class LdsCreateRecord extends LightningElement {
    handleButtonClick() { //It responds to the event that occurs when a user clicks a lightning-button in the .html file (not shown).
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields: {
                [ACCOUNT_NAME_FIELD.fieldApiName] : 'ACME'
            }
        };
        // handleButtonClick invokes the createRecord function imperatively.
        //When we invoke an LDS function imperatively, it returns a promise (a JavaScript object that simplifies performing asynchronous calls).
        createRecord(recordInput)
            .then(account => {
                // code to execute if create operation is successful
            })
            .catch(error => {
                // code to execute if create operation is not successful
            });
    }
}