import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { getRecord } from "lightning/uiRecordApi";

  
export default class NavigateToRecordHeadlessAction extends NavigationMixin(
    LightningElement
) {
    @api recordId;
    @api objectApiName;
    @api invoke() {
        const config = {
            type: 'standard__webPage',
            attributes: {
                url: this.urlField
            }
            
        }
        this[NavigationMixin.Navigate](config);

    }   
    
    get urlField() {
        return objectApiName + ".PortalURL__c"
      }
      @wire(getRecord, { recordId: "$recordId", fields: [this.urlField] }) record;
}

