# My Resume 
Ben Stundze's Resume Following the Azure Resume Challenge

## Deployment Framework
- The frontend is a static website hosted by a Storage Account, deploying CDN for HTTPS support. It uses an HTTP Trigger to call an Azure Function.
- The Backend uses a serverless Azure Function to query and update the visitor count from a CosmosDB.
- I used GitHub Actions for CI/CD. One Action for the frontend (updating the storage account), and one for the Backend (updating the Azure Function).

## Documentation followed (Frontend)
- [deploy static site to Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)
- [Enable HTTPS via Azure CDN](https://learn.microsoft.com/en-us/azure/cdn/cdn-create-new-endpoint)

## Documentation followed (Backend)
- [Deploy CosmosDB](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-portal)
- [Develop Azure Functions via Visual Studio Code](https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-vs-code)
- [Enable the HTTP Tigger from the storage account with CORS](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors)
- [Enable the Function to query CosmosDB](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal)

## Documentation followed (GitHub)
- [Create a Service Principal & Action Workflow for GitHub](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel)

## Additional Resources
- [Resume Template](https://styleshout.com/free-templates/ceevee/)
- [Project Guide by ACloudGuru](https://github.com/ACloudGuru-Resources/acg-project-azure-resume-starter/tree/main)