# My Resume 
Ben Stundze's Resume Following Azure Resume Challenge

## Deployment Framework
- The frontend is a statis website hosted by a storage account, deploying CDN for HTTPS support. It uses an HTTP Trigger to call an Azure Function.
- The Backend uses A serverless Azure function to query and update the visitor count from a CosmosDB.
- I used Github Actions for CI/CD. One Action for the frontend (updating the storage account), and one for the Backend (updating the Azure Function).

## Documentation followed (Frontend)
- [deploy static site to blob storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)
- [Enable HTTPS via Azure CDN](https://learn.microsoft.com/en-us/azure/cdn/cdn-create-new-endpoint)

## Documentation followed (Backend)
- [Deploy CosmosDB](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-portal)
- [Develop Azure Functions by using Visual Studio Code](https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-vs-code)
- [Enable the HTTP Tigger from the storage account with CORS](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors)
- [Enable the Funtion to Query CosmosDB](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal)

## Documentation followed (GitHub)
- [Create a Service Principal & Action workflow for GitHub](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel)

## Additional Resources
- [Resume Template](https://styleshout.com/free-templates/ceevee/)
- [Project Guide by ACloudGuru](https://github.com/ACloudGuru-Resources/acg-project-azure-resume-starter/tree/main)