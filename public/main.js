let n= 1
getNextPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState===4 && request.status===200) {
            const array = JSON.parse(request.response)  
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id 
                xxx.appendChild(li)
            });
            n = n + 1;
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState===4 && request.status===200) {
            console.log(request.response)
            //把符合json语法的字符串转成对象或其他
            const object = JSON.parse(request.response)
            myName.textContent=object.name
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=> {
        if (request.readyState === 4 && request.status ===200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', './3.html')
    request.onload = () => {
        console.log('成功') 
        const div = document.createElement('div');
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('成功') 
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", './2.js')
    request.onload = () => {
        console.log('成功')
        const script = document.createElement('script')
        script.innerHTML = request.response;
        document.body.appendChild(script)

    }
    request.onerror = () => {
        console.log('失败')
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "./style.css")
    request.onload = () => {
        console.log("成功")

        //创建style标签
        const style = document.createElement('style');
        //填写style内容
        style.innerHTML = request.response;
        //把style插到头里
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败')
    } 
    request.send();
}
