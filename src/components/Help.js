import React from 'react';
import '../style/help.scss';

const Help = () => {

    return (
        <div className="help">
            <h2>Help</h2>

            <div>
                <p>Resty is a browser based API testing tool that allows you to easily interact with APIs</p>

                <h3>Example API Requests:</h3>

                <ul>
                    <li>GET Request - https://reqres.in/api/users/</li>
                    <li>POST Request - https://reqres.in/api/users/2 - body - &#123; "name": "morpheus", "job": "zion resident" &#125;</li>
                    <li>PUT Request - https://reqres.in/api/users/2 - body - &#123;"name": "morpheus", "job": "zion resident"&#125;</li>
                    <li>DELETE request - https://reqres.in/api/users/2</li>

                </ul>

                <p>Use the History page to view extra details of unique, successful requests and rerun the request. Resty stores these unique requests in your localStorage for persistent use.</p>
            </div>


        </div>
    )
}

export default Help;