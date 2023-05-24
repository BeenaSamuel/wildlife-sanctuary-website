
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';
import { Image } from 'primereact/image';

export default function FieldSet(props) {
    const { imageSrc, paragraph } = props;

    const legendTemplate = (
        <div className="flex align-items-center text-success">
            <img src={imageSrc} alt="User Avatar" className="mr-5" />
            <span className="font-bold text-lg">User Details</span>
        </div>
    );

    return (
        <div className="card">
            <Fieldset legend={legendTemplate}>
                <div>
                <Image src={imageSrc}  alt="Image" preview width="250" />
                    <p>{paragraph}</p>
                </div>
            </Fieldset>
        </div>
    );
} 