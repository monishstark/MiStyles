export const config = {
  appId: "8bb0d209-2d93-4ae3-b0e1-518f85b9e21e",
  redirectUri: "http://localhost:3001/loginpage",
  scopes: ["user.read"],
  authority:
    "https://login.microsoftonline.com/84f915fd-9f01-49d6-8fd7-28750938fc5a",
  endpoint: "https://azureproject.documents.azure.com:443/",
  key: "k07J2N8SsZaiRBvKXmXCcHxNOiFw8JCmRcWwEn1Agt78ib3xIzq9N5vRXohheSUgfobAdebUCJAHeshhCGa2sA==",
  databaseId: "SampleDB",
  containerId: "Persons",
  partitionKey: { kind: "Hash", paths: ["/category"] },
};
