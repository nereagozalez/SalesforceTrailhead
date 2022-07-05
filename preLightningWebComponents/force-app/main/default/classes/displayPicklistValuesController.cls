public with sharing class displayPicklistValuesController {
    @AuraEnabled(cacheable=true)
    public static List<String> getObjectList() {
        List<String> listObjects = new List<String>(Schema.getGlobalDescribe().keySet());
        return listObjects; //-> list objects from org
    }

    @AuraEnabled(cacheable=true)
    public static List<String> getObjectPicklists( String objectKey ) { //take a selected object
        List<String> objectPicklists = new List<String>();
        Map<String,Schema.SObjectField> mapFields = Schema.getGlobalDescribe().get( objectKey ).getDescribe().fields.getMap();
        for( String keyField : mapFields.keySet() ){
            Schema.SObjectField fieldInfo = mapFields.get( keyField );
            if( 'PICKLIST' == String.valueOf( fieldInfo.getDescribe().getType() ) ){
                objectPicklists.add( keyField );
                // objectPicklists.add( fieldInfo.getDescribe().getPicklistValues() );
            }
        }
        return objectPicklists;
    }
    /*
    @AuraEnabled(cacheable=true)
    public static List<Schema.PicklistEntry> getPicklistValues( String objectKey, String picklistKey ) {
     return Schema.getGlobalDescribe().get( objectKey ).getDescribe().fields.getMap().get( picklistKey ).getDescribe().getPicklistValues();
    }
    */
}