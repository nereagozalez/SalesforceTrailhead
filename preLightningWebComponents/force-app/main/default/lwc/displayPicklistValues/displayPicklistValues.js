import { LightningElement, wire } from 'lwc';
import getObjectList from '@salesforce/apex/displayPicklistValuesController.getObjectList';
import getObjectPicklists from '@salesforce/apex/displayPicklistValuesController.getObjectPicklists';

export default class DisplayPicklistValues extends LightningElement {
    objectName;
    value;
    error;
    options;
    @wire(getObjectList)
    wiredContacts({ error, data }) {
        if (data) {
            let listPicklistValue = []; 
            console.log(JSON.parse(JSON.stringify(data)));
            for( let objectName of data ){
                console.log(objectName)
                listPicklistValue.push({
                    value : objectName,
                    label : objectName
                });
            }
            this.options = listPicklistValue;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.options = undefined;
        }
    }

    handleChange(event) {
        this.objectName = event.detail.value;
        getObjectPicklists( this.objectName )
            .then(result => {
                this.objectName = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}