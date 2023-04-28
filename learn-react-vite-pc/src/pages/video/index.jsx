import React, { useState, useEffect } from "react";
import Quagga from 'quagga';
function Vido() {

    const [result, setResult] = useState('');
    useEffect(() => {
        Quagga.init({
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: document.querySelector('#scanner'),
            },
            decoder: {
                readers: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader', 'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader'],
            },
        }, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            Quagga.start();
        });

        Quagga.onDetected((data) => {
            console.log(data, 'data');
            setResult(data.codeResult.code);
            Quagga.stop();
        });

        return () => {
            Quagga.offDetected();
            Quagga.stop();
        };
    }, []);


    return (
        <div>
            <div id="scanner" />
            <p>Result: {result}</p>
        </div>
    )
}

export default Vido;