import * as React from 'react'
import {useState} from 'react'
import NavigationBar from "../components/NavigationBar";
import {uploadImageToStorage} from "../api/azure_storage_api/azureStorageApiCalls";
import {getPrediction} from "../api/custom_vision_api/customVisionApiCalls";

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [pendingApiCall, setPendingApiCall] = useState<boolean>(false);


    const onFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const onFileUpload = async () => {
        setPendingApiCall(true);
        uploadImageToStorage(selectedFile)
            .then(url => {
                console.log("image send");
                setPendingApiCall(false);
                return getPrediction(url);
            })
            .then(response => {
                let predications: any = response.data.predictions;
                console.log(predications)
            });
    }

    const DisplayForm = () => (
        <div>
            <input type="file" onChange={onFileChange} />
            <button type="submit" onClick={onFileUpload}>
                Upload!
            </button>
        </div>
    )

    return (
        <div className="container-lg">
            <NavigationBar/>
            <DisplayForm/>

            {pendingApiCall && <div> Loading... </div>}
        </div>
    );
}

export default App;
