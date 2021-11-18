import {Button, Card, CardText, CardTitle, FormGroup, FormText, Input, InputGroup} from "reactstrap";
import * as React from "react";

export const FileUploadCard = (props : any) => (
    <Card body>
        <CardTitle tag="h5">
            Upload your image
        </CardTitle>
        <CardText>
            Upload your image to see predictions
        </CardText>
        <FormGroup>
            <div>
                <InputGroup>
                    <Input
                        onChange={props.onFileChange}
                        id="uploadedFile"
                        name="file"
                        type="file"
                    />
                    <Button type="submit" onClick={props.onFileUpload}>Upload</Button>
                </InputGroup>
            </div>
            <FormText>
                Supported file extensions are: png, jpeg, jpg.
            </FormText>
        </FormGroup>
    </Card>
);