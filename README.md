# Skin disease classification app

<a href="https://skin-disease-classification-app.azurewebsites.net" target="_blank">https://skin-disease-classification-app.azurewebsites.net</a>


## General information 

![Mel](img/mel.png)

 // description



## Dataset

The dataset that we have used is HAM10000, a large collection of multi-source dermatoscopic images of common pigmented skin lesions

<a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/DBW86T" target="_blank">dataverse.harvard.edu/dataset.xhtml</a>


## Architecture

## Technologies used

## Features

## How does it work

1. A user opens the web application (hosted in Azure App Service), then uploads a photo of a skin disease and
clicks the Upload button.
4. The web application sends the image to Azure Blob Storage.
5. Azure Blob Storage returns a url of the uploaded resource.
6. The web application sends the image url to Custom Vision API.
7. Custom Vision API returns predictions.
8. The web application presents the predections.

## Demo

See a demo (in polish):

 [![Demo](img/video.png)](https://youtu.be/596PyXO04MA)

## Screenshots

Benign keratosis (bkl):

![BKL](img/bkl.png)

Melanocytic nevus (nv):

![Nv](img/nv.png)

## Team

[Franciszek Wysocki](https://github.com/wysockif)

[Krzysztof Kowalski](https://github.com/KKofta)





