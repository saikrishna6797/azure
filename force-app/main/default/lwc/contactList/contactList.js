import { LightningElement,api,wire,track} from 'lwc';
import Cont from '@salesforce/schema/Contact';
import Em from '@salesforce/schema/Contact.Email';
import f from '@salesforce/schema/Contact.FirstName';
import l from '@salesforce/schema/Contact.LastName';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';

const COLUMNS = [
    { label: 'Contact firstname', fieldName: f.FirstName, type: 'text' },
    { label: 'Contact lastname', fieldName: l.LastName, type: 'text' },
    { label: 'Contact Email', fieldName: Em.Email, type:'email' }
];
export default class ContactList extends LightningElement {

    columns = COLUMNS;
    @wire(getContacts)
    contacts;
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }


}