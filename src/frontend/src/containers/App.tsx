import * as React from 'react'
import {useState} from 'react'
import NavigationBar from "../components/NavigationBar";
import {uploadImageToStorage} from "../api/azure_storage_api/azureStorageApiCalls";
import {getPredictions, Prediction} from "../api/custom_vision_api/customVisionApiCalls";
import {Card, Col, Row, Spinner} from "reactstrap";
import {FileUploadCard} from "../components/FileUploadCard";

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [pendingApiCall, setPendingApiCall] = useState<boolean>(false);
    const [predictions, setPredictions] = useState<Prediction[]>([]);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('');


    const onFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const onFileUpload = async () => {
        setPredictions([]);
        setUploadedImageUrl('');
        setPendingApiCall(true);
        uploadImageToStorage(selectedFile)
            .then(url => {
                setUploadedImageUrl(url);
                return getPredictions(url);
            }).then(response => {
            setPendingApiCall(false);
            setPredictions(response.data.predictions);
        }).catch(error => {
            setPendingApiCall(false);
            console.error("Error occured: " + error)
        });
    };

    return (
        <div className="container-lg">
            <NavigationBar/>
            <FileUploadCard onFileChange={onFileChange} onFileUpload={onFileUpload}/>
            <Card style={{minHeight: "60vh"}}>
                <Row>
                    {(pendingApiCall || (!pendingApiCall && !uploadedImageUrl)) &&
                    <Col className="col-12 d-flex flex-wrap align-items-center" style={{minHeight: "56vh"}}>
                        {pendingApiCall && <div className="text-center mx-auto"><Spinner>
                            Loading...
                        </Spinner></div>}
                        {!pendingApiCall && !uploadedImageUrl && <div className="text-muted text-center mx-auto">
                            Here you will see your predictions
                        </div>}
                    </Col>}
                    {(uploadedImageUrl && predictions.length > 0) && <Row>
                        <Col className="col-6 d-flex flex-wrap align-items-center" style={{minHeight: "56vh"}}>
                            <img src={uploadedImageUrl} className="img-fluid mx-auto d-block" alt="Uploaded image"/>
                        </Col>
                        <Col className="col-6 align-self-center">

                            {predictions.length > 0 && <h4>Predictions:</h4>}
                            {predictions.map(p => (
                                <div key={p.probability}>{p.tagName} - {100 * p.probability}%</div>))}
                        </Col>
                    </Row>}
                </Row>
            </Card>
        </div>
    );
}

export default App;
