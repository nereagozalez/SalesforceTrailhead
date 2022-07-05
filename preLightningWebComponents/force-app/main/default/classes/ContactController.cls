public class ContactController {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        throw new AuraHandledException('Forced error');
        /*
        try {
            return [SELECT FirstName, LastName, Email FROM Contact LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        */
    }
}
