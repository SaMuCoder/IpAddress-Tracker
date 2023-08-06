import {apiKey} from "./key.js";

const url = "https://geo.ipify.org/api/v1";

const getIpDetails = async (ipAddress) => {   
    const endpoint = `?apiKey=${apiKey}&ipAddress=${ipAddress}`;
    const response  = await fetch(url + endpoint);
    const data = await response.json();
    const resultip = document.getElementById('final');

    resultip.textContent= "IP: " + data.ip + " | " + "Country: " + data.location.country + " | "
        + "Location: " + data.location.region + " | " + "ISP: " + data.isp}; 

getIpDetails();

const ipAddress = document.getElementById('input-ip');
const searchIp = () => {
    if (ipAddress.value === '') {
        alert('Está vazio');
    } else {
        getIpDetails(ipAddress.value);
    } 
}

const button = document.getElementById('button-ip');

button.addEventListener("click", searchIp)
