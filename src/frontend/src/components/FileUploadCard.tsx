import {Button, Card, CardText, CardTitle, FormGroup, Input, InputGroup} from "reactstrap";
import * as React from "react";

export const FileUploadCard = (props: any) => (
    <Card body>
        <CardTitle>Upload a photo</CardTitle>
        <CardText>
            <small>The photo should be cropped to the place of your potential skin disease</small>
        </CardText>
        <FormGroup>
            <div className="mb-1">
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
            <small className="text-muted">Supported file extensions are: png, jpeg, jpg.</small>
        </FormGroup>
    </Card>
);