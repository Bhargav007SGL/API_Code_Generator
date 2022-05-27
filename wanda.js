const language = document.getElementById('language');
const method = document.getElementById('method');
const url = document.getElementById('url');
const authantication = document.getElementById('authantication');
const send = document.getElementById('send');
var codeSnipet = document.getElementById('codeSnipet');
const textForBody = document.getElementById('postbody');
const apiToken = document.getElementById('apiToken');

method.addEventListener('change',()=>
{
    if(method.value == "post")
    {
        textForBody.style.display = '';
    }
    else
    {
        textForBody.style.display = 'none';
    }
})

authantication.addEventListener('change',()=>
{
    if(authantication.value == "bearer")
    {
        apiToken.style.display = '';
    }
    else
    {
        apiToken.style.display = 'none';
    }
})

send.addEventListener('click',()=>
{
    if(isEmpty(url.value))
    {
        alert('Please Enter URL');
        return;
    }

    switch(language.value)
    {
        case "javascript":
            switch(method.value)
            {
                case "get":
                    switch (authantication.value)
                    {
                        case "noAuth":
                            codeSnipet.style.backgroundColor = '#393333';
                            codeSnipet.innerHTML = 
                            `
                            var requestOptions = {
                                <br>
                                method: 'GET',
                                <br>
                                redirect: 'follow'
                                <br>
                              };
                              <br>
                              <br>
                            fetch("${url.value}", requestOptions)
                            <br>
                              .then(response => response.text())
                            <br>
                              .then(result => console.log(result))
                            <br>
                              .catch(error => console.log('error', error));
                            `
                            break;
                        case "bearer":
                            codeSnipet.style.backgroundColor = '#393333';
                            codeSnipet.innerHTML = 
                            `
                            var myHeaders = new Headers();
                            <br>
                            myHeaders.append("Authorization", "${apiToken.value}");
                            <br>
                            var requestOptions = {
                                <br>
                                method: 'GET',
                                <br>
                                redirect: 'follow',
                                <br>
                                headers: myHeaders,
                                <br>
                              };
                              <br>
                              <br>
                            fetch("${url.value}", requestOptions)
                            <br>
                              .then(response => response.text())
                            <br>
                              .then(result => console.log(result))
                            <br>
                              .catch(error => console.log('error', error));
                            `
                            break;
                    }
                    break;
                case "post":
                    switch (authantication.value)
                    {
                        case "noAuth":
                            codeSnipet.style.backgroundColor = '#393333';
                            codeSnipet.innerHTML = 
                            `
                            var myHeaders = new Headers();
                            <br>
                            myHeaders.append("Content-Type", "application/json");
                            <br>
                            var raw = JSON.stringify({
                            <br>
                            ${textForBody.value}
                            <br>
                            });
                            <br>
                            var requestOptions = {
                            <br>
                            method: 'POST',
                            <br>
                            headers: myHeaders,
                            <br>
                            body: raw,
                            <br>
                            redirect: 'follow'
                            <br>
                            };

                            fetch("${url.value}", requestOptions)
                            <br>
                            .then(response => response.text())
                            <br>
                            .then(result => console.log(result))
                            <br>
                            .catch(error => console.log('error', error));
                            <br>
                            `
                            break;
                        
                        case "bearer":
                            codeSnipet.style.backgroundColor = '#393333';
                            codeSnipet.innerHTML = 
                            `
                            var myHeaders = new Headers();
                            <br>
                            myHeaders.append("Authorization", "${apiToken.value}");
                            <br>
                            myHeaders.append("Content-Type", "application/json");
                            <br>
                            var raw = JSON.stringify({
                            <br>
                            ${textForBody.value}
                            <br>
                            });
                            <br>
                            var requestOptions = {
                            <br>
                            method: 'POST',
                            <br>
                            headers: myHeaders,
                            <br>
                            body: raw,
                            <br>
                            redirect: 'follow'
                            <br>
                            };
                            <br>
                            fetch("${url.value}", requestOptions)
                            <br>
                            .then(response => response.text())
                            <br>
                            .then(result => console.log(result))
                            <br>
                            .catch(error => console.log('error', error));
                            <br>
                            `
                            break;
                    }
            }
            break;

            case "python":
                switch(method.value)
                {
                    case "get":
                        switch (authantication.value)
                        {
                            case "noAuth":
                                codeSnipet.style.backgroundColor = '#393333';
                                codeSnipet.innerHTML = 
                                `
                                import requests
                                <br>
                                url = "${url.value}"
                                <br>
                                payload={}
                                <br>
                                headers = {}
                                <br>
                                response = requests.request("GET", url, headers=headers, data=payload)
                                <br>
                                print(response.text)
                                `
                                break;
                            case "bearer":
                                codeSnipet.style.backgroundColor = '#393333';
                                codeSnipet.innerHTML = 
                                `
                                import requests
                                <br>
                                url = "${url.value}"
                                <br>
                                payload={}
                                <br>
                                headers = {'Authorization': '${apiToken.value}'}
                                <br>
                                response = requests.request("GET", url, headers=headers, data=payload)
                                <br>
                                print(response.text)
                                `
                                break;
                        }
                        break;
                    case "post":
                        switch (authantication.value)
                        {
                            case "noAuth":
                                codeSnipet.style.backgroundColor = '#393333';
                                codeSnipet.innerHTML = 
                                `
                                import requests
                                <br>
                                import json
                                <br>
                                url = "${url.value}"
                                <br>
                                payload = json.dumps({
                                    <br>
                                        ${textForBody.value}
                                    <br>
                                })
                                headers = {
                                <br>
                                'Content-Type': 'application/json'
                                <br>
                                }
                                <br>
                                response = requests.request("POST", url, headers=headers, data=payload)
                                <br>
                                print(response.text)
                                `
                                break;
                            
                            case "bearer":
                                codeSnipet.style.backgroundColor = '#393333';
                                codeSnipet.innerHTML = 
                            `
                            import requests
                                <br>
                                import json
                                <br>
                                url = "${url.value}"
                                <br>
                                payload = json.dumps({
                                    <br>
                                        ${textForBody.value}
                                    <br>
                                })
                                <br>
                                headers = {
                                <br>
                                'Authorization': '${apiToken.value}',
                                <br>
                                'Content-Type': 'application/json'
                                <br>
                                }
                                <br>
                                response = requests.request("POST", url, headers=headers, data=payload)
                                <br>
                                print(response.text)
                            `
                                break;
                        }
                }
                break;
    }

});

function isEmpty(value)
{
    if(value.trim() == "")
    {
        return true;
    }
    return false;
}
