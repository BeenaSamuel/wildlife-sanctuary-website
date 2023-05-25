
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';
import { Image } from 'primereact/image';

export default function FieldSet(props) {
    const { imageSrc, paragraph ,heading} = props;

    const legendTemplate = (
        <div className="flex align-items-center text-success">
            <span className="font-bold text-lg">{heading}</span>
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