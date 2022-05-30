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
        textForBody.disabled = false;
    }
    else
    {
        textForBody.disabled = true;
    }
})

authantication.addEventListener('change',()=>
{
    if(authantication.value == "bearer")
    {
        apiToken.disabled = false;
    }
    else
    {
        apiToken.disabled = true;
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
            case "php":
                switch(method.value)
                {
                    case "get":
                            switch (authantication.value)
                            { 
                                case "noAuth":
                                    codeSnipet.style.backgroundColor = '#393333';
                                    codeSnipet.innerHTML = 
                                    `
                                    <?php
                                    <br>
                                    $curl = curl_init();
                                    <br>
                                    curl_setopt_array($curl, array(
                                    <br>
                                    CURLOPT_URL => '${url.value}',
                                    <br>
                                    CURLOPT_RETURNTRANSFER => true,
                                    <br>
                                    CURLOPT_ENCODING => '',
                                    <br>
                                    CURLOPT_MAXREDIRS => 10,
                                    <br>
                                    CURLOPT_TIMEOUT => 0,
                                    <br>
                                    CURLOPT_FOLLOWLOCATION => true,
                                    <br>
                                    <br>
                                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                                    <br>
                                    CURLOPT_CUSTOMREQUEST => 'GET',
                                    <br>
                                    ));
                                    <br>
                                    $response = curl_exec($curl);
                                    <br>
                                    curl_close($curl);
                                    <br>
                                    echo $response;
                                    `
                                    break;
                                case "bearer":
                                    codeSnipet.style.backgroundColor = '#393333';
                                    codeSnipet.innerHTML = 
                                    `
                                    <?php
                                    <br>
                                    $curl = curl_init();
                                    <br>
                                    curl_setopt_array($curl, array(
                                    <br>
                                    CURLOPT_URL => '${url.value}',
                                    <br>
                                    CURLOPT_RETURNTRANSFER => true,
                                    <br>
                                    CURLOPT_ENCODING => '',
                                    <br>
                                    CURLOPT_MAXREDIRS => 10,
                                    <br>
                                    CURLOPT_TIMEOUT => 0,
                                    <br>
                                    CURLOPT_FOLLOWLOCATION => true,
                                    <br>
                                    <br>
                                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                                    <br>
                                    CURLOPT_CUSTOMREQUEST => 'GET',
                                    <br>
                                    CURLOPT_HTTPHEADER => array(
                                    <br>
                                        'Authorization: ${apiToken.value}'
                                    <br>
                                      ),
                                    <br>
                                    ));
                                    <br>
                                    $response = curl_exec($curl);
                                    <br>
                                    curl_close($curl);
                                    <br>
                                    echo $response;
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
                                    <?php
                                    <br>
                                    $curl = curl_init();
                                    <br>
                                    curl_setopt_array($curl, array(
                                    <br>
                                      CURLOPT_URL => '${url.value}',
                                    <br>
                                      CURLOPT_RETURNTRANSFER => true,
                                      <br>
                                      CURLOPT_ENCODING => '',
                                      <br>
                                      CURLOPT_MAXREDIRS => 10,
                                      <br>
                                      CURLOPT_TIMEOUT => 0,
                                      <br>
                                      CURLOPT_FOLLOWLOCATION => true,
                                      <br>
                                      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                                      <br>
                                      CURLOPT_CUSTOMREQUEST => 'POST',
                                      <br>
                                      CURLOPT_POSTFIELDS =>'{
                                        <br>
                                        ${textForBody.value}
                                        <br>
                                    }',
                                    <br>
                                      CURLOPT_HTTPHEADER => array(
                                        <br>
                                        'Content-Type: application/json'
                                        <br>
                                      ),
                                      <br>
                                    ));
                                    <br>
                                    $response = curl_exec($curl);
                                    <br>
                                    curl_close($curl);
                                    <br>
                                    echo $response;                                    
                                    `
                                    break;
                                
                                case "bearer":
                                    codeSnipet.style.backgroundColor = '#393333';
                                    codeSnipet.innerHTML = 
                                `
                                <?php
                                    <br>
                                    $curl = curl_init();
                                    <br>
                                    curl_setopt_array($curl, array(
                                    <br>
                                      CURLOPT_URL => '${url.value}',
                                    <br>
                                      CURLOPT_RETURNTRANSFER => true,
                                      <br>
                                      CURLOPT_ENCODING => '',
                                      <br>
                                      CURLOPT_MAXREDIRS => 10,
                                      <br>
                                      CURLOPT_TIMEOUT => 0,
                                      <br>
                                      CURLOPT_FOLLOWLOCATION => true,
                                      <br>
                                      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                                      <br>
                                      CURLOPT_CUSTOMREQUEST => 'POST',
                                      <br>
                                      CURLOPT_POSTFIELDS =>'{
                                        <br>
                                        ${textForBody.value}
                                        <br>
                                    }',
                                    <br>
                                      CURLOPT_HTTPHEADER => array(
                                        <br>
                                        'Authorization: ${apiToken.value}',
                                        <br>
                                        'Content-Type: application/json'
                                        <br>
                                      ),
                                      <br>
                                    ));
                                    <br>
                                    $response = curl_exec($curl);
                                    <br>
                                    curl_close($curl);
                                    <br>
                                    echo $response;   
                                `
                                    break;
                            }
                }
                break;
            case "c#":
                    switch(method.value)
                    {
                        case "get":
                                switch (authantication.value)
                                { 
                                    case "noAuth":
                                        codeSnipet.style.backgroundColor = '#393333';
                                        codeSnipet.innerHTML = 
                                        `
                                        var client = new RestClient("${url.value}");
                                        <br>
                                        var request = new RestRequest();
                                        <br>
                                        var response = await client.ExecuteAsync(request);
                                        <br>
                                        Console.WriteLine(response);
                                        `
                                        break;
                                    case "bearer":
                                        codeSnipet.style.backgroundColor = '#393333';
                                        codeSnipet.innerHTML = 
                                        `
                                        var client = new RestClient("${url.value}");
                                        <br>
                                        var request = new RestRequest();
                                        <br>
                                        request.AddHeader("Authorization", "${apiToken.value}");
                                        <br>
                                        var response = await client.ExecuteAsync(request);
                                        <br>
                                        Console.WriteLine(response);
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
                                        var client = new RestClient("${url.value}");
                                        <br>
                                        var body = "${textForBody.value}";
                                        <br>
                                        var request = new RestRequest();
                                        <br>
                                        request.Method = Method.Post;
                                        <br>
                                        request.AddHeader("ContentType", "application/json");
                                        <br>
                                        request.AddBody(body,"application/json");
                                        <br>
                                        var response = await client.ExecuteAsync(request);                            
                                        `
                                        break;
                                    
                                    case "bearer":
                                        codeSnipet.style.backgroundColor = '#393333';
                                        codeSnipet.innerHTML = 
                                    `
                                    var client = new RestClient("${url.value}");
                                    <br>
                                    var body = "${textForBody.value}";
                                    <br>
                                    var request = new RestRequest();
                                    <br>
                                    request.Method = Method.Post;
                                    <br>
                                    request.AddHeader("Authorization", "${apiToken.value}");
                                    <br>
                                    request.AddHeader("ContentType", "application/json");
                                    <br>
                                    request.AddBody(body,"application/json");
                                    <br>
                                    var response = await client.ExecuteAsync(request); 
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
