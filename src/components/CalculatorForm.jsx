import { useState } from 'react'
import { extractNetworkAddress } from '../util/Calculator'

export default function ({ setResult }) {
    const [ipAddress, setIpAddress] = useState([
        "",
        "",
        "",
        ""
    ]);

    const [netmask, setNetmask] = useState();
    
    const handleAddressChange = (idx, value) => {
        const updatedArray = [...ipAddress];
        updatedArray[idx] = parseInt(value);
        setIpAddress(updatedArray);
    };

    const handleNetmaskChange = (value) => {
        setNetmask(parseInt(value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const arr = Object.values(ipAddress).map((value) => parseInt(value, 10) || 0);
        console.log(arr, netmask);
        const result = extractNetworkAddress(arr, netmask);
        setResult(result);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Enter an IP Address</legend>
                    <label>IP Address</label>
                    <input
                        type='number'
                        min='0'
                        max='255'

                        value={ipAddress[0] === '' ? '192' : ipAddress[0]}
                        onChange={(e) => handleAddressChange(0, e.target.value)}
                        required />
                    <input
                        type='number'
                        min='0'
                        max='255'
                        value={ipAddress[1] === '' ? '168' : ipAddress[1]}
                        onChange={(e) => handleAddressChange(1, e.target.value)}
                        required />
                    <input
                        type='number'
                        min='0'
                        max='255'
                        value={ipAddress[2] === '' ? '0' : ipAddress[2]}
                        onChange={(e) => handleAddressChange(2, e.target.value)}
                        required />
                    <input
                        type='number'
                        min='0'
                        max='255'
                        value={ipAddress[3] === '' ? '16' : ipAddress[3]}
                        onChange={(e) => handleAddressChange(3, e.target.value)}
                        required />
                    <label>Netmask</label>
                    <input
                        type='number'
                        min='0'
                        max='255'
                        name={0}
                        value={!netmask ? '24' : netmask}
                        onChange={(event) => { handleNetmaskChange(event.target.value) }}
                        required />
                </fieldset>
                <button type="submit">Calculate!</button>
            </form>
        </>
    );
}