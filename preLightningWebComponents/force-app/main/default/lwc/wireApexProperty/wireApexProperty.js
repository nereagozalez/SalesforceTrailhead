import { LightningElement, api, wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/AccountController.getRelatedContacts';
import { reduceErrors } from 'c/ldsUtils';
export default class WireApexProperty extends LightningElement {
    @api recordId; //the FlexiPage passes the Id of the current record to the component.
    @wire(getRelatedContacts, { accountId: '$recordId' }) //wire receive two parameters (function and the parameter that the adapter needs)
    contacts; //result stored
    get errors() { //Every time this.contacts.error changes, the getter updates the value of the errors property. This occurs because of reactivity.
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}