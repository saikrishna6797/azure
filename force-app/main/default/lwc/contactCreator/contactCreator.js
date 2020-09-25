import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Cont from '@salesforce/schema/Contact';
import Em from '@salesforce/schema/Contact.Email';
import f from '@salesforce/schema/Contact.FirstName';
import l from '@salesforce/schema/Contact.LastName';

export default class ContactCreator extends LightningElement {

    objectApiName = Cont;
    fields = [Em,f,l];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}